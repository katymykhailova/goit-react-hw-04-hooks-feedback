import React, { useState } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/Feedback';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = (good / total) * 100;
    return Math.round(positiveFeedbackPercentage);
  };

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        return setGood(state => state + 1);

      case 'neutral':
        return setNeutral(state => state + 1);

      case 'bad':
        return setBad(state => state + 1);

      default:
        return;
    }
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const feedbackValues = { good, neutral, bad };
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            options={feedbackOptions}
            total={total}
            positive={positiveFeedback}
            feedbackValues={feedbackValues}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
