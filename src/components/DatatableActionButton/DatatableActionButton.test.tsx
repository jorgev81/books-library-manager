import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DatatableActionButton from './DatatableActionButton';

describe('<DatatableActionButton />', () => {
  test('it should mount', () => {
    render(<DatatableActionButton row={{ id: 1, value: 'hello world' }} />);

    const datatableActionButton = screen.getByTestId('DatatableActionButton');

    expect(datatableActionButton).toBeInTheDocument();
  });
});
