import prisma from '@/prisma/client';
import LatestBugs from './LatestBugs';
import BugSummary from './BugSummary';
import BugChart from './BugChart';
import { Grid, Flex } from '@radix-ui/themes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BUG TRACKER - Dashboard',
  description: 'View a summary of project bugs',
};

export default async function Home() {
  const open = await prisma.bug.count({ where: { status: 'OPEN' } });

  const inProgress = await prisma.bug.count({
    where: { status: 'IN_PROGRESS' },
  });
  const closed = await prisma.bug.count({ where: { status: 'CLOSE' } });

  return (
    <main>
      <Grid columns={{ initial: '1', md: '2' }} gap="5">
        <Flex direction="column" gap="5">
          <BugSummary open={open} inProgress={inProgress} closed={closed} />
          <BugChart open={open} inProgress={inProgress} closed={closed} />
        </Flex>
        <LatestBugs />
      </Grid>
    </main>
  );
}