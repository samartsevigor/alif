import React from 'react';
import './App.css';
import TopBar from "./components/top-bar/top-bar";
import Header from "./components/header/header";
import Main from "./components/main/main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Contacts from "./components/contacts/contacts";
import Gallery from "./components/gallery/gallery";
import Menu from "./components/menu/menu";
import About from "./components/about/about";
import { Container } from "react-bootstrap";
import DishDetails from "./components/dish-details/dish-details";

function App() {
    return (
        <Router>
            <TopBar/>
            <Header/>
            <Route exact path="/" component={() => <Main/>}/>
               <Container className="py-5">
                   <Route exact path="/about" component={() => <About/>}/>
                   <Route exact path="/menu" component={() => <Menu/>}/>
                   <Route exact path="/gallery" component={() => <Gallery/>}/>
                   <Route exact path="/contacts" component={() => <Contacts/>}/>
                   <Route exact path="/dish/:id" component={() => <DishDetails/>}/>
               </Container>
        </Router>
    );
}

export default App;
