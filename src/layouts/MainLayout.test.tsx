import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better jest-dom assertions
import MainLayout from './MainLayout';

describe('MainLayout Component', () => {
  const sampleChildren = <div data-testid="child">Sample Children</div>;

  it('renders the component with provided children', () => {
    render(
      <MainLayout>
        {sampleChildren}
      </MainLayout>
    );

    // Check if the header text is rendered
    expect(screen.getByText('Book Manager')).toBeInTheDocument();

    // Check if the children are rendered
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    render(
      <MainLayout>
        {sampleChildren}
      </MainLayout>
    );

    // Check if the main layout has the correct class
    expect(screen.getByTestId('MainLayout')).toHaveClass('pretty-scrollbar');

    // Check if the grid containers have the correct class
    expect(screen.getByTestId('MainLayout').querySelector('.MainLayoutGrid')).toBeInTheDocument();

    // Check if the header container has the correct class
    expect(screen.getByTestId('MainLayout').querySelector('.HeaderContainer')).toBeInTheDocument();

    // Check if the page container has the correct class
    expect(screen.getByTestId('MainLayout').querySelector('.PageContainer')).toBeInTheDocument();
  });
});
