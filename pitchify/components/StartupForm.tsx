"use client"
import React,{ useState} from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea';
import MDEditor from '@uiw/react-md-editor';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
const StartupForm = () => {

  const [errors,setErrors] = useState<Record<string,string>>({});
  const [pitch,setPitch] = useState(""); 
  const isPending = false;

  return (
  <form action={()=>{}} className="startup-form">
    {/* for title */}
    <div>
      <label htmlFor="title" className='startup-form_label'>
        title
      </label>
      <Input 
      id="title"
      name="title"
      className='startup-form_input'
      required
      placeholder='Startup Title'
      />
      {errors.title && <p className="startup-form_error">{errors.title}</p>}
    </div>

    {/* for description */}
    <div>
      <label htmlFor="description" className='startup-form_label'>
        description
      </label>
      <Textarea
      id="description"
      name="description"
      className='startup-form_input'
      required
      placeholder='Startup Description'
      />
      {errors.description && <p className="startup-form_error">{errors.description}</p>}
    </div>

    {/* for category */}
    <div>
      <label htmlFor="category" className='startup-form_label'>
        category
      </label>
      <Input 
      id="category"
      name="category"
      className='startup-form_input'
      required
      placeholder='Startup Category (Tech , Health , Education ....)'
      />
      {errors.category && <p className="startup-form_error">{errors.category}</p>}
    </div>

    {/* for image link */}
    <div>
      <label htmlFor="link" className='startup-form_label'>
        Image Url
      </label>
      <Input 
      id="link"
      name="link"
      className='startup-form_input'
      required
      placeholder='Startup Image URL'
      />
      {errors.link && <p className="startup-form_error">{errors.link}</p>}
    </div>

    {/* for pitch markdown */}
    <div data-color-mode="light">
      <label htmlFor="pitch" className='startup-form_label'>
        Pitch
      </label>
      <MDEditor
      value={pitch}
      onChange={(value) => setPitch(value as string || '')}
      id="pitch"
      preview="edit"
      height={300}
      style ={{borderRadius :20 , overflow:'hidden'}}
      textareaProps={{
        placeholder: 'briefly describe ur startup / pitch',
      }}
      previewOptions={{
        disallowedElements : ["style"],
      }}
      />
      
      {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
    </div>
    
    <Button type="submit" className="startup-form_btn"
      disabled={isPending}>

      {isPending ? "Creating..." : "Create Startup"}
      <Send className='size-5 ml-2'/>

    </Button>

  </form>
)}

export default StartupForm
