import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

// export function GET(req) {
//     return NextResponse.json({message:"hello from api"},{status : 200})
// }



export async function GET(req) {
    // console.log(req.nextUrl.searchParams);   //برای دریافت params
    
    // const cookieStore = await cookies()
    // cookieStore.set("name","ali")

    // const cookiesGet = cookieStore.get('name');
    // console.log(cookiesGet);

    // cookieStore.delete('name');

    // redirect("https://www.google.com")

    

    
    return NextResponse.json({message:"hello from api"},{status : 200})
}

