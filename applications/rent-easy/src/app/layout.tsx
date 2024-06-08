import type { Viewport } from 'next';

import '~/app/globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div>Rent Easy</div>
      </body>
    </html>
  );
}
