import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();


// export default async function  GET()
export const GET = async() =>{

    await client.user.create({
        data: {
            "email": "NishanAcharya29@gmail.com",
            "name": "Nishan Acharya",
        }
    })

    return NextResponse.json({
        message: "Hello Nishan Hope you are doing well"
    })

}