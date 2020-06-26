import React,{useState,FC, MouseEvent} from "react"
// import Transition from "../Transition/transition"
import { CSSTransition,TransitionGroup } from 'react-transition-group'
// import { TransitionGroupProps } from 'react-transition-group/TransitionGroup'
import { v4 as uuidv4 } from 'uuid'
import classnames from 'classnames'

/**
 * Ripple组件
 * ## Ripple header
 * ~~~js
 * import {LALRipple} from 'lalrc'
 * ~~~
 */

export enum RippleRate{
    slow='slow',
    middle = "middle",
    fast="fast"
};
export enum RippleTimeOut{
    slow=800,
    middle = 500,
    fast=300
};

export interface RippleProps {
    /** 自定义的类名 */
    selfClassName?:string;
    /** 波纹颜色 */
    color?:string;
    /** 波纹速度 */
    rate?:RippleRate;
    /** 波纹的z-index */
    zIndex?:number,

};

export interface rippleItemProps {
    id:string,
    text?:string,
    top?:string,
    left?:string,
    height?:string,
    width?:string,
};

export const Ripple:FC<RippleProps>=(props)=>{

    const [rippleItems, setRippleItems] = useState<Array<rippleItemProps>>([]);
    const [parentPos,setParentPos] = useState<string>('');
    const [clickEle,setClickEle] = useState<HTMLElement>();

    const addRippleItemFn = (event:MouseEvent)=>{
        // console.log(event.target.parentElement.style)
        // console.log(getComputedStyle(event.target.parentElement))
        // console.log(getComputedStyle(event.target.parentElement).borderBottomLeftRadius)
        // console.log(getComputedStyle(event.target.parentElement).borderBottomRightRadius)
        // console.log(getComputedStyle(event.target.parentElement).borderTopLeftRadius)
        // console.log(getComputedStyle(event.target.parentElement).borderTopRightRadius)
        // console.log(event)
        // debugger

        // console.log(event.currentTarget.parentElement)
        let parentEle = event.currentTarget.parentElement;//获取父级节点
        setClickEle(parentEle as HTMLElement)

        //设置border-radious
        if(parentEle){
            //第二种方式，火狐谷歌都无效， 火狐没有borderRadius
            const borderBottomLeftRadius =window.getComputedStyle(parentEle,null).borderBottomLeftRadius;
            const borderBottomRightRadius =window.getComputedStyle(parentEle,null).borderBottomRightRadius;
            const borderTopLeftRadius =window.getComputedStyle(parentEle,null).borderTopLeftRadius;
            const borderTopRightRadius =window.getComputedStyle(parentEle,null).borderTopRightRadius;
            // const borderRadious =parentEle.style.borderRadius;
            (event.currentTarget as HTMLElement).style.borderBottomLeftRadius = borderBottomLeftRadius;
            (event.currentTarget as HTMLElement).style.borderBottomRightRadius = borderBottomRightRadius;
            (event.currentTarget as HTMLElement).style.borderTopLeftRadius = borderTopLeftRadius;
            (event.currentTarget as HTMLElement).style.borderTopRightRadius = borderTopRightRadius;
        }

        if(parentEle && window.getComputedStyle(parentEle).position === "static"){
            setParentPos('static')
            parentEle.style.position = "relative"
        }

        let boundaryWidth = 0;
        let offsetDiff = 0;


        if(event.currentTarget.clientHeight > event.currentTarget.clientWidth){
            offsetDiff = event.currentTarget.clientHeight - event.nativeEvent.offsetY;
            boundaryWidth = Math.max(offsetDiff,event.nativeEvent.offsetY)/3*2
        }else{
            offsetDiff = event.currentTarget.clientWidth - event.nativeEvent.offsetX;
            boundaryWidth = Math.max(offsetDiff,event.nativeEvent.offsetX)/3*2
        }

        const top = event.nativeEvent.offsetY - boundaryWidth/2;
        const left = event.nativeEvent.offsetX - boundaryWidth/2

        setRippleItems([
            ...rippleItems,
            { id: uuidv4(),
              top:top+"px",
              left:left+"px",
              height:boundaryWidth+"px",
              width:boundaryWidth+"px",
            },
          ]);
    }
    const onExitFn = (node:HTMLElement,itemId:string)=>{
        var parentEle = clickEle;//获取父级节点
        const newRippleItems = rippleItems.filter( ({id}) => {
            return id !== itemId
        })
        setRippleItems(newRippleItems)
        if(parentEle && newRippleItems.length ===0 && parentPos === "static"){
            setParentPos('')
            parentEle.style.position = "static"
        }
    }
    const {
        color,
        children,
        selfClassName,
        rate,
        zIndex,
        ...restProps
    } = props

    // const [inProp, setInProp] = useState(false);

    const classNames = classnames('rip',selfClassName)
    const rateClassNames = classnames({
        [`ripple-active-enter-${rate}`]:rate
    })

    const timeout = RippleTimeOut[(rate as RippleRate)] 

    return (
        <>
             <TransitionGroup className="rip-group" onClick={(e)=>{addRippleItemFn(e)}}>
                {rippleItems.map(({id,left,top,height,width})=>(
                    <CSSTransition
                            key={id}
                            timeout={timeout}
                            classNames={{
                            enter: 'ripple-enter',
                            enterActive: rateClassNames,
                            enterDone: 'ripple-done-enter',
                            // exit: 'ripple-exit',
                            // exitActive: 'ripple-active-exit',
                            // exitDone: 'ripple-done-exit',
                            }} 
                            onEntered={(node,isAppearing)=>{onExitFn(node,id)}}
                        
                        >
                        <div
                        style={{top:top,left:left,height:height,width:width,backgroundColor:(color?color:""),zIndex:zIndex }}
                        className={classNames} 
                        {...restProps}
                        >
                        {children}
                        </div>
                    </CSSTransition>
                ))}

             </TransitionGroup>
        </>
    )
};
Ripple.defaultProps = {
    rate:RippleRate.middle,
    zIndex:10,
};

export default Ripple;
