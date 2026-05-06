import { NextResponse } from "next/server"

// export function GET(req) {
//     return NextResponse.json({message:"hello from api"},{status : 200})
// }



export function GET(req) {
    console.log(req.nextUrl.searchParams);   //برای دریافت params
    
    return NextResponse.json({message:"hello from api"},{status : 200})
}