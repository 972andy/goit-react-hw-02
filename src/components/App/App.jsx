import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
   
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  const addFeedback = (status) => {
    const updatedFeedback = { ...feedback, [status]: feedback[status] + 1 };
    setFeedback(updatedFeedback);
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)
  
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]); 

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        addFeedback={addFeedback}
        resetFeedback={resetFeedback}
      />
      { totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={ positiveFeedback } /> : <Notification totalFeedback ={totalFeedback} /> }
    </>
  );
};

export default App;
