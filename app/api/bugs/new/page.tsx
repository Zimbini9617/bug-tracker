'use client'
import React from 'react';
import { TextField, TextArea, Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface BugForm{
  title: string;
  description: string;
}

const NewBugPage = () => {
  const {register, control, handleSubmit} = useForm<BugForm>();
  const router = useRouter();
  console.log(register('title'))
  return (
    
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data)=>{
      await axios.post('/api/bugs', data);
      router.push('/bugs')
    })}>
      <TextField.Root>
        <TextField.Input placeholder='title' {...register('title')}/>
      </TextField.Root>
      <Controller control={control} name='description' render={({field})=> (<SimpleMDE placeholder='Description' {...field}/>)}/>
      
      <Button>SUBMIT NEW BUG</Button>
    </form>

  )
}

export default NewBugPage;