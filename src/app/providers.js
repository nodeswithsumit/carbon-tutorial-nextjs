'use client'; // Ensures this component is rendered on the client-side

import Header from '@/components/Header/Header'; // Adjust the path if necessary
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <Header />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
