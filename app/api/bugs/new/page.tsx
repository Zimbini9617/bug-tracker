'use client'
import React, {useState} from 'react';
import { TextField, TextArea, Button, Callout, Text } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createBugSchema } from '@/app/validationSchema';
import {z} from 'zod';

const NewBugPage = () => {
  const {register, control, handleSubmit, formState: {errors}, } = useForm<BugForm>({
    resolver:zodResolver(createBugSchema)
  });
  const router = useRouter();
  const [error, setError] = useState('');
  return (
    <div className='max-w-xl'>
    {error && (<Callout.Root className='mb-5'>
      <Callout.Text color='green'>{error}</Callout.Text>
      </Callout.Root>)}
    <form className='space-y-3' onSubmit={handleSubmit(async (data)=>{
      try{
        await axios.post('/api/bugs', data);
      router.push('/bugs')
      }
      catch(error){
        setError('Unexpected Error happened')
      }
    })}>
      <TextField.Root>
        <TextField.Input placeholder='title' {...register('title')}/>
      </TextField.Root>
      {errors.description && <Text color='red' as='p'>{(errors.description.message)}</Text> }
      <Controller control={control} name='description' render={({field})=> (<SimpleMDE placeholder='Description' {...field}/>)}/>
      
      <Button>SUBMIT NEW BUG</Button>
    </form>
    </div>
  )
}

export default NewBugPage;