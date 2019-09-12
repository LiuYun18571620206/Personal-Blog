import React,{useState,useEffect}from 'react'
import fun from '../../img/icon/功能.png'
import axios from 'axios'
interface ContentProp{
    status:Array<Note>
}
interface Note{
    title:string,
    time:number,
    text:string,
    url:string
}
function Content(prop:ContentProp){
    return (
        <>
        {prop.status.map((v:Note,i:number)=>{
                return (
                    <div className='note' key={i} onClick={function(e){
                        window.open('http://'+v.url)
                    }}>
                        <span className='title'>
                            {v.title}
                            </span>
                        <span className='time'>
                            {`${new Date(v.time).getFullYear()}年${new Date(v.time).getMonth()+1}月${new Date(v.time).getDate()}日`}
                        </span>
                        <p className='text'>
                            {v.text}
                            </p>
                    </div>
                )
        })}
        </>
    )
}
function Note(){
    const [line,useline]=useState({opacity:0,top:'-3rem'})
    const [status,usestatus]=useState([{
            title:'测试',     //标题
            time:new Date().getTime(),          //发布时间
            url:'www.baidu.com',           //链接地址
            text:'这只是一个测试',           //内容
            type:'Javascript'
    }])
    useEffect(()=>{
        axios.get('/Note/NoteList').then(
            function(res){
                usestatus(res.data)
            }
        ).catch(function(err){
            usestatus([])
        })
    },[])
    let handleClickOpacity=function(){
        if(line.opacity===0){
            useline({opacity:1,top:'0rem'})
        }else{
            useline({opacity:0,top:'-3rem'})
        }
    }
    let handleClickTime=function(){
        let arry=status
        arry.sort((value1,value2)=>{
            if(value1.time<value2.time){
                return -1
            }else if(value1.time>value2.time){
                return 1
            }else{
                return 0
            }
        })
        usestatus([...arry])
    }
    let handleClickName=function(){
        let arry=status
        arry.sort((value1,value2)=>{
            if(value1.title<value2.title){
                return -1
            }else if(value1.title>value2.title){
                return 1
            }else{
                return 0
            }
        })
        usestatus([...arry])
    }
    let handleClickType=function(){
        let arry=status
        arry.sort((value1,value2)=>{
            if(value1.type<value2.type){
                return -1
            }else if(value1.type>value2.type){
                return 1
            }else{
                return 0
            }
        })
        usestatus([...arry])
    }
    let getNoteContent=function(){
        return axios.get('/Note')
    }
    let ClickGetNoteJavascript=function(){

    }
    let ClickGetNoteGolang=function(){

    }
    let ClickGetNoteFlutter=function(){

    }
    let ClickGetNoteReact=function(){

    }
    let ClickGetNoteVue=function(){

    }
    useEffect(()=>{
        getNoteContent().then((v)=>{
            usestatus(v.data)
        }).catch((err)=>{
            throw err
        })
    },[])
    return (
        <div id='note'>
            <div className='sign-title'>
                <div>
                    </div>
                    <div>
                    Note
                    </div>
                </div>
                <div className='class'>
                <div onClick={handleClickOpacity}>
                    <img src={fun}/>
                </div>
                <div style={line}>
                 <div onClick={ClickGetNoteJavascript}>
                     JavaScript
                     </div>
                <div onClick={ClickGetNoteGolang}>
                    Golang
                    </div>
                <div onClick={ClickGetNoteFlutter}>
                Flutter
                </div>
                <div onClick={ClickGetNoteReact}>
                React
                </div>
                <div onClick={ClickGetNoteVue}>
                Vue
                </div>
                    </div>
                </div>
            <div className='title'>
                <div className='left'>
                    <div onClick={handleClickTime}>发布时间</div>
                    <div onClick={handleClickName}>名称</div>
                    <div onClick={handleClickType}>类型</div>
                    </div>
                <div className='right'>
                    <input type='text'/>
                    </div>
                </div>
            <div className='content'>
                <Content status={status} />
                </div>
        </div>
    )
}

export default Note