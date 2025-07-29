"use client";

import { useContext } from 'react';
import { NotesContext } from '@/contexts/NotesContext';
import NoteItem from './NoteItem';

export function NoteList() {
  const { notes } = useContext(NotesContext);

  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}
