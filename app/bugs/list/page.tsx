import React from 'react';
import prisma from '@/prisma/client';
import BugActions from './BugActions';
import { Status, Bug } from '@prisma/client';
import Pagination from '@/app/components/Pagination';
import { columnNames } from './BugTable';
import { BugQuery } from './BugTable';
import BugTable from './BugTable';

interface Props {
  searchParams: BugQuery
}

const BugPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

 
    const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: 'asc' }
    : undefined;

    const page = parseInt(searchParams.page) || 1;
    const pageSize = 10;

  const bugs = await prisma.bug.findMany({
    where: { 
      status 
    },
    orderBy,
    skip: (page - 1)*pageSize,
    take: pageSize,
  });
  
  const bugCount = await prisma.bug.count({where: {status}});

  return (
    <div className='max-w-2xl'>
      <BugActions />
      <div className="mb-3">
        <BugTable searchParams={searchParams} bugs={bugs}/>
      </div>
      <Pagination pageSize={pageSize} currentPage={page} itemCount={bugCount}/>
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default BugPage;
