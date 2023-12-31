import { GeistSans } from 'geist/font/sans';
import './globals.css'
import { Footer, Header, Socials } from './components';


export const metadata = {
  title: 'Ricardo Guevara',
  description: 'Frontend Personal Website Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Header/>
        {children}
        <Socials />
        </body>
    </html>
  )
}
