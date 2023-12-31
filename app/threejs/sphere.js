import * as THREE from "three";
import fragment from "../shaders/fragment.glsl";
import fragment1 from "../shaders/fragment1.glsl";
import vertex from "../shaders/vertex.glsl";
import vertex1 from "../shaders/vertex1.glsl";
import { DotScreenShader } from "./CustomShader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

export default class Sketch {
  constructor(options) {
    this.scene = new THREE.Scene();
    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.physicallyCorrectlights = true;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.appendChild(this.renderer.domElement);
    this.prevTime = performance.now();
    this.render = this.render.bind(this);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      2000
    );

    this.camera.position.set(0, 0, 1.3);
    this.time = 0;
    this.isPlaying = true;

    this.addObjects();
    this.initPost();
    this.resize();
    this.render();
    this.setupResize();
  }


  initPost() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    const effect1 = new ShaderPass(DotScreenShader);
    effect1.uniforms["scale"].value = 4;
    this.composer.addPass(effect1);
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.composer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.imageAspect = 853 / 1280;
    let a1;
    let a2;

    if (this.height / this.width > this.imageAspect) {
      a1 = (this.width / this.height) * this.imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = this.height / this.width / this.imageAspect;
    }

    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    this.cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipMapLinearFilter,
      colorSpace: THREE.SRGBColorSpace,
    });

    this.cubeCamera = new THREE.CubeCamera(0.1, 10, this.cubeRenderTarget);

    let that = this;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });

    this.geometry = new THREE.SphereGeometry(1.5, 32, 32);
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);

    let geo = new THREE.SphereGeometry(0.4, 32, 32);
    this.mat = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        tCube: { value: 0 },
        resolution: { value: new THREE.Vector4() },
      },
      vertexShader: vertex1,
      fragmentShader: fragment1,
    });

    this.smallSphere = new THREE.Mesh(geo, this.mat);
     this.scene.add(this.smallSphere);
  }

  stop() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.render();
    }
  }

  render = () => {
    if (!this.isPlaying) return;
    const currentTime = performance.now();
    const deltaTime = (currentTime - this.prevTime) * 0.0003;
    this.time += deltaTime;
    this.prevTime = currentTime;
   this.smallSphere.visible = false;
   this.cubeCamera.update(this.renderer, this.scene);
   this.smallSphere.visible = true;
   this.mat.uniforms.tCube.value = this.cubeRenderTarget.texture;
    this.material.uniforms.time.value = this.time;
    this.composer.render(this.scene, this.camera);
    requestAnimationFrame(this.render);
  }
}
