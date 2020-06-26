import React from 'react'
import {storiesOf} from '@storybook/react'
import { mdiAccountAlert } from '@mdi/js'
import MdiIcon from './icon';

const defaultMdiIcon = ()=>(
    <div>
        <MdiIcon path={mdiAccountAlert} size="40px" color="gray"/>
    </div>
)

storiesOf('图标组件',module)
.add('MdiIcon', defaultMdiIcon)