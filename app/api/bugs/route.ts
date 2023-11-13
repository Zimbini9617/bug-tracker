import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { createBugSchema } from '../../validationSchema';
import { getServerSession } from 'next-auth';
import { authOption } from '@/app/auth/authOption';

export async function POST(request: NextRequest){
  const session = await getServerSession(authOption)
  if(!session)
 return NextResponse.json({}, { status:401 });
const body = await request.json();

const validation = createBugSchema.safeParse(body)


if(!validation.success)
return NextResponse.json(validation.error.format(), {status: 400});

const newBug = await prisma.bug.create({
  data: {
    title: body.title,
    description: body.description
  },
});
return NextResponse.json(newBug, {status: 201})
}


export async function DELETE(request: NextRequest){
  
  }
