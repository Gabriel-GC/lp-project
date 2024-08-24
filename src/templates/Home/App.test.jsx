import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  debug();
});
