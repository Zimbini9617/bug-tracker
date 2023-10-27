'use client'
import React from 'react';
import { TextField, TextArea, Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const NewBugPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='title' />
      </TextField.Root>
      <SimpleMDE placeholder='Description' />
      <Button>SUBMIT NEW BUG</Button>
    </div>
  )
}

export default NewBugPage;