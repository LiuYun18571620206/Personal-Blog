import React from 'react'
function About(){
    return (
        <div id='about'>
            <div className='sign-title'>
                <div>
                    </div>
                    <div>
                    ABOUT ME
                    </div>
                </div>
            <div className='about-me'>
              <p>
                  <span>昵称:刘凯</span>
                  <span>出生年月:2000.2.6</span>
                  <span>毕业学校:湖北工程职业学院(全日制大专)</span>
                  <span>专业方向:电子商务(专业课有网页制作且自学前端)</span>
              </p>
              <p>
              <span>手机:18571620206</span>
              <span>邮箱:18571620206@163.com</span>
              <span>工作经验:暂无且有求职意向(南方城市实习岗)</span>
              </p>
              <p>
              <span>Github:https://github.com/LiuYun18571620206</span>
              <span>个人博客:107.37.76.33</span>
              </p>
            </div>
            <div className='cn-sign'>
                学习经历
                </div>
            <div className='study-text'>
            我在2018.3月开学也就是大一下学期开始自学前端，从HTML+CSS开始学起，当时看的是W3C的教程学习，后来学到JS时的学习方法是刷书，刷书顺序:
            《DOM编程艺术》，《Javascript高级程序设计》，《你不知道的JS》三部曲，《ES6入门》，以及经常浏览知乎与掘金。我几乎没怎么看过视频教学。
            后来我把百度前端技术学院的题过了一遍(最后两题着实有些难度)，在这之后就开始学习框架，开始的时候有犹豫学Vue还是React，经过比较后决定先
            学React再学Vue3，后来感觉Vue3要难产就直接学了Vue，在这之后学了一下express到能够接受请求处理请求，然后就开始写这个网站，留言板是查数
            据库的不是本地化存储，因为一些原因这个网站无法备案，这也导致我的域名白买了，后来我发现我想要实现一个功能却要花费大部分时间在写CSS上，
            所以我就去学了element-ui和antd,我对数据可视化有点好奇就又去学了一下echarts到能用的程度。我的职业规划是向全栈方面发展最好是能学到人工
            智能，我对这个太好奇了。距离十一月学校放我走还有一个多月时间，写完数据可视化可能就要好好开始复习了，这个期间我会写一些文章心得教程发在
            知乎或掘金上。
            <p style={{textAlign:'right'}}>————虽然做程序员是因为钱多，但我是真的想成为大佬</p>
                </div>
            <div className='cn-sign'>
                练习作品
                </div>
                <div className='experience'>
                <div className='content'>
                    <span className='title'>网易云音乐官网模仿</span><span className='time'>2019.7.22</span>
                    <p className='text'>
                    使用React的Class写法，未完成的一个页面，稍微复杂点的就是获取图片的中间调以及轮播图
                    </p>
                </div>
                <div className='content'>
                    <span className='title'>Webpack搭建环境</span><span className='time'>2019.8.4</span>
                    <p className='text'>
                    React+Typescript，搭完以后收获很多(这有什么好写的，基本操作。PS:当时搭了好久，心态爆炸)
                    </p>
                </div>
                <div className='content'>
                    <span className='title'>个人网站</span><span className='time'>2019.8.9</span>
                    <p className='text'>
                    使用React的Hooks写法+Redux+React-Router 后端使用express 数据库使用MongoDB 自己负责了设计，开发，接口。个人小项目,了解基本项目开发流程
                    </p>
                </div>
                <div className='content'>
                    <span className='title'>飞翔的小鸟</span><span className='time'>2019.8.14</span>
                    <p className='text'>
                    使用React
                    </p>
                </div>
                <div className='content'>
                    <span className='title'>Wegame官网模仿</span><span className='time'>2019.8.20</span>
                    <p className='text'>
                    使用Vue与Sass 完成度70%
                    </p>
                </div>
                <div className='content'>
                    <span className='title'>购物页面</span><span className='time'>2019.9.28</span>
                    <p className='text'>
                    使用Vue全家桶与element-ui练习购物车逻辑
                    </p>
                </div>
                <div className='content'>
                    <span className='title'>数据可视化</span><span className='time'>2019.9.11</span>
                    <p className='text'>
                    使用React的Hooks+Antd+Echarts完成数据可视化平台
                    </p>
                </div>
                <div className='content'>
                    <span className='title'>音乐播放功能</span><span className='time'>2019.9.20</span>
                    <p className='text'>
                    使用Vue全家桶与element-ui
                    </p>
                </div>
                </div>
        </div>
    )
}

export default About