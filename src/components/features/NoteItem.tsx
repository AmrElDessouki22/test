"use client";

interface NoteItemProps {
  note: { id: string; text: string };
}

export default function NoteItem({ note }: NoteItemProps) {
  return <div className="border p-2 mb-2">{note.text}</div>;
}
