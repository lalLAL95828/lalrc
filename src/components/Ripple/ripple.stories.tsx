import React from "react"
import {storiesOf} from '@storybook/react'
import { action } from '@storybook/addon-actions';
import {default as LALButton} from "../Button/button"
import Ripple,{RippleRate} from "./ripple"

const defaultRipple =()=>(
        <div style={{ border:"1px solid red",width:"200px",height:"100px", lineHeight:"100px",textAlign:"center"}}>
            <span>点我</span>
            <Ripple rate={RippleRate.fast} color="rgba(446,46,46,0.5)" zIndex={20}/>
        </div>
)

const buttonRipple = ()=>(
    <div>
        <LALButton onClick={action('clicked')} ripple={{color:"green",rate:RippleRate.fast}}>默认按钮</LALButton>
    </div>
    
)

storiesOf('ripple',module)
.add('Ripple', defaultRipple)
.add("ButtonRipple",buttonRipple)
