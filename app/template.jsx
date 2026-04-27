"use client";

import { useEffect } from "react";

export default function Template({children}) {
      useEffect(()=> {
    console.log("Template Test ....");
    
  },[])
    return (
        <div>
            {children}
        </div>
    )
}