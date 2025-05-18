import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonSimple } from './ButtonSimple';

it("show label", () => {
  render(<ButtonSimple label='le text' />)
  expect(screen.getByText("le text")).toBeInTheDocument()
})

it("handleClick test", () => {
  const handleClick = jest.fn()
  render(<ButtonSimple label='the button' onClick={handleClick} />)
  const button = screen.getByText("the button")
  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalledTimes(1)
})