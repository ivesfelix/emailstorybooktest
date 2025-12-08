import React from 'react';
import { Button, generateButtonHTML } from '../components/Button';

export default {
  title: 'Email Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => generateButtonHTML(story.args),
    },
  },
  argTypes: {
    styleType: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Button style type',
    },
    alignment: {
      control: { type: 'select' },
      options: ['left', 'center'],
      description: 'Button alignment',
    },
    buttonText: {
      control: 'text',
      description: 'Button text',
    },
    buttonHref: {
      control: 'text',
      description: 'Button URL',
    },
  },
};

export const PrimaryButtonLeft = {
  args: {
    styleType: 'primary',
    alignment: 'left',
    buttonText: 'Shop now',
    buttonHref: '#',
  },
};

export const SecondaryButtonLeft = {
  args: {
    styleType: 'secondary',
    alignment: 'left',
    buttonText: 'Shop now',
    buttonHref: '#',
  },
};

export const PrimaryButtonCentered = {
  args: {
    styleType: 'primary',
    alignment: 'center',
    buttonText: 'Shop now',
    buttonHref: '#',
  },
};

export const SecondaryButtonCentered = {
  args: {
    styleType: 'secondary',
    alignment: 'center',
    buttonText: 'Shop now',
    buttonHref: '#',
  },
};
