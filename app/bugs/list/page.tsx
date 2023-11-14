import React from 'react';
import { Table } from '@radix-ui/themes';
import prisma from '@/prisma/client';
import BugActions from './BugActions';
import { Link, BugStatusBadge } from '../../components';
import { Status, Bug } from '@prisma/client';
import { ArrowUpIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';

interface Props {
  searchParams: { status: Status; orderBy: keyof Bug };
}

const BugPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

    const columns: {label: string; value: keyof Bug; className?:string}[] = [
      {label: 'Bug', value: 'title'},
      {label:'Status', value: 'status', className:'hidden md:table-cell'},
      {label: 'Created', value: 'createdAt', className:'hidden md:table-cell'}
    ];
   
    const orderBy = columns.map((column)=>column.value).includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: 'asc' }
    : undefined;
  const bugs = await prisma.bug.findMany({
    where: { 
      status 
    },
    orderBy,
  });
  
  return (
    <div className='max-w-2xl'>
      <BugActions />
      <div>
      <Table.Root variant='surface'>
  <Table.Header>
    <Table.Row>
      {columns.map((column)=>(
        <Table.ColumnHeaderCell key={column.label}>
        <NextLink
          href={{ query: { ...searchParams, orderBy: column.value } }}
        >
          {' '}
          {column.label}
        </NextLink>
        {column.value === searchParams.orderBy && (
          <ArrowUpIcon className="inline" />
        )}
      </Table.ColumnHeaderCell>
      ))}
      
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
