import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import { Heading, Flex, Card } from '@radix-ui/themes';
import BugStatusBadge from '../BugStatusBadge';
import ReactMarkdown from 'react-markdown';

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({ params }: Props) => {
  const id = params.id;
  const bug = await prisma.bug.findUnique({ where: { id } });

  if(!bug) notFound();

  return (
    <div>
      <Heading>{bug.title}</Heading>
      <Flex gap='4' my='4'>
      <BugStatusBadge status={bug.status} />
      <p>{bug.createdAt.toDateString()}</p>
      </Flex>
      <Card className='prose' my='4'>
      <ReactMarkdown>{bug.description}</ReactMarkdown>
      </Card>
    </div>
  )
}

export default BugDetailsPage;
