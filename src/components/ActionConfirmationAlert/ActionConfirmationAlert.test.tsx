import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActionConfirmationAlert from './ActionConfirmationAlert';

describe('ActionConfirmationAlert Component', () => {
  const mockOnConfirm = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with provided props', () => {
    render(
      <ActionConfirmationAlert
        open={true}
        title="Confirmation Title"
        content="Confirmation Content"
        loading={false}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    );

    expect(screen.getByText('Confirmation Title')).toBeInTheDocument();
    expect(screen.getByText('Confirmation Content')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
  });

  it('calls onCancel when Cancel button is clicked', () => {
    render(
      <ActionConfirmationAlert
        open={true}
        onCancel={mockOnCancel}
      />
    );

    fireEvent.click(screen.getByText('Cancel'));
    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when Yes button is clicked', () => {
    render(
      <ActionConfirmationAlert
        open={true}
        onConfirm={mockOnConfirm}
      />
    );

    fireEvent.click(screen.getByText('Yes'));
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it('disables the Yes button when loading is true', () => {
    render(
      <ActionConfirmationAlert
        open={true}
        loading={true}
        onConfirm={mockOnConfirm}
      />
    );

    const yesButton = screen.getByText('Yes');
    expect(yesButton).toBeDisabled();
  });
});
