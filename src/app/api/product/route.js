import { mongoUrl } from "@/lib/db";
import { Product } from "@/lib/models/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export async function GET() {
//     await mongoose.connect(mongoUrl);
//     const data = await Product.find({ name: "yash" });
//     return NextResponse.json({ result: data });
// }


export async function POST(req) {
    // Extract data from the request's JSON body
    const { name, email, message } = await req.json();

    // Connect to the MongoDB database
    await mongoose.connect(mongoUrl);

    try {
        // Create a new document in the Product collection
        await Product.create({ name, email, message });

        return NextResponse.json({ message: "Created" });
    } finally {
        // Close the MongoDB connection when the function is done
        mongoose.disconnect();
    }
}