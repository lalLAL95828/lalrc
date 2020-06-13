import React,{FC} from 'react'
import Icon from '@mdi/react';

export interface IconProps {
    path:string,
    title?:string,
    description?:string,
    size?:number|string,
    horizontal?:boolean,
    vertical?:boolean,
    rotate?:number,
    color?:string,
    spin?:boolean|number
};

export const MdiIcon:FC<IconProps> = (props) =>{
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
        <Icon path={path}
          title = {title}
          description = {description}
          size={size}
          horizontal = {horizontal}
          vertical ={vertical}
          rotate={rotate}
          color={color}
          spin={spin}
          />
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