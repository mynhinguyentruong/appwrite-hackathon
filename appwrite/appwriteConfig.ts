import { Client, Account, } from 'appwrite';

export const PROJECT_ID = process.env.PROJECT_ID

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

export const account = new Account(client);


