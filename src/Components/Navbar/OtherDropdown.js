'use client';
import { useState } from 'react';
import Link from 'next/link';

const OthersDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Others</button>
      {open && (
        <ul>
          <li>
            <span>College Stuff</span>
            <ul>
              <li>
                <Link href="/others/college-stuff?type=LOR">LOR</Link>
              </li>
              <li>
                <Link href="/others/college-stuff?type=SOP">SOP</Link>
              </li>
              <li>
                <Link href="/others/college-stuff?type=Resume">Resume</Link>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default OthersDropdown;
