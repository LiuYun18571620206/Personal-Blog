import React,{useEffect,useState}from 'react'
import {NavLink,Route,Link} from 'react-router-dom'
import Dynamic from '../first/Dynamic'
import {Contexts as Context} from '../../Context'
import {removeDynamic} from '../../action'
import axios from 'axios'
interface HOCTypes{
    type:string, //需要从Context中获取的目标
    state:Status    //Context的state对象
}
interface StatusDemo{
    url:string,
    img:string,
    title:string,
    text:string,
    time:string
}
interface Status{
    case:Array<StatusDemo>,
    game:Array<StatusDemo>,
    tool:Array<StatusDemo>
}
function HOC(prop:HOCTypes){
    let state:Array<object>
    switch(prop.type){
        case '/Home/case':
        state=prop.state.case;
        break
        case '/Home/game':
        state=prop.state.game;
        break
        case '/Home/tool':
        state=prop.state.tool;
        break
        default :
        throw new Error('出错了')
    }
    return(
        <>
        {(state as Array<StatusDemo>).map((v,i)=>{
            return(
            <a className='box' href={v.url} key={i}>
                <div className='image'>
                <img src={v.img}/>
                    </div>
                <div className='text'>
                    <p className='title'>{v.title}</p>
                    <p className='time'>{v.time}</p>
                    <p className='lastText'>{v.text}</p>
                </div>
                </a>)
        })}
        </>
    )
}
function Home(prop:object){
    let title=[['/Home/case','案例作品'],['/Home/game','单页游戏'],['/Home/tool','功能组件']]
    //去除Dynamic并向服务端发送Cookie记录
    let handleRemoveDynamic=function(dispatch:any):void{
        dispatch(removeDynamic())
    }
    let status:Status,usestatus:any;
    [status,usestatus]=useState({case:[],game:[],tool:[]})
    let getCaseAccount=()=>{
        return axios.get('/Home/case')
    }
    let getGameAccount=()=>{
        return axios.get('/Home/game')
    }
    let getToolAccount=()=>{
        return axios.get('/Home/tool')
    }
    useEffect(()=>{
        Promise.all([getCaseAccount(),getGameAccount(),getToolAccount()]).then((v)=>{
            let Case,game,tool
            v.forEach((v)=>{
                switch(v.config.url){
                    case '/Home/case':
                        Case=v.data
                        break
                    case '/Home/game':
                        game=v.data
                        break
                    case '/Home/tool':
                        tool=v.data
                        break
                    default :
                    throw new Error('请求数据出错')
                }
            })
            
            usestatus({case:Case,game:game,tool:tool})
        })
    },[])
    return (
        <>
        <Context>
            {(value:any)=>{
                if(value.state.dynamic){
                    return <Dynamic handleRemoveDynamic={handleRemoveDynamic} dispatch={value.dispatch}/>
                }else{
                    return null
                }
            }}
        </Context>
        <div id='home'>
                <div className='title'>
                    {title.map((v,i)=>{
                        return(<NavLink to={v[0]} activeClassName='focus' key={i} >
                                {v[1]}
                                <div className='bottomSign'></div>
                        </NavLink>)
                    })}
                    </div>
                <div className='content'>
                        {title.map((v,i)=>{
                                return(
                                    <Route exact path={v[0]} key={i} render={()=><HOC type={v[0]} key={i} state={status}/>} />
                                )
                            })
                        }
                    </div>
            </div>
        </>
    )
}
export default Home