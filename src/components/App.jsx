import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { ResetButton } from './RezetBtn/RezetBtn';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotal = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPotivePercentage = () => {
    const total = this.countTotal();
    return Math.round((this.state.good / total) * 100) + '%';
  };

  handleReset = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotal();
    return (
      <>
        <Section title={'Please leave a feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
          {total === 0 ? (
            <Notification/>
          ) : (
            <Section title={'Statistics'}>
              <Statistics
                good={good}
                bad={bad}
                neutral={neutral}
                total={total}
                positivePercentage={this.countPotivePercentage()}
              />
              <ResetButton onReset={this.handleReset} />
            </Section>
          )}
        </Section>
      </>
    );
  }
}
