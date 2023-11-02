import React from 'react';
import { Button, Table, Badge } from '@radix-ui/themes';
import Link from 'next/link';
import prisma from '@/prisma/client';
import BugStatusBadge from './BugStatusBadge';

const BugPage = async () => {
  const bugs = await prisma.bug.findMany();
  return (
    <div className='max-w-2xl'>
      <div>
      <Button ><Link href='/api/bugs/new'>ADD NEW BUG</Link></Button>
      </div>

      <div>
      <Table.Root variant='surface'>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Bugs</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
  {bugs.map((bug)=>(
    <Table.Row key={bug.id}>
    <Table.Cell>
      {bug.title}{' '}
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
  )
}

export default BugPage;