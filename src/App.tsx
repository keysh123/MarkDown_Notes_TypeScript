import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NewNote from './components/NewNote'

export type Note = {
  id: string
} & NoteData

export type NoteData = {
  title: string
  tags: TagOption[]
  body: string
}

export type TagOption = {
  value: string
  label: string
}

const App = () => {
  return (
    <div className='my-4'>
      <Routes>
        <Route path='/' element={<h1>HII</h1>}/>
        <Route path='/new' element={<NewNote/>}/>
        <Route path='/:id' element={<h1>New</h1>}>
        <Route index element={<h1>Show</h1>}/>
        <Route path='edit' element={<h1>Edit</h1>}/>
        
        </Route>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  )
}

export default App