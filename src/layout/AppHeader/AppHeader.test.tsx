import {AppHeader} from "./AppHeader";
import {render, screen} from "@testing-library/react";

describe('AppHeader', () => {
  it('should be rendered without errors', () => {
    const testTitle = 'Test Title';
    const testChildren = 'Test Children';
    render(
      <AppHeader title={testTitle}>
        <span>{testChildren}</span>
      </AppHeader>
    );
    expect(screen.getByText(testTitle)).toBeInTheDocument();
    expect(screen.getByText(testChildren)).toBeInTheDocument();
  });
});