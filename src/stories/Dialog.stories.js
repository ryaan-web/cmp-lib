import { Dialog } from '../components/Dialog';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Molecules/Dialog',
  component: Dialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: 'select', options: ['primary','secondary','teritiary'] },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: 'medium',
    children: 'Primary',
    variant: 'primary'
  },
};

export const Secondary = {
  args: {
    children: 'Secondary',
    variant: 'primary'
  },
};

export const Teritiary = {
  args: {
    children: 'Teritiary',
    variant: 'teritiary'
  },
};
