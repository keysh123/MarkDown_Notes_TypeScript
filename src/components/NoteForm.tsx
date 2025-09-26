import React, { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import type { OnChangeValue } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { type NoteData,type TagOption } from '../App.tsx'

type NoteFormProps = {
  onSubmit: (data: NoteData) => void
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<NoteData>({
    title: '',
    tags: [],
    body: '',
  })

  // normal input change handler (title, body)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // react-select change handler
  const handleTagsChange = (newValue: OnChangeValue<TagOption, true>) => {
    setFormData((prev) => ({
      ...prev,
      tags: newValue as TagOption[],
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Submitted form:', formData)
    onSubmit(formData)
  }

  return (
    <div className="w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl flex flex-col items-center justify-center gap-3"
      >
        {/* Title + Tags */}
        <div className="w-full flex items-center justify-center gap-3">
          <div className="flex flex-col w-1/2">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border p-1"
              type="text"
              placeholder="Enter note title"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="tags">Tags</label>
            <CreatableSelect
              isMulti
              isClearable
              value={formData.tags}
              onChange={handleTagsChange}
              placeholder="Add or create tags"
            />
          </div>
        </div>

        {/* Body */}
        <div className="w-full flex flex-col justify-center gap-1">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows={15}
            className="w-full border p-2"
            placeholder="Write your note here..."
          />
        </div>

        {/* Buttons */}
        <div className="w-full flex justify-end gap-1 items-center">
          <button
            type="submit"
            className="p-2 px-4 bg-blue-500 text-white rounded-xl"
          >
            Save
          </button>
          <Link to="..">
            <button
              type="button"
              className="p-2 px-4 rounded-xl text-gray-400 border border-gray-400"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default NoteForm
