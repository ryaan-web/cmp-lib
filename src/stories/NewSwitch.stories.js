import { NewSwitch } from '../components/NewSwitch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Atoms/NewSwitch',
  component: NewSwitch,
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
    id: 5,
    on: true,
    readOnly: false,
    labelPosition: 'left'
  },
};

export const Secondary = {
  args: {
    id: 5,
    on: true,
    readOnly: false,
    labelPosition: 'right'
  },
};

export const Teritiary = {
  args: {
    children: 'Teritiary',
    variant: 'teritiary'
  },
};
