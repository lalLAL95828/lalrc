import React from 'react'
import {render} from "@testing-library/react"
import { mdiAccountAlert } from '@mdi/js'
import MdiIcon from './icon'

// test('our first react test case',()=>{
//     const wrapper = render(<Button>Nice</Button>)
//     const element = wrapper.queryByText("Nice")
//     expect(element).toBeTruthy()
//     expect(element).toBeInTheDocument();//组件是否在文档中
// })

describe('test button component',()=>{
    it("should render then corrent default icon",()=>{
        const wrapper = render(<MdiIcon path = {mdiAccountAlert}/>)
        // const element = wrapper.queryByText("Nice")
        // const element = wrapper.getByText("Nice")
        expect(wrapper).toBeTruthy()
        // expect(element).toBeInTheDocument();//组件是否在文档中
        // expect(element.tagName).toEqual('BUTTON');//判断是否为button
        // expect(element).toHaveClass("btn btn-default");//判断是否有这些类
    })


})