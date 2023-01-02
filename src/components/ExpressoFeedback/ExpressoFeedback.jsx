import React, { Component } from 'react';
import css from './ExpressoFeedback.module.css';

// const statisticItems = [{item:'Good'}, {item:'Neutral'},{item:'Bad'},{item:'Total'},{item:'Positive feedback'}];
//let total = this.state.good +this.state.neutral+this.state.bad;
export class EspressoFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };  

   handleClickGood = () => {
    this.setState(prevState => {
        return { good: prevState.good +1 };
        
    });
    // console.log("good: " + this.state.good);
  };
  handleClickNeutral = (evt) => {
    this.setState(prevState => {
        return { neutral: prevState.neutral +1 };
        
    });
  };
  handleClickBad = (evt) => {
    this.setState(prevState => {
        return { bad: prevState.bad +1 };
        
    });
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Please leave feedback</h1>

        <div className={css.button_box}>
          <button 
           name = "Good"
            type="button"
            onClick={this.handleClickGood}
          >
            Good
          </button>
          <button
            type="button"
            onClick={this.handleClickNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={this.handleClickBad}
          >
            Bad
          </button>
        </div>
        <h2 className={css.title}>Statistics</h2>
        <ul>
            {/* {statisticItems.map(statistic => {(
                <li key={statistic.item} className={css.item}>{statistic.item}: </li>
            )}
            )}; */}
            <li className={css.item}>Good: {this.state.good}</li>
            <li className={css.item}>Neutral: {this.state.neutral}</li>
            <li className={css.item}>Bad: {this.state.bad}</li>
            <li className={css.item}>Total: {this.state.good +this.state.neutral+this.state.bad}</li>
            <li className={css.item}>Positive feedback: {((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100).toFixed()}%</li>
        </ul>

      </div>
    );
  }
}
