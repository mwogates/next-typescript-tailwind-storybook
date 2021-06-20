import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '../components/Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Caption</Button>
)

export const Normal = Template.bind({})
Normal.args = {}

export const Redbutton = Template.bind({})
Redbutton.args = {
  disabled: true,
  textColor: 'white',
  bgColor: 'red',
  size: 'lg',
}

export const Outlined = Template.bind({})
Outlined.args = {
  size: 'lg',
  variant: 'outlined',
}

export const Loadingoutlinedbutton = Template.bind({})
Loadingoutlinedbutton.args = {
  loading: true,
  size: 'lg',
  variant: 'outlined',
}

export const Loadingbutton = Template.bind({})
Loadingbutton.args = {
  size: 'lg',
  loading: true,
  bgColor: 'pink',
}

export const Finisheoutlineddbutton = Template.bind({})
Finisheoutlineddbutton.args = {
  size: 'lg',
  textColor: 'white',
  bgColor: 'pink',
  finished: true,
  variant: 'outlined',
}
export const Finishdbutton = Template.bind({})
Finishdbutton.args = {
  size: 'lg',
  textColor: 'white',
  bgColor: 'pink',
  finished: true,
}

export const Disabledoutlinedbutton = Template.bind({})
Disabledoutlinedbutton.args = {
  size: 'lg',
  textColor: 'white',
  bgColor: 'pink',
  disabled: true,
  variant: 'outlined',
}
export const Disabledbutton = Template.bind({})
Disabledbutton.args = {
  size: 'lg',
  textColor: 'white',
  bgColor: 'pink',
  disabled: true,
}
