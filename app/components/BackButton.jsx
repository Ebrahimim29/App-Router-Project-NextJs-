'use client'

import { Button } from "flowbite-react"
import { useRouter } from "next/navigation";

const BackButton = () => {

    const router = useRouter()

    return (
        <Button onClick={()=>router.back()} className="mt-2">
            Back
        </Button>
    )
}

export default BackButton;