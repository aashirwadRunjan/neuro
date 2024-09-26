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
    flexDirection: 'column',
    alignItems: 'center', 
    gap: '10px', 
    marginTop: '10px',
  },
  buttonRow: {
    display: 'flex', 
    justifyContent: 'center', 
    gap: '10px',
  },
  button: {
    width: '150px',
    padding: '10px 0', 
    fontSize: '16px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
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

  return (
    <div style={classes.container}>
      <div style={classes.textDiv}>
        Don't know how to move forward with your LOR, SOP, etc? <br /> <br /> Get personalized LOR, SOP, etc starting at 750 INR
      </div>
      <div style={classes.buttonDiv}>
        <div style={classes.buttonRow}>
          <button
            style={hoverIndex === 0 ? { ...classes.button, ...classes.buttonHover } : classes.button}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            LOR
          </button>
          <button
            style={hoverIndex === 1 ? { ...classes.button, ...classes.buttonHover } : classes.button}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            SOP
          </button>
        </div>
        <div style={classes.buttonRow}>
          <button
            style={hoverIndex === 2 ? { ...classes.button, ...classes.buttonHover } : classes.button}
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Resume
          </button>
          <button
            style={hoverIndex === 3 ? { ...classes.button, ...classes.buttonHover } : classes.button}
            onMouseEnter={() => setHoverIndex(3)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            Combo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegePage;
