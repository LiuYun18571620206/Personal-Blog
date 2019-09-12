import React from 'react'
import Home from './home/Home'
import About from './about me/About'
import Contact from './contact me/Contact'
import Note from './note/Note'
import Left from './Left'
import {Route,Switch} from 'react-router-dom'
import './Main.scss'
function MainPage(){
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
export default MainPage