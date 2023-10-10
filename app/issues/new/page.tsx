"use client"
import React from 'react'
import { TextField, Button } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';


interface IssueForm {
    title: String,
     description: String
}


const CreateIssue = () => {
    const {register, control, handleSubmit} = useForm<IssueForm>();
    const router = useRouter();
  return (
    <form onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues',data);
        router.push('/issues')
    } )} className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')} />
      </TextField.Root>
      <Controller name='description' control={control} render={({field}) => <SimpleMDE  placeholder='Whats the issue' {...field} />}  />
      
      <Button>Submit New Issue </Button>
    </form>
  )
}

export default CreateIssue
