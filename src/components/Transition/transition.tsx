import React,{FC} from "react"
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps,CSSTransitionClassNames } from 'react-transition-group/CSSTransition'

type TransitionProps = CSSTransitionProps & {
    classNames: string | CSSTransitionClassNames,
    wrapper? : boolean,
}
export const Transition:FC<TransitionProps> = (props)=>{
    const {
        children,
        classNames,
        wrapper,
        ...restProps
      } = props
    return (
        <>
         <CSSTransition
         classNames={ classNames} 
         {...restProps}>
            {wrapper ? <div>{children}</div> : children}
         </CSSTransition>
        </>
    )
}

export default Transition