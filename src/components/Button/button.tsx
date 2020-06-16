import React,{ButtonHTMLAttributes,FC,ReactNode,AnchorHTMLAttributes} from 'react'
import classnames from 'classnames'
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
    btnType?:Buttontype;
    children:ReactNode;
    href?:string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

//Partial所有属性转化成可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 这是我们的第一个 Button 组件
 * ## Button header
 * ~~~js
 * import {Button} from lalComponents
 * ~~~
 */
export const Button:FC<ButtonProps> = (props) =>{
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props;

    const classes = classnames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType === Buttontype.Link) && disabled
    })

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
            {...restProps}
            className = {classes}
            disabled = {disabled}
        >{children}</button>
        )
    }
}
Button.defaultProps = {
    disabled:false,
    btnType:Buttontype.Default
}

export default Button;
