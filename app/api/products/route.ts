import schema from "./schema";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { log } from "console";

export async function GET(request: NextRequest) {
  try {
    const products = await prisma.products.findMany();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Błąd podczas pobierania produktów:", error);
    return NextResponse.json({ message: "Wewnętrzny błąd serwera" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) { 

    const body = await request.json()
    console.log(body);
    
    const validation = schema.safeParse(body)

    if (!validation.success)
        return NextResponse.json(validation.error, {status: 400})

    const nowyProdukt = await prisma.products.create({
        data: {
        name: body.name,
        price: body.price
        }
    })

    


    
    return NextResponse.json(nowyProdukt, {status: 201})
}

