'use client'
import React from 'react';
import { TextField, TextArea, Button } from '@radix-ui/themes';

const NewBugPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='title' />
      </TextField.Root>
      <TextArea placeholder='Description' />
      <Button>SUBMIT NEW BUG</Button>
    </div>
  )
}

export default NewBugPage;