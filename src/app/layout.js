import './globals.scss'; // Use your existing CSS file
import { Providers } from './providers'; // Import the Providers component

export const metadata = {
  title: 'Carbon + Next13',
  description: 'IBM Carbon Tutorial with NextJS 13',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap children with Providers to include the header and content */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
