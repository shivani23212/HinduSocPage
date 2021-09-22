import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import OurExec from './components/pages/OurExec';
import WhoWeAre from './components/pages/WhoWeAre';
import Events from './components/pages/Events';
import Footer from './components/Footer';
import ScrollTop from './ScrollTop';



function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar/>
        <ScrollTop/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/our-exec" component = {OurExec}/>
          <Route path="/who-we-are" component = {WhoWeAre}/>
          <Route path="/events" component = {Events}/>
          <Route path="/sponsors" component = {()=> {window.location.replace("https://www.nhsf.org.uk/");}}/>
          <Route path="/socials" component = { ()=> {window.location.replace("https://www.instagram.com/nhsfwarwick/");}}/>
          <Route path="/join-us" component = { ()=> {window.location.replace("https://www.warwicksu.com/societies-sports/societies/hindu/#org-join");}}/>
        </Switch>
      </Router> */}

      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <ScrollTop/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/our-exec" component = {WhoWeAre}/>
          {/* <Route path={process.env.PUBLIC_URL + "/our-exec"} component = {OurExec}/> */}
          <Route path="/who-we-are" component = {WhoWeAre}/>
          <Route path="/events" component = {Events}/>
          <Route path="/sponsors" component = {()=> {window.location.replace("https://www.nhsf.org.uk/");}}/>
          <Route path="/socials" component = { ()=> {window.location.replace("https://www.instagram.com/nhsfwarwick/");}}/>
          <Route path="/join-us" component = { ()=> {window.location.replace("https://www.warwicksu.com/societies-sports/societies/hindu/#org-join");}}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
