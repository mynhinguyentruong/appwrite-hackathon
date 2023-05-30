import { Client, Account } from "appwrite";
import {NextResponse} from "next/server";


export async function GET(request: Request) {
    console.log("I RAN")
    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject(`${process.env.PROJECT_ID}`);               // Your project ID


    return NextResponse.json(client)
}
