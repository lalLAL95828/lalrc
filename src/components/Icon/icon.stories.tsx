import React from 'react'
import {storiesOf} from '@storybook/react'
import { mdiAccountAlert } from '@mdi/js'
import MdiIcon from './icon';

const defaultMdiIcon = ()=>(
    <MdiIcon path={mdiAccountAlert} size="40px" color="gray"/>
)

storiesOf('图标组件',module)
.add('MdiIcon', defaultMdiIcon)