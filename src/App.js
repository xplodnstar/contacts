import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact'
import List from './List'
import './App.css';

const App = props => (
  <Router>
    <div className="contacts">
      <nav>
        <ul>
          <li><Link to="/" className="list">List</Link></li>
        </ul>
      </nav>
      <div id="page">
        <Route exact path="/" component={List} />
        <Route path="/contact/:id" component={Contact} />
      </div>
    </div>
  </Router >
)

export default App;
