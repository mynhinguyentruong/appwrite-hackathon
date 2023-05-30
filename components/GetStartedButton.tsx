'use client'

import { useRouter } from "next/navigation";
import { Account } from "appwrite"

export default function GetStartedButton() {
    const router = useRouter();

    async function getCredential() {
        // fetch '/api/login'
        // await router.push('/dashboard')
        const response = await fetch('/api')
        const client = await response.json()
        console.log({client})
        const account = new Account(client);

        account.get().then(response => console.log({response})).catch(error => {
            console.log({error})
            router.push('/dashboard')
        })

    }
    return (
        <button
            onClick={getCredential}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Get Started</button>

    )
}
