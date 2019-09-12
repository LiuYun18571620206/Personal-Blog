import 'core-js';
import React from 'react'
import ReactDom from 'react-dom'
import Home from './main/home/Home'
import About from './main/about me/About'
import Contact from './main/contact me/Contact'
import Note from './main/note/Note'
import Left from './main/Left'
import {Context} from './Context'
import {Route,HashRouter,Switch} from 'react-router-dom'
import './index.scss'
function App(){
    return (
        <>
        <Route path='/' component={Left}/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Home' render={()=><Home/>}/>
        <Route path='/About' render={()=><About />}/>
        <Route path='/Contact' render={()=><Contact/>}/>
        <Route path='/Note' render={()=><Note />}/>
        </Switch>
        </>
    )
}
ReactDom.render(
<HashRouter>
    <Context>
<App />
</Context>
</HashRouter>
,document.querySelector('#root'))