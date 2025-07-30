import '@/app/globals.css';
import { ReactNode } from 'react';
import { NotesProvider } from '@/contexts/NotesContext';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NotesProvider>
      </body>
    </html>
  );
}
