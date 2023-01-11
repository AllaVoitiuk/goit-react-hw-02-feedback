import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    console.log(event.target.name);
    const { name } = event.target;
    this.setState(prevState => {
      console.log('prevState: ' + prevState[name]);
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let statesCount = this.state.good + this.state.neutral + this.state.bad;
    if (!statesCount) {
      statesCount = 1;
    }
    return ((this.state.good / statesCount) * 100).toFixed();
  };

  render() {
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          btnNames={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
      </>
    );
  }
}
