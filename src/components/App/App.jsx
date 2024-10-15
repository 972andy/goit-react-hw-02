import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Description from '../Description/Description';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    // Спробуйте отримати дані з localStorage при ініціалізації
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

  // Використовуйте useEffect для збереження feedback у localStorage
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]); // Залежність feedback - оновлювати localStorage при його зміні

  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        addFeedback={addFeedback}
        resetFeedback={resetFeedback}
      />
      <Feedback feedback={feedback} />
    </>
  );
};

export default App;
