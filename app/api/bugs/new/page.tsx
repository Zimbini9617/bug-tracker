'use client'
import React, {useState} from 'react';
import { TextField, TextArea, Button, Callout } from '@radix-ui/themes';
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
  const [error, setError] = useState('');
  return (
    <div className='max-w-xl'>
    {error && (<Callout.Root className='mb-5'>
      <Callout.Text color='green'>{error}</Callout.Text>
      </Callout.Root>)}
    <form className='space-y-3' onSubmit={handleSubmit(async (data)=>{
      try{
        throw new Error();
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
      <Controller control={control} name='description' render={({field})=> (<SimpleMDE placeholder='Description' {...field}/>)}/>
      
      <Button>SUBMIT NEW BUG</Button>
    </form>
    </div>
  )
}

export default NewBugPage;