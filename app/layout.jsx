"use client";


import Header from "@/components/Header";
import { useEffect } from "react";

export default function RootLayout({ children }) {

  useEffect(()=> {
    console.log("layout Test ....");
    
  },[])
  return (
    <html lang="en">
      <body>  
        <Header />
        {children}
        </body>
    </html>
  );
}
