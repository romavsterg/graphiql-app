import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
      <Link href="/Components" className="link">
        Return to main
      </Link>
    </div>
  );
}
