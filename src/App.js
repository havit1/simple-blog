import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Posts from './components/Posts/Posts';
import Sections from './components/Sections/Sections';
import Post from './components/Post/Post';

import './App.css';

function App() {
  return (
    <div className='App'>
      <main>
        <Switch>
          <Route path='/sections' exact component={Sections} />
          <Route path='/sections/:sectionId/:pageNum' component={Posts} />
          <Route path='/post/:postId' component={Post} />
          <Redirect from='/' to='/sections' />
        </Switch>
      </main>
    </div>
  );
}

export default App;
