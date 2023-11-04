import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import { Heading, Flex, Card } from '@radix-ui/themes';
import BugStatusBadge from '../BugStatusBadge';

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({params}:Props) => {
  const bug = await prisma.bug.findUnique({where: {id: params.id}})

  if(!bug) notFound();

  return (
    <div>
      <Heading>{bug.title}</Heading>
      <Flex gap='4' my='4'>
      <BugStatusBadge status={bug.status} />
      <p>{bug.createdAt.toDateString()}</p>
      </Flex>
      <Card>
      <p>{bug.description}</p>
      </Card>
      
      
      
    </div>
  )
}

export default BugDetailsPage;
