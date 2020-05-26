import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import styled from 'styled-components';

import Posts from './components/Posts/Posts';
import Sections from './components/Sections/Sections';
import Post from './components/Post/Post';

function App() {
  return (
    <MainContainer height='100%' maxWidth='md' className='App'>
      <Switch>
        <Route path='/sections' exact component={Sections} />
        <Route path='/sections/:sectionId/:pageNum' component={Posts} />
        <Route path='/post/:postId' component={Post} />
        <Redirect from='/' to='/sections' />
      </Switch>
    </MainContainer>
  );
}

const MainContainer = styled(Container)`
  height: 100vh;
`;

export default App;
