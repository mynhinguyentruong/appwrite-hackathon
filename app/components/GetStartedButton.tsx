'use client'


export default function GetStartedButton() {

    async function getCredential() {
        // fetch '/api/login'
    }
    return (
        <button
            onClick={getCredential}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Get Started</button>

    )
}
