import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import { Grid, Box } from '@radix-ui/themes';
import EditBugButton from './EditBugButton';
import BugDetails from './BugDetails';

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
        <BugDetails bug = {bug}/>
      </Box>
      <Box>
        <EditBugButton bugId={bug.id}/>
      </Box>
    </Grid>
  );
};

export default BugDetailsPage;
