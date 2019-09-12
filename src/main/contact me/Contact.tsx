import React,{useEffect,useRef,useState} from 'react'
import axios from 'axios'
import {Contexts as Context} from '../../Context'
import {Verification_Contact} from '../../action'
function Contact(prop:any){
    /*
    评论功能
    每页显示十条
    多余十条需要翻页
    */
   let [list,uselist]=useState([])
   useEffect(()=>{
    axios.get('/Contact').then((response)=>{
        let db=response.data
        db.sort((v1,v2)=>{
            if(v1.time<v2.time){
                return 1
            }else if(v1.time>v2.time){
                return -1
            }else return 0
        })
        uselist([...response.data])
    }).catch((response)=>{
        throw console.error('comment')
    })
   },[])
   let InputText=useRef(null)
   //获取输入框中的文本
   let handleReleaseComment=function(e:any){
    let target:any=InputText.current.value
    InputText.current.value=''
    let obj={
            name:'匿名网友',
            text:target,
            time:new Date().getTime()
    }
    axios.post('/Contact',{
        params:obj
    }).then((response)=>{
        list.unshift(obj)
        uselist([...list])
    }).catch((response)=>{
        throw console.error(response)
    })
}
    return (
        <div id='contact'>
            <div className='sign-title'>
                <div>
                    </div>
                    <div>
                    Leaving a message.
                    </div>
                </div>
                <div className='comment'>
                <textarea className='web-font' ref={InputText}/>
                <input type='button' value='发表评论' onClick={handleReleaseComment}/>
                    </div>
                <div className='rule'>
                    <div className='left'>
                        按时间排序
                        </div>
                    <div className='right'>
                        <div className='front'>
                            上一页
                            </div>
                            <div className='page'>
                                1
                            </div>
                            <div className='after'>
                                下一页
                                </div>
                        </div>
                </div>
                <div className='region'>
                {list.map((v,i)=>{
                    return (
                    <div className='line'>
                    <p className='user'>
                        <span className='id'>
                            {v.name}
                            </span>
                        <span className='time'>
                            {`${new Date(v.time).getHours()<10?'0'+new Date(v.time).getHours():new Date(v.time).getHours()}:
                            ${new Date(v.time).getMinutes()<10?'0'+new Date(v.time).getMinutes():new Date(v.time).getMinutes()}`}
                            </span>
                        <span className='year'>
                        {`${new Date(v.time).getFullYear()}.
                        ${new Date(v.time).getMonth()+1<10?'0'+(new Date(v.time).getMonth()+1):new Date(v.time).getMonth()+1}.
                        ${new Date(v.time).getDate()<10?'0'+new Date(v.time).getDate():new Date(v.time).getDate()}`}
                            </span>
                    </p>
                    <p className='content'>
                        {v.text}
                        </p>
                    </div>
                    )
                })}
                    </div>
        </div>
    )
}
function Verification(prop:{
    password:string,
    dispatch:any,
}){
    let listLength=new Array(6).fill('')
    let JumpElementFoucs=function(e,arry){
        let db=false,numberList=[]
        for(let i=0;i<arry.length;i++){
            numberList[i]=arry[i].value
            if(db===true){
                return {
                    element:arry[i]
                }
            }
            if(arry[i]===e){
                if(i===arry.length-1){
                    return {
                        numberList,element:arry[i]
                    }
                }else{
                    db=true
                }
            }
        }
    }
    let handleChangePassword=function(e){
        let sbiling=e.target.parentNode.querySelectorAll('.'+e.target.className)
        let element=JumpElementFoucs(e.target,sbiling)
        if(element.numberList){
            element.numberList.join('')===prop.password?
            prop.dispatch(Verification_Contact()):setTimeout(()=>alert('你输入的密码错了'),0)
        }else{
            element.element.focus()
        }
           
    }
    let handleKeyDownBacksPace=function(e){
        let sbiling=[...e.target.parentNode.querySelectorAll('.'+e.target.className)].reverse()
        if(e.keyCode===8){
        let element=JumpElementFoucs(e.target,sbiling)
        element.element.focus()
        }
    }
    return(
        <div id='contact'>
            <div className='verification'>
                <p>我的手机号后6位</p>
                {listLength.map((v,i)=>{
                    return (
                        <input type='number' className='password' onChange={handleChangePassword} 
                         pattern='[0-9]' max='1' key={i} onFocus={(e)=>{e.target.value=''}}
                         onKeyDown={handleKeyDownBacksPace}/>
                    )
                })}
                </div>
            </div>
    )
}
function Component(){
    return (
        <Context>
            {(value)=>{
                if(value.state.contact.display){
                    return (<Contact />)
                }else{
                    return (<Verification password={value.state.contact.password} dispatch={value.dispatch}/>)
                }
            }}
            </Context>
    )
}
export default Component