import React from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import { Grid, Box, Flex } from '@radix-ui/themes';
import EditBugButton from './EditBugButton';
import BugDetails from './BugDetails';
import DeleteBugButton from './DeleteBugButton';
import { getServerSession } from 'next-auth';
import { authOption } from '@/app/auth/authOption';
import AssigneeSelect from './AssigneeSelect';

interface Props {
  params: { id: string };
}

const BugDetailsPage = async ({ params }: Props) => {
  const id = params.id;
  const bug = await prisma.bug.findUnique({ where: { id } });

  const session = await getServerSession(authOption)

  if(!bug) notFound();

  return (
    <Grid columns={{initial: '1', sm: '5'}} gap='4'>
      <Box className='md:col-span-4'>
        <BugDetails bug = {bug}/>
      </Box>
      {session && (<Box>
        <Flex direction='column' gap='5'>
          <AssigneeSelect />
        <EditBugButton bugId={bug.id}/>
        <DeleteBugButton bugId={bug.id}/>
        </Flex>
      </Box>)}
    </Grid>
  );
};

export default BugDetailsPage;
