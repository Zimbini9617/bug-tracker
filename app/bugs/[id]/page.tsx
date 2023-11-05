import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import { Heading, Flex, Card, Grid, Box, Button } from '@radix-ui/themes';
import BugStatusBadge from '../../components/BugStatusBadge';
import ReactMarkdown from 'react-markdown';
import { Pencil2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({ params }: Props) => {
  const id = params.id;
  const bug = await prisma.bug.findUnique({ where: { id } });

  if(!bug) notFound();

  return (
    <Grid columns={{initial: '1', md: '2'}} gap='4'>
      <Box>
      <Heading>{bug.title}</Heading>
      <Flex gap='4' my='4'>
      <BugStatusBadge status={bug.status} />
      <p>{bug.createdAt.toDateString()}</p>
      </Flex>
      <Card className='prose' my='4'>
      <ReactMarkdown>{bug.description}</ReactMarkdown>
      </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/bugs/edit/${bug.id}`}>UPDATE BUG</Link>
        </Button>
      </Box>
    </Grid>
  )
}

export default BugDetailsPage;
