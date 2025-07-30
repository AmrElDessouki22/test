"use client";

import { useNotes } from '@/contexts/NotesContext';
import { Note } from '@/types';

export function NoteList() {
  const { notes, removeNote } = useNotes();

  return (
    <ul>
      {notes.map((note: Note) => (
        <li key={note.id} className="p-2 border-b">
          <h2 className="text-lg font-bold">{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => removeNote(note.id)} className="text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
}
