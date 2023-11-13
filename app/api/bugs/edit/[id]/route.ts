import { authOption } from '@/app/auth/authOption';
import { patchBugSchema } from '@/app/validationSchema';
import prisma from '@/prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

  const session = await getServerSession(authOption)
  if(!session)
 return NextResponse.json({}, { status:401 });

  const body = await request.json();
  const validation = patchBugSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
const {title, description, assignedToUserId} = body;

const user = prisma.user.findUnique({where: {id: assignedToUserId}})
if(!user){
  return NextResponse.json({err: "No user found"}, {status: 400})
}
  const bug = await prisma.bug.findUnique({ where: { id: params.id } });
  if (!bug)
    return NextResponse.json({ error: 'Invalid bug' }, { status: 404 });

  const updatedBug = await prisma.bug.update({
    where: { id: bug.id },
    data: {
      title,
      description,
      assignedToUserId,

    },
  });

  return NextResponse.json(updatedBug);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

  const session = await getServerSession(authOption)
  if(!session)
 return NextResponse.json({}, { status:401 });

  const bug =prisma.bug.findUnique({where: {id:params.id}})
  if(!bug)
  return NextResponse.json({error: "No bug found"}, {status: 404});
await prisma.bug.delete({where: { id:params.id } });
return NextResponse.json({message: "The bug is fixed"}, {status: 200}
);
}