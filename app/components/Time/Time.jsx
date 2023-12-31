"use client";

import { useState, useEffect } from "react";

export async function getServerSideProps() {
  const initialTimeString = new Date().toLocaleTimeString("es-GT", {
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h24",
    timeZone: "America/Guatemala",
  });

  return {
    props: {
      initialTimeString,
    },
  };
}

export default function Time({ initialTimeString }) {
  const [timeString, setTimeString] = useState(initialTimeString);
  const [isAfter, setIsAfter] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const amOrPm = date.getHours() >= 12 ? "PM" : "AM";
      setIsAfter(amOrPm);
      const timeString = date.toLocaleTimeString("es-GT", {
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h24",
        timeZone: "America/Guatemala",
      });
      setTimeString(timeString);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <span>Guatemala City, {timeString} {isAfter} </span>;
}
