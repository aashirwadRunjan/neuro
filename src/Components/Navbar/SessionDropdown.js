'use client';
import Link from 'next/link';
import { useState } from 'react';

const SessionDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Session</button>
      {open && (
        <ul>
          <li>
            <Link href="/session/book-session">Book a session</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SessionDropdown;
