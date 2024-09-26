'use client';

import { useState } from 'react';

const useStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
  },
  textDiv: {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px', // Add space between buttons
    marginTop: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '20px', // Rounded edges
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#005bb5',
  },
});

const CollegePage = () => {
  const classes = useStyles();
  const [hoverIndex, setHoverIndex] = useState(null);

  const buttons = [
    { label: 'LOR' },
    { label: 'SOP' },
    { label: 'Resume' },
    { label: 'Combo' },
  ];

  return (
    <div style={classes.container}>
      <div style={classes.textDiv}>
        Don't know how to move forward with your LOR, SOP, etc? Get personalized LOR, SOP, etc starting at 750 INR
      </div>
      <div style={classes.buttonDiv}>
        {buttons.map((button, index) => (
          <button
            key={index}
            style={hoverIndex === index ? { ...classes.button, ...classes.buttonHover } : classes.button}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CollegePage;
