import React,{useEffect,useState,useRef} from 'react'
import Windmill from './component/Windmill'
import Technology from './component/Technology'
import Left from '../../img/icon/方向.png'
interface propTypes{
    handleRemoveDynamic:(dispatch:any)=>void,
    dispatch:any
}
function Dynamic(prop:propTypes){
    /*
    尝试将右边滑动做出闪烁效果
    点击右边滑动后整个dynamic左移
    移动到屏幕外后移除

    后期使用Cookie在用户第二次访问时不显示此页
    */

    //右边图标
    let dynamic=useRef(null)
    let handleClickLeft=function():void{
        let target:any=dynamic.current
        //还需要父组件的传递一个函数来移除这个组件
           target.style.left='-105%'
           target.addEventListener('webkitTransitionEnd',function(){
            prop.handleRemoveDynamic(prop.dispatch)
           })
    }
    //提示栏
    let text:string='hello world',tipsState=false
    let tips=useRef(null)
    let [tips_text,usetips_text]=useState(text)
    function TipsDisplay(v:string){
        let target:any=tips.current
            tipsState=true
            target.className='top_tips'
            target.addEventListener('webkitAnimationEnd',function(e:any){
            target.className=''
            e.removeEventListener('webkitAnimationEnd',arguments.callee)
            tipsState=false
        })
        usetips_text(v)
    }
    //记录technology
    let arryOrder:Array<HTMLElement|EventTarget>=[]
    let [order,useorder]=useState(arryOrder)        //播放记录
    let [shadow,useshadow]=useState(false)            //是否可以播放的状态
    let [play,useplay]=useState(false)              //是否在播放的状态
    let handleMouseOverRecord=function(e:Event){
        let target:EventTarget=(e.target as EventTarget)
        if(!shadow){
        useshadow(true)          //开始头像闪烁
        }
        if(!play){
        order.push(target)    //添加记录
        useorder(order)
        }
    }
    //点击播放顺序
    let handlePlayOrder=async function(){
        if(play){
            return
        }
        useplay(true)
        let i=0
        while(i<order.length){
            await new Promise((resolve,reject)=>{
                if(order[i]===order[i-1]){
                    order[i].addEventListener('webkitAnimationEnd',function(e:Event){
                        let target:any=e.target
                        target.className='technology-child' 
                        resolve()
                    })
                setTimeout(()=>{   
                    (order[i] as any).className='technology-child bgwhite'
                    i++
                },0)
                }else{
                order[i].addEventListener('webkitAnimationEnd',function(e:Event){
                    let target:any=e.target    
                    target.className='technology-child' 
                        resolve()
                    });
                (order[i] as any).className='technology-child bgwhite'
                i++
                }
            })
        }
        useplay(false)
        useorder([])
        useshadow(false)
    }
    return (
        <div id='dynamic' style={{left:'0px'}} ref={dynamic}>
        <div id='top' className='' ref={tips}>
            {tips_text}
        </div>
        <div className='title web-font'>
        本人主要使用的技术栈
        <p>(本站仅用于Demo展示)</p>
        </div>
        <Technology handleMouseOverRecord={handleMouseOverRecord}/>
        <Windmill play={handlePlayOrder} shadow={shadow} TipsDisplay={TipsDisplay}/>
        <div id='Github' onClick={function(){location.href='https://github.com/LiuYun18571620206'}}>
        https://github.com/LiuYun18571620206
            </div>
        <div id='right' onClick={handleClickLeft}>
            <img src={Left} draggable={false}/>
            </div>
            </div>
    )
}
export default Dynamic