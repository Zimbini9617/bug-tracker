'use client'
import React, {useState} from 'react';
import { TextField, Button, Callout } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createBugSchema } from '@/app/validationSchema';
import {z} from 'zod';
import { ErrorMessage, Spinner  } from '@/app/components';
import { Bug } from '@prisma/client';


type BugFormData = z.infer<typeof createBugSchema>

const BugForm = ({bug}: {bug:Bug}) => {
  const {register, control, handleSubmit, formState: {errors}, } = useForm<BugFormData>({
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
    <form
    className='space-y-3' onSubmit={handleSubmit(async (data)=>{
      try{
        setSubmitting(true)
        if(bug)
        await axios.patch('/api/bugs/edit/' + bug.id, data)
        else
        await axios.post('/api/bugs', data);
      router.push('/bugs/list');
      router.refresh();
      }
      catch(error){
        setSubmitting(false)
        setError('Unexpected Error happened')
      }
    })}>
      <TextField.Root>
        <TextField.Input placeholder='title' {...register('title')} defaultValue={bug?.title}/>
      </TextField.Root>
      
      <ErrorMessage> {errors.title?.message}</ErrorMessage>

      <Controller control={control} name='description' defaultValue={bug?.description} render={({field})=> (<SimpleMDE placeholder='Description' {...field}/>)}/>

      <ErrorMessage> {errors.title?.message}</ErrorMessage>
      <Button disabled={isSubmitting}>
        {bug ? 'Update Bug': 'Submit New Bug'}{' '} {isSubmitting && <Spinner />} </Button>
    </form>
    </div>
  );
};

export default BugForm;
