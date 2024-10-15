const Options = ({ addFeedback, resetFeedback, feedback }) => {
  return (
      <div>
          <button onClick={() => addFeedback('good')}>Good</button>
          <button onClick={() => addFeedback('neutral')}>Neutral</button>
          <button onClick={() => addFeedback('bad')}>Bad</button>
           {(feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0) && (
        <button onClick={resetFeedback}>Reset</button>
      )} 
    </div>
  )
}

export default Options