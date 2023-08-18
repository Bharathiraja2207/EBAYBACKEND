import { client } from '../index.js';

export async function hashpass(email, hashpassword) {
    return await client
        .db("ebay")
        .collection("signup")
        .insertOne({
            email: email,
            password: hashpassword
        });
}

export async function getuserbyname(username, hashpassword) {
    return await client
        .db("ebay")
        .collection("signup")
        .findOne({
            email: email
        });
}