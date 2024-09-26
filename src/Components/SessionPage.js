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
    marginTop: '10px',
  },
  button: {
    padding: '10px 20px',
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

const SessionPage = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <div style={classes.container}>
      <div style={classes.textDiv}>
        Worried about your dentistry career !? <br/><br/>Book a session now for your career clarity
      </div>
      <div style={classes.buttonDiv}>
        <button
          style={hover ? { ...classes.button, ...classes.buttonHover } : classes.button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Book it now!
        </button>
      </div>
    </div>
  );
};

export default SessionPage;
