"use client"

import { useSearchParams } from "next/navigation"

export default function Dashboard () {
    const params = useSearchParams()
    return (
        <h3>
            dashboard page
            <p>{params.get('name')} , {params.get('family')} : {params.get('age')}</p>
        </h3>
    )
}