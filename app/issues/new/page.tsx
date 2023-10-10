"use client"
import React from 'react'
import { TextField, Button } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const CreateIssue = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='Title' />
      </TextField.Root>
      
      <SimpleMDE  placeholder='Whats the issue' />
      <Button>Submit New Issue </Button>
    </div>
  )
}

export default CreateIssue
