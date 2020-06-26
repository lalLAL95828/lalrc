import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {default as LALButton,ButtonSize,Buttontype} from './button'
import { mdiAccountAlert,mdiAccountBox } from '@mdi/js'
import MdiIcon from '../Icon/icon';


const defaultButton = () => (
    <LALButton onClick={action('clicked')}>默认按钮</LALButton>
)

/* const buttonWithSize = ()=>{
    return (
        <div>
            <LALButton size={ButtonSize.Large}>large buttom</LALButton>
            <LALButton size={ButtonSize.Small}>small buttom</LALButton>
        </div>
    )
} */

const buttonWithSize = ()=>(
    <div>
        <LALButton size={ButtonSize.Large}>large buttom</LALButton>
        <LALButton size={ButtonSize.Small}>small buttom</LALButton>
    </div>
);

const buttonWithType = ()=>(
    <div>
        <LALButton btnType = {Buttontype.Primary}>primary button</LALButton>
        <LALButton btnType = {Buttontype.Danger}>danger button</LALButton>
        <LALButton btnType = {Buttontype.Link} href="www.baidu.com">Link button</LALButton>
    </div>
);
const buttonWithFab = ()=>(
    <div>
        <LALButton fab size={ButtonSize.Large} elevation={10} >
            <MdiIcon path={mdiAccountAlert} size="1.5rem" color="red"/>   
        </LALButton>
        <LALButton fab size={ButtonSize.Small} color="pink" width="80px"><MdiIcon path={mdiAccountBox} size="1.2rem" color="blue" /></LALButton>
    </div>
);

storiesOf('按钮组件',module)
.add('Button',defaultButton)
.add('Button of size',buttonWithSize)
.add('Button of type',buttonWithType)
.add('IconButton',buttonWithFab)
