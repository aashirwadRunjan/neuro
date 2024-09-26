import { useRouter } from 'next/router';

const CollegeStuff = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div>
      <h1>College Stuff</h1>
      {type && <p>Selected: {type}</p>}
      {!type && <p>Please select an option from LOR, SOP, or Resume.</p>}
    </div>
  );
};

export default CollegeStuff;
