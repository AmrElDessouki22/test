import NoteList from '@/components/features/NoteList';
import NoteForm from '@/components/features/NoteForm';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
}