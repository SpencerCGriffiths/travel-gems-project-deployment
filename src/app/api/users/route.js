import { connectToDatabase } from "@/lib/db"
import { NextResponse } from "next/server"
import { Users } from "@/models/users";


export const GET = async (request) => {
    try {
        connectToDatabase()
        const users = await Users.find()
        return NextResponse.json(users)
    } catch (err) {
        throw new Error("Failed to fetch users")
    }
}