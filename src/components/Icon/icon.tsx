import React,{FC,useState} from 'react'
import Icon from '@mdi/react';
// import Transition from "../Transition/transition"
// import "animate.css";

export interface IconProps {
    path:string,
    title?:string,
    description?:string,
    size?:number|string,
    horizontal?:boolean,
    vertical?:boolean,
    rotate?:number,
    color?:string,
    spin?:boolean|number,
};

export const MdiIcon:FC<IconProps> = (props) =>{
    // const [inProp, setInProp] = useState(false);
    const {
        path,
        title,
        description,
        size,
        horizontal,
        vertical,
        rotate,
        color,
        spin,

    } = props

    return (
        <>
        {/* <Transition in={inProp} timeout={2000} classNames={{
            enter: 'animate__fadeInDown',
            enterActive: 'animate__fadeInDown',
            enterDone: 'animate__fadeInDown',
            exit: 'animate__fadeOutDown',
            exitActive: 'animate__fadeOutDown',
            exitDone: 'animate__fadeOutDown ',
        }}> */}
        <Icon path={path}
                className={'animate__animated'}
                title = {title}
                description = {description}
                size={size}
                horizontal = {horizontal}
                vertical ={vertical}
                rotate={rotate}
                color={color}
                spin={spin}
                />
       {/* </Transition>
        <button type="button" onClick={() => setInProp(!inProp)}>
          Click to Enter
        </button> */}
        </>
      );
}
MdiIcon.defaultProps = {
    horizontal:false,
    vertical:false,
    size:"1rem",
    rotate:0,
    spin:false
}

export default MdiIcon