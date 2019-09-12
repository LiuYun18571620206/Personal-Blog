import React from 'react'
import {NavLink,Switch} from 'react-router-dom'
import me from '../img/me.jpg'
function Left(){
let element=[['Home','首页','/Home'],['About me','关于我','/About'],['Note','技术文章','/Note'],['Contact me','给我留言','/Contact']]
    return(
        <>
        <div id='Left'>
            <img src={me} className='me'/>
            <div className='list'>
                    {element.map((v,i)=>{
                        return(
                        <NavLink key={i} to={v[2]} activeClassName={'active'}>
                            <div></div>
                            <div className='vice-text web-font'>{v[0]}</div>
                            <div className='text '>{v[1]}</div>
                        </NavLink>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Left