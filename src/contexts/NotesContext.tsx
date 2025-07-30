"use client";

import { createContext, ReactNode, useContext, useState } from 'react';
import { Note } from '@/types';

interface NotesContextProps {
  notes: Note[];
  addNote: (note: Note) => void;
  removeNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => setNotes((prevNotes) => [...prevNotes, note]);

  const removeNote = (id: string) =>
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}
