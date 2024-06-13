import '@/app/styles/globals.css';
import type { Viewport } from 'next';

import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

import { database } from '@/db/database';
import { lessors } from '../db/schema';
import { Button } from '@/app/components/ui/button';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <form
          action={async () => {
            'use server';

            await database.insert(lessors).values({});
          }}
        >
          <input name="lessor" placeholder="Lessor" />
          <Button type="submit">Add Lessor</Button>
        </form>
      </body>
    </html>
  );
}
