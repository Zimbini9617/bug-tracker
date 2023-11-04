import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({params}:Props) => {
  const bug = await prisma.bug.findUnique({where: {id: params.id}})

  if(!bug) notFound();

  return (
    <div>
      <p>{bug.title}</p>
      <p>{bug.description}</p>
      <p>{bug.status}</p>
      <p>{bug.createdAt.toDateString()}</p>
    </div>
  )
}

export default BugDetailsPage;
