import React from 'react';
import { Table } from '@radix-ui/themes';
import prisma from '@/prisma/client';
import delay from 'delay';
import BugActions from './BugActions';
import { Link, BugStatusBadge } from '../../components';
import { Status } from '@prisma/client';

interface Props {
  searchParams: { status: Status };
}

const BugPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
    
  const bugs = await prisma.bug.findMany({
    where: { 
      status, 
    },
  });
  delay(2000);
  return (
    <div className='max-w-2xl'>
      <BugActions />
      <div>
      <Table.Root variant='surface'>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>BUGS</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>STATUS</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>CREATED</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
  {bugs.map((bug)=>(
    <Table.Row key={bug.id}>
    <Table.Cell>
    <Link href={`/bugs/${bug.id}`} >
      {bug.title}
      </Link>
      <div className='block md:hidden my-2'>
        <BugStatusBadge status= {bug.status}/>
        </div>
      </Table.Cell>
    <Table.Cell className='hidden md:table-cell'>
    <BugStatusBadge status= {bug.status}/>
    </Table.Cell>
    <Table.Cell className='hidden md:table-cell'>{bug.createdAt.toDateString()}</Table.Cell>
  </Table.Row>
  ))}
  </Table.Body>
</Table.Root>
      </div>
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default BugPage;
