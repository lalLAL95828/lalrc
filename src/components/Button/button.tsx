import React,{ButtonHTMLAttributes,FC,ReactNode,AnchorHTMLAttributes,useRef,useEffect} from 'react'
import classnames from 'classnames'
import Ripple,{RippleProps} from "../Ripple/ripple"
// import Transition from "../Transition/transition"

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum Buttontype{
    Primary = 'priamry',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
}

interface BaseButtonProps{
    /** 自定义的类名 */
    className?: string;
    disabled?:boolean;
    size?:ButtonSize;
    width?:string | number;
    btnType?:Buttontype;
    children?:ReactNode;
    href?:string;
    /** 图标按钮 */
    fab?:boolean;
    /** 景深box-shadow,0至24 */
    elevation?:number;
    /** 背景色 */
    color?:string,
    /** 使用波纹 */
    ripple?:boolean | RippleProps
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

//Partial所有属性转化成可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Button组件
 * ## Button header
 * ~~~js
 * import {LALButton} from 'lalrc'
 * ~~~
 */
export const Button:FC<ButtonProps> = (props) =>{
    const buttonEle = useRef<HTMLButtonElement>(null);
    /* useEffect(()=>{
        if(!buttonEle.current){
            return;
        }
        const eleNode = buttonEle.current
        const listener = (event: MouseEvent) => {
            console.log(event)
        }
        eleNode.addEventListener('click', listener)
        return ()=>{
            eleNode.removeEventListener('click', listener)
        }
    }) */
    const {
        btnType,
        className,
        disabled,
        fab,
        width,
        size,
        color,
        children,
        ripple,
        elevation,
        href,
        ...restProps
    } = props;
    

    const classes = classnames('btn',className,{
        [`btn-fab-${size}`]:(fab && size) && !width ,
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size && !fab,
        [`elevation-${elevation}`]:elevation,
        "btn-fab":fab,
        'disabled':(btnType === Buttontype.Link) && disabled
    })

    let RippleBool = false
    let RippleProp;
    if(typeof ripple === 'boolean'){
        RippleBool = ripple ? true : false
    }else{
        RippleBool = true
        RippleProp = ripple
    }

    if(btnType === Buttontype.Link&&href){
        return(
            <a
                {...restProps}
                className={classes}
                href={href}
            >{children}</a>
        )
    }else{
        return(
        <button
            ref={buttonEle}
            {...restProps}
            style={{backgroundColor:(color?color:''),borderColor:(color?color:''),width:(width?width:''),height:(width?width:'')}}
            className = {classes}
            disabled = {disabled}
        >{children}{ RippleBool && 
            <Ripple {...RippleProp} /> 
        }</button>
        )
    }
}
Button.defaultProps = {
    disabled:false,
    btnType:Buttontype.Default,
    ripple:true,
};

export default Button;
