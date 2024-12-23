import React, { useState } from "react";
import {Dropdown} from "../components";
import styled from "styled-components";
import {MenuItem} from "../components/MenuItem";
import PropTypes from "prop-types";

const menuItems = [
  {
    value: 1,
    label: "New Delhi",
  },
  {
    value: 2,
    label: "Kolkata",
  },
  {
    value: 3,
    label: "Thiruvananthapuram",
  },
  {
    value: 4,
    label: "Bangalore",
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
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
    variant: 'primary'
  },
};

