import '../globals.css';
import { NotesProvider } from '@/contexts/NotesContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Note App</title>
        <meta name="description" content="A simple note-taking app." />
      </head>
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
}
