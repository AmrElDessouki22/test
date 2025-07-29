'use client';

import { Note } from '@/types';

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  return (
    <div className="p-4 mb-2 border rounded">
      <h2 className="text-lg font-bold">{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}