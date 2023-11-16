import React, { cache } from 'react';
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
const fetchUser = cache((bugId: string) =>
  prisma.bug.findUnique({ where: { id: bugId } })
);

const BugDetailsPage = async ({ params }: Props) => {
   const bug = await fetchUser(params.id);

  const session = await getServerSession(authOption)

  if(!bug) notFound();

  return (
    <Grid columns={{initial: '1', sm: '5'}} gap='4'>
      <Box className='md:col-span-4'>
        <BugDetails bug = {bug}/>
      </Box>
      {session && (<Box>
        <Flex direction='column' gap='5'>
          <AssigneeSelect bug={bug}/>
        <EditBugButton bugId={bug.id}/>
        <DeleteBugButton bugId={bug.id}/>
        </Flex>
      </Box>)}
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const bug = await fetchUser(params.id);

  return {
    title: bug?.title,
    description: 'Details of bug ' + bug?.id,
  };
}

export default BugDetailsPage;
