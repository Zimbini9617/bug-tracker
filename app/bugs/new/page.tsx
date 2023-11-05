'use client'
import React, {useState} from 'react';
import { TextField, Button, Callout } from '@radix-ui/themes';
import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createBugSchema } from '@/app/validationSchema';
import {z} from 'zod';
import { ErrorMessage, Spinner  } from '@/app/components';


type BugForm = z.infer<typeof createBugSchema>

const SimpleMDE = dynamic(()=>import("react-simplemde-editor"), {
  ssr:false,
});
const NewBugPage = () => {
  const {register, control, handleSubmit, formState: {errors}, } = useForm<BugForm>({
    resolver:zodResolver(createBugSchema)
  });
  const router = useRouter();
  const [error, setError] = useState('');

  const[isSubmitting, setSubmitting] = useState(false);
  return (
    <div className='max-w-xl'>
    {error && (<Callout.Root className='mb-5'>
      <Callout.Text color='green'>{error}</Callout.Text>
      </Callout.Root>)}
    <form className='space-y-3' onSubmit={handleSubmit(async (data)=>{
      try{
        setSubmitting(true)
        await axios.post('/api/bugs', data);
      router.push('/bugs');
      router.refresh();
      }
      catch(error){
        setSubmitting(false)
        setError('Unexpected Error happened')
      }
    })}>
      <TextField.Root>
        <TextField.Input placeholder='title' {...register('title')}/>
      </TextField.Root>
      
      <ErrorMessage> {errors.title?.message}</ErrorMessage>

      <Controller control={control} name='description' render={({field})=> (<SimpleMDE placeholder='Description' {...field}/>)}/>

      <ErrorMessage> {errors.title?.message}</ErrorMessage>
      <Button disabled={isSubmitting}>SUBMIT NEW BUG {isSubmitting && <Spinner />} </Button>
    </form>
    </div>
  );
};

export default NewBugPage;