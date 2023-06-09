import { Component } from 'react';
import { Global } from '@emotion/react';
import { Style } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = feedback => {
    this.setState(state => ({ [feedback]: state[feedback] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    const PositiveFeedbackPercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return `${PositiveFeedbackPercentage}%`;
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.addFeedback}
          options={Object.getOwnPropertyNames(this.state)}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            feedbacks={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}

        <Global styles={Style} />
      </Section>
    );
  }
}
