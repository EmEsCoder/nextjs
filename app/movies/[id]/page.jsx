import { notFound } from "next/navigation";

export default async function harchi({params}) {
    const {id} = await params;
    if(parseInt(id) == 2) {
        notFound()
    }
    
    return(
        <p>{id}</p>
    )
}