import React,{useRef} from 'react'
import wx from '../../../img/icon/weixin.png'
import email from '../../../img/icon/email.png'
import me from '../../../img/me.jpg'
interface propsType{
    play:(e:any)=>void,  //点击播放函数
    shadow:boolean,       //检测是否开始阴影动画
    TipsDisplay:(v:string)=>void
}
function Windmill(prop:propsType){
   //左右图标移入移出效果
    let weixin=useRef(null);
    let emails=useRef(null);
    let handleMouseOverWeixin=function(){
        let target:any=weixin.current
        target.style.left='-20%'
        target.style.opacity='1'
    }
    let handleMouseOutWeixin=function(){
        let target:any=weixin.current
        target.style.left='0'
        target.style.opacity='0'
    }
    let handleMouseOverEmail=function(){
        let target:any=emails.current
        target.style.right='-45%'
        target.style.opacity='1'
    }
    let handleMouseOutEmail=function(){
        let target:any=emails.current
        target.style.right='0'
        target.style.opacity='0'
    }
    //左右图标点击加入剪贴板
    let handleClickCopyweixin=function(){
        navigator.clipboard.writeText('ly778631').then(()=>{prop.TipsDisplay('微信已经复制到剪贴板')},()=>{prop.TipsDisplay('失败')})   
    }
    let handleClickCopyEmail=function(){
        navigator.clipboard.writeText('18571620206@163.com').then(()=>{prop.TipsDisplay('邮箱已经复制到剪贴板')},()=>{prop.TipsDisplay('失败')})        
    }
    return (
        <div id='windmill'>
            <div className={prop.shadow?'me me-shadow':'me'} onClick={prop.play}>
                <img src={me} draggable={false}/>
            </div>
            <div className='plate'>
            <div className='weixin' ref={weixin}>
                ly778631
            </div>
            <div className='email' ref={emails}>
            18571620206@163.com
            </div>
            <div className='icon'>
                <img src={wx} draggable={false} onMouseOver={handleMouseOverWeixin} onMouseOut={handleMouseOutWeixin} onClick={handleClickCopyweixin}/>
                <img src={email} draggable={false} onMouseOver={handleMouseOverEmail} onMouseOut={handleMouseOutEmail} onClick={handleClickCopyEmail}/>
            </div>
            </div>
        </div>
    )
}
export default Windmill