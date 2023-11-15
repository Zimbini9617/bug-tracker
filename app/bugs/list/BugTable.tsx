import { ArrowUpIcon } from '@radix-ui/react-icons';
import { Table } from '@radix-ui/themes';
import React from 'react';
import { Link, BugStatusBadge } from '../../components';
import NextLink from 'next/link';
import { Bug, Status } from '@prisma/client';

export interface BugQuery {
  status: Status;
  orderBy: keyof Bug;
  page: string;
}

interface Props {
  searchParams: BugQuery;
  bugs: Bug[];
}

const BugTable = ({searchParams, bugs}: Props) => {
  return (
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
  );
};

const columns: {label: string; value: keyof Bug; className?:string}[] = [
  {label: 'Bug', value: 'title'},
  {label:'Status', value: 'status', className:'hidden md:table-cell'},
  {label: 'CreatedAt', value: 'createdAt', className:'hidden md:table-cell'},
];

export const columnNames = columns.map((column) => column.value);
export default BugTable;