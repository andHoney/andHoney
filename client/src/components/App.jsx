import React, { useState, useEffect } from 'react';
import { auth, db } from '../../../firebaseconfig.js'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import styled from 'styled-components';
import TopBar from './subComponents/TopBar.jsx';
import Home from './Home.jsx';
import CategoryPage from './CategoryPage.jsx'



const App = () => {
  
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    console.log('testing')
    db.collection('categories').onSnapshot(snapshot => {
      const catState = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCategories(catState);
    });
  }, [])

  // create context for category state
  // add route for item page

  
  return (
    <Router>
      <AppContainer>
        <TopBarContainer>
          <TopBar categories={categories}></TopBar>
        </TopBarContainer>
        <Switch>
          <Route path="/category" component={CategoryPage} />
          <Route path="/">
            <Home categories={categories}/>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  )
}

export default App; 

const AppContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 700px;
  min-width: 300px;
  z-index: -100;
`

