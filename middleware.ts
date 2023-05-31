import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server';
import { Client, Account } from "appwrite";


export async function middleware(request: NextRequest) {
    // const url = request.nextUrl.clone()
    // console.log({url})
    // const client = new Client();
    //
    // const account = new Account(client);
    //
    // client
    //     .setEndpoint('https://cloud.appwrite.io/v1/account/sessions/magic-url') // Your API Endpoint
    //     .setProject(process.env.PROJECT_ID) // Your project ID
    // ;
    // const searchParam = new URLSearchParams(url.search.slice(1))
    // const userId = searchParam.get('userId')
    // const secret = searchParam.get('secret')
    //
    // if (userId && secret) {
    //     const promise = account.updateMagicURLSession(userId, secret);
    //
    //     promise.then(function (response) {
    //         console.log(response); // Success
    //     }, function (error) {
    //         console.log(error); // Failure
    //     });
    //
    //
    //     return NextResponse.next()
    //
    // }
    //
    //
    // url.pathname = '/login'
    // const res = await fetch('http://localhost:3000/api')
    // const  account = await res.json()
    // account.get().then().catch(err => console.log(err))

    return NextResponse.next()
}

export const config = {
    matcher: '/dashboard',
};
