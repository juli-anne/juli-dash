import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import Page from './page';
import React from 'react';

test('renders without crashing', () => {
  render(React.createElement(Page));
  expect(true).toBe(true);
});
