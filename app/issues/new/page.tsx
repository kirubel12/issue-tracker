"use client"
import React from 'react'
import { TextField, TextArea, Button } from "@radix-ui/themes"
const CreateIssue = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='Title' />
      </TextField.Root>
      
      <TextArea placeholder='Whats the issue' />
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default CreateIssue
