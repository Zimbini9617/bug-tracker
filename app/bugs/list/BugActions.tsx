import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const BugActions = () => {
  return (
    <div className='mb-4'>
      <Button >
        <Link href='/api/bugs/new'>ADD NEW BUG</Link>
      </Button>
      </div>
  )
}

export default BugActions