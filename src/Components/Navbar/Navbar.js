import SessionDropdown from './SessionDropdown';
import OthersDropdown from './OtherDropdown';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <SessionDropdown />
        </li>
        <li>
          <OthersDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
