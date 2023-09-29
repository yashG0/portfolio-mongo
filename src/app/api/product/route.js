import { mongoUrl } from "@/lib/db";
import { Product } from "@/lib/models/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(mongoUrl);
    const data = await Product.find({ name: "yash" });
    return NextResponse.json({ result: data });
}


export async function POST(req) {
    const { name, email, message } = await req.json();
    await mongoose.connect(mongoUrl);
    await Product.create({ name, email, message })
    return NextResponse.json({ message: "Created" })
}