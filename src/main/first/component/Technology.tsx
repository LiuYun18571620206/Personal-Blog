import React from 'react'
interface propsType{
    handleMouseOverRecord:(e:any)=>void
}
function Technology(prop:propsType){
    let arry=['React','Vue','Webpack','Sass','Typescript']
    /*
    鼠标滑过 记录
    点击头像会播放记录
    */
    return(
        <div id='technology'>
            {arry.map((v,i)=>{
                return (
                    <div className='technology-child' key={i} onMouseOver={prop.handleMouseOverRecord}>
                        {v}
                        </div>
                )
            })}
            </div>
    )
}
export default Technology