import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import CardContainer from './CardContainer';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<CardContainer />);
});