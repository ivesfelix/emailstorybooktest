import { addons, types, useGlobals } from '@storybook/manager-api';
import { IconButton, Icons } from '@storybook/components';
import React from 'react';

const ADDON_ID = 'z-color-scheme-toggle';
const TOOL_ID = `${ADDON_ID}/tool`;

const Tool = () => {
  const [{ colorScheme = 'light' }, updateGlobals] = useGlobals();

  const toggleColorScheme = () => {
    const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
    updateGlobals({ colorScheme: newScheme });
  };

  const isDark = colorScheme === 'dark';

  return (
    <IconButton
      key={TOOL_ID}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleColorScheme}
    >
      <Icons icon={isDark ? 'sun' : 'moon'} />
    </IconButton>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Color Scheme',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
    paramKey: 'colorScheme',
  });
});
