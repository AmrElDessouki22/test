'use client';

import { useNotes } from '@/hooks/useNotes';
import NoteItem from './NoteItem';

export default function NoteList() {
  const { notes } = useNotes();
  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}