import type { NoteData } from "../App";
import NoteForm from "./NoteForm";

 const NewNote = () => {
  const handleSubmit = (data: NoteData) => {
    console.log("Saving new note:", data);
    // later: save to local storage using setNotes
  };

  return (
    <div className='flex flex-col items-center justify-center gap-5 m-5'>
      <h1>New Note</h1>  
      <NoteForm onSubmit={handleSubmit} /> {/* ✅ required prop */}
    </div>
  );
};
export default NewNote
