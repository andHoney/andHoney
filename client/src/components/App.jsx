import React, { useState, useEffect, useContext } from 'react';
import { db } from '../../../firebaseconfig.js'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import styled from 'styled-components';
import TopBar from './subComponents/TopBar.jsx';
import Home from './Home.jsx';
import CategoryPage from './CategoryPage.jsx';
import CatContext from '../Context.jsx';



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

  // add route for item page
  
  return (
    <CatContext.Provider value={categories}>
      <Router>
        <AppContainer>
          <TopBar />
          <Switch>
            <Route path="/category" component={CategoryPage} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </AppContainer>
      </Router>
    </CatContext.Provider>
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

