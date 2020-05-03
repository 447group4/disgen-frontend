import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/About';
import CAPage from './components/CAPage';
import MDPage from './components/MDPage';

import './main.scss';
import Header from './components/header/Header';

const Routes = () => (
    <BrowserRouter>
        <div>            
            <Route path="/" render={ props => <Header/> }/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/mdpage" component={MDPage}/>
            <Route exact path="/capage" component={CAPage}/>

        </div>
    </BrowserRouter>
)

ReactDOM.render(<Routes/>, document.getElementById('root'));