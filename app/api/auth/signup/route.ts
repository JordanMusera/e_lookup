import User from "@/models/user";
import dbConnect from "@/app/config/database";
import { NextResponse } from "next/server";
import bcrypt, { genSalt } from 'bcrypt';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const { email, password } = await request.json()
        console.log("Email: " + email + "\n" + "password: " + password);

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({
                success: false,
                message: "User already exists"
            })
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await User.create({
            email: email,
            password: hashedPassword
        })

        return NextResponse.json({
            success:true,
            message:"Account created successfully"
        });
    } catch (error) {

    }

}

const hashPassword = async(password:string)=>{
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt);

    return password;
}