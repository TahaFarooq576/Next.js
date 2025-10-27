import { NextResponse} from "next/server"
 
export async function POST(request) {
    let data= await request.json()
    console.log(data)
    return NextResponse.json({success:true , data})
}
 

 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request) {}