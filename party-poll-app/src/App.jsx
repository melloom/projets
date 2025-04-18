import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePoll from './components/CreatePoll';
import PollResults from './components/PollResults';
import PollVote from './components/PollVote';
import SharePoll from './components/SharePoll';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Party Poll Voting App</h1>
        <Switch>
          <Route path="/" exact component={CreatePoll} />
          <Route path="/results/:pollId" component={PollResults} />
          <Route path="/vote/:pollId" component={PollVote} />
          <Route path="/share/:pollId" component={SharePoll} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;