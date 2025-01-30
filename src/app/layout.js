'use client'
import "./global.css"
import { Header } from "./components/Header"
import Footer from "./components/Footer"

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
  <meta charSet="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;500;600;700&family=Quantico:wght@400;700&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"></link>
</head>
        <body className="bg-gray-800">
          <Header/>
          {children}
          <Footer/>
          </body>
      </html>
    )
  }