import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Component/Home/Home";
import NoFound from './Component/NoFound/NoFound';
import PostDetails from './Component/PostDetails/PostDetails';







function App() {

  

  
  return (
    
      <Router>
        <Switch> 
          <Route path="/home"> 
           <Home/>
          </Route>
          <Route path="/details/:id">
             <PostDetails></PostDetails>
          </Route>

        <Route exact path="/">
            <Home/>
        </Route>

          <Route path="*">
            <NoFound/>
          </Route> 

        </Switch>


       </Router>
      

    
  );
}

export default App;
