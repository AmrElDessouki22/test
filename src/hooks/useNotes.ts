'use client';

import { useState } from 'react';
import { Note } from '@/types';

interface UseNotes {
  notes: Note[];
  addNote: (note: Omit<Note, 'id'>) => void;
}

let noteId = 0;

export function useNotes(): UseNotes {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Omit<Note, 'id'>) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...note, id: noteId++ },
    ]);
  };

  return { notes, addNote };
}