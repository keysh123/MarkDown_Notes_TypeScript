import React from 'react'
import NoteForm from './NoteForm'

const NewNote = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 m-5'>
      
    <h1>New Note</h1>  
   
    
    <NoteForm/>

    </div>
  )
}

export default NewNote