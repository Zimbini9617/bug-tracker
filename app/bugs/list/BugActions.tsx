import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import BugStatusFilter from './BugStatusFilter';

const BugActions = () => {
  return (
    <Flex mb='4' justify='between'>
      <BugStatusFilter />
      <Button >
        <Link href='/api/bugs/new'>ADD NEW BUG</Link>
      </Button>
      </Flex>
  )
}

export default BugActions