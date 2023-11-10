import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import { Grid, Box, Flex } from '@radix-ui/themes';
import EditBugButton from './EditBugButton';
import BugDetails from './BugDetails';
import DeleteBugButton from './DeleteBugButton';

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({ params }: Props) => {
  const id = params.id;
  const bug = await prisma.bug.findUnique({ where: { id } });

  if(!bug) notFound();

  return (
    <Grid columns={{initial: '1', sm: '5'}} gap='4'>
      <Box className='md:col-span-4'>
        <BugDetails bug = {bug}/>
      </Box>
      <Box>
        <Flex direction='column' gap='5'>
        <EditBugButton bugId={bug.id}/>
        <DeleteBugButton bugId={bug.id}/>
        </Flex>
      </Box>
    </Grid>
  );
};

export default BugDetailsPage;
