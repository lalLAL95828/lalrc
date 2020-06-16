import React from 'react'
import {storiesOf} from '@storybook/react'
import DatePicker from './datePicker';

const defaultDatePicker = ()=>(
    <DatePicker />
)

storiesOf('日期选择器',module)
.add('DatePicker', defaultDatePicker)