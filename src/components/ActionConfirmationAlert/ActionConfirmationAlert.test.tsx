import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActionConfirmationAlert from './ActionConfirmationAlert';

describe('<ActionConfirmationAlert />', () => {
  test('it should mount', () => {
    render(<ActionConfirmationAlert open={true} />);

    const actionConfirmationAlert = screen.getByTestId('ActionConfirmationAlert');

    expect(actionConfirmationAlert).toBeInTheDocument();
  });
});
