const Feedback = ({ feedback }) => {
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)
  return (
      <div>
          {(feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0) ?
        <ul>
            <li>Good: {feedback.good}</li>
            <li>Neutral: {feedback.neutral}</li>
            <li>Bad: {feedback.bad}</li>
            <li>Total:{totalFeedback}</li>
            <li>Positive:{positiveFeedback}</li>
         </ul> : <p>No feedback yet</p> }
        
    </div>
  )
}

export default Feedback