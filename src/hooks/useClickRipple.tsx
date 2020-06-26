import React,{ RefObject, useEffect, MouseEventHandler,useState } from "react";
import Ripple from "../components//Ripple/ripple"

function useClickRipple(ref: RefObject<HTMLElement>) {
    // useState

    useEffect(() => {
        if(!ref.current){
            return 
        }else{
            const nodeEle = ref.current;
            const handler = ()=>{
                // const rippleEle = <Ripple/>;
                
                // nodeEle.appendChild(rippleEle)
            }
            nodeEle.addEventListener('click',handler)
            return ()=>{
                nodeEle.removeEventListener('click',handler)
            }
        }

    })
    
}

export default useClickRipple