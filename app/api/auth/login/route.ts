import dbConnect from "@/app/config/database";
import bcrypt from "bcrypt"
import User from "@/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(request:Request){
    await dbConnect();
    const {email,password} = await request.json();
    const user = await User.findOne({email});
    
    if(!user){
        return NextResponse.json({
            success:false,
            message:"User does not exist!"
        })
    }

    const passValid = await validatePass(password,user.password);

    if(passValid){
        const cookie = await createCookie(user._id,user.email)
        return NextResponse.json({
            success:true,
            message:"User authenticated successfully!"
        },{
            headers:{
                'Set-Cookie':cookie,
                'Content-Type':'application/json'
            }
        })
    }else{
        return NextResponse.json({
            success:false,
            message:"Incorrect user password!"
        })
    }
}

const validatePass =(password:string,hashedPassword:string)=>{
    return bcrypt.compare(password,hashedPassword);
}


const createCookie=(id:string,email:string)=>{
    //create token
    const token = jwt.sign(
        { id: id, email: email },
        process.env.JWT_SECRET || 'default_secret_key',
        { expiresIn: '7d' }
      );
      

    //create cookie
    const cookie = serialize('token',token,{
        httpOnly:true,
        path:'/',
        sameSite:true,
        maxAge:7*24*60*60,
        secure:process.env.NODE_ENV==='production'
    });

    return cookie;
}