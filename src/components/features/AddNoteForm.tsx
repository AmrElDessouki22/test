"use client";

import { useState, FormEvent, useContext } from 'react';
import { NotesContext } from '@/contexts/NotesContext';
import Input from '../ui/Input';
import Button from '../ui/Button';

export function AddNoteForm() {
  const [noteText, setNoteText] = useState('');
  const notesContext = useContext(NotesContext);
  
  if (!notesContext) {
    throw new Error("Cannot find NotesContext");
  }

  const { addNote } = notesContext;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addNote(noteText);
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Enter your note"
        required
      />
      <Button type="submit" label="Add Note" />
    </form>
  );
}
