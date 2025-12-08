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
  },
};

export const PrimaryButton = {
  args: {
    buttonText: 'Shop now',
    buttonHref: '#',
    buttonType: 'primary',
  },
};

export const SecondaryButton = {
  args: {
    buttonText: 'See more',
    buttonHref: '#',
    buttonType: 'secondary',
  },
};
