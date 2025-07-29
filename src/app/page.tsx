import { NoteList } from '@/components/features/NoteList';
import { AddNoteForm } from '@/components/features/AddNoteForm';

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <AddNoteForm />
      <NoteList />
    </main>
  );
}
