import { Table } from '@radix-ui/themes';
import React from 'react';
import {Skeleton} from '@/app/components';
import BugActions from './BugActions';

const LoadingBugPage = () => {
  let bugs = [1,2,3,4,5]
  return (
    <div className='max-w-2xl'>
      <BugActions />
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
      <Table.Row key={bug}>
      <Table.Cell>
        <Skeleton />
        <div className='block md:hidden my-2'>
          <Skeleton />
          </div>
        </Table.Cell>
      <Table.Cell className='hidden md:table-cell'>
      <Skeleton />
      </Table.Cell>
      <Table.Cell className='hidden md:table-cell'>
        <Skeleton />
      </Table.Cell>
    </Table.Row>
    ))}
    </Table.Body>
  </Table.Root>
  </div>
  )
}

export default LoadingBugPage;