import React from "react";
import {storiesOf} from "@storybook/react"

storiesOf("welcome page",module)
.add("welcome",()=>{
    return (
        <>
          <h1>欢迎来到 lalrc 组件库</h1>
          <p>这款组件是在项目经验中，觉得某个功能在以后开发中会存在需求而开发的。借鉴了其他组件，复杂性高于其他组件。</p>
          <p>组件不多，但做一个，精一个。组件会随着时间逐渐更新和增加。因为这是款React组件，所以暂时只能用于React项目。</p>
          <h3>安装</h3>
          <code>
            npm install lalrc --save
          </code>
          
          <h3>git地址</h3>
          <a href="https://github.com/lalLAL95828/lalrc" target="_blank" rel="noopener noreferrer">项目库</a>
        </>
      )
},{
    info:{
        disable:true
    }
})