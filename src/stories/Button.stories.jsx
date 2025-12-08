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
    buttonText: {
      control: 'text',
      description: 'Button text',
    },
    buttonHref: {
      control: 'text',
      description: 'Button URL',
    },
    buttonType: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Button style type',
    },
    alignment: {
      control: { type: 'select' },
      options: ['left', 'center'],
      description: 'Button alignment',
    },
  },
};

export const PrimaryButtonLeft = {
  args: {
    buttonText: 'Shop now',
    buttonHref: '#',
    buttonType: 'primary',
    alignment: 'left',
  },
};

export const SecondaryButtonLeft = {
  args: {
    buttonText: 'Shop now',
    buttonHref: '#',
    buttonType: 'secondary',
    alignment: 'left',
  },
};

export const PrimaryButtonCentered = {
  args: {
    buttonText: 'Shop now',
    buttonHref: '#',
    buttonType: 'primary',
    alignment: 'center',
  },
};

export const SecondaryButtonCentered = {
  args: {
    buttonText: 'Shop now',
    buttonHref: '#',
    buttonType: 'secondary',
    alignment: 'center',
  },
};
