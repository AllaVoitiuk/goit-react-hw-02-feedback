import React, { Component } from 'react';
// import css from "./ExpressoFeedback/ExpressoFeedback.module.css";
import { Statistics } from "./Statistics/Statistics";
//import css from './Statistics/Statistics.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const options = [
  {id:'good', nameBtn: 'Good'},
  {id:'neutral', nameBtn: 'Neutral'},
  {id:'bad', nameBtn: 'Bad'},
]

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
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
};
