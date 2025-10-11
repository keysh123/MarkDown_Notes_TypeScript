import React, { useMemo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NewNote from './components/NewNote'
import { useLocalStorage } from './components/useLocalStorage'

export type Note = {
  id: string
} & NoteData

export type NoteData = {
  title: string
  tags: TagOption[]
  body: string
}
export type RawNote = {
  id :string
} & RawNoteData
export type RawNoteData = {
  title: string
  tagIds: string[]
  body: string
}

export type TagOption = {
  value: string
  label: string
}
export type Tag = {
  id : string
  label : string
}

const App = () => {
  const [notes,SetNotes] = useLocalStorage<RawNote[]>("NOTES",[]);
  const [tags,setTags] = useLocalStorage<Tag[]>("TAGS",[]);
const notesWithTags = useMemo(() => {
  return notes.map(note => {
    return {
      ...note,
      tags: tags.filter(tag => note.tagIds.includes(tag.id)),
    }
  })
}, [notes, tags])

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