import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import Posts from './components/Posts/Posts';
import Sections from './components/Sections/Sections';
import Post from './components/Post/Post';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function App() {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/'>
            <i style={{ color: 'white' }} className='fas fa-home'></i>
          </Link>
        </Toolbar>
      </AppBar>
      <Container height='100%' maxWidth='md' className='App'>
        <Switch>
          <Route path='/sections' exact component={Sections} />
          <Route path='/sections/:sectionId/:pageNum' component={Posts} />
          <Route path='/post/:postId' component={Post} />
          <Redirect from='/' to='/sections' />
        </Switch>
      </Container>
    </>
  );
}

export default App;
