import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button,{ButtonSize,Buttontype} from './button'


const defaultButton = () => (
    <Button onClick={action('clicked')}>默认按钮</Button>
)

const buttonWithSize = ()=>(
    <>
        <Button size={ButtonSize.Large}>large buttom</Button>
        <Button size={ButtonSize.Small}>small buttom</Button>
    </>
)

const buttonWithType = ()=>(
    <>
        <Button btnType = {Buttontype.Primary}>primary button</Button>
        <Button btnType = {Buttontype.Danger}>danger button</Button>
        <Button btnType = {Buttontype.Link} href="www.baidu.com">Link button</Button>
    </>
)

storiesOf('按钮组件',module)
// .addParameters({
//     info:{
//         text:`
//         this is a very nice componet
//         ## import
//         ~~~js
//         import Button,{ButtonSize,Buttontype} from './button'
//         ~~~
//         `,
//         inline:true,
//     }
// })
.add('Button',defaultButton)
.add('不同尺寸button',buttonWithSize)
.add('不同类型的button',buttonWithType)