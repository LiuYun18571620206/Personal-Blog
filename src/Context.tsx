import React,{createContext,useReducer}from 'react'
import reducer from './reducer'
import { Context } from 'vm';
interface State{
    dynamic:boolean         //控制第一屏是否出现
    contact:{
        display:boolean,
        password:string
    }
}
let Contexts:any
function Context(prop:any){
const initialState:State={
    dynamic:false,
    contact:{
        display:false,
        password:'620206'
    }
}
const [state,dispatch]=useReducer(reducer,initialState)
const CoreContext:Context=createContext(undefined)
Contexts=CoreContext.Consumer
return (
    <CoreContext.Provider value={{state,dispatch}}>
        {prop.children}
    </CoreContext.Provider>
)
}
export {Context,Contexts}