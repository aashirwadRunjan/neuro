import React from 'react';
import SessionPage from '../Components/SessionPage';
import College from '../Components/College';


const useStyles = () => {
  return {
    mainContainer: {
      background: 'linear-gradient(to right, #A2C8E1, #F2F9FF)',
      minHeight: '100vh',
      padding: '20px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
    },
  };
};

export default function Page() {
  const classes = useStyles();

  return (
    <div style={classes.mainContainer}>
      <SessionPage />
      <College />
    </div>
  );
}
