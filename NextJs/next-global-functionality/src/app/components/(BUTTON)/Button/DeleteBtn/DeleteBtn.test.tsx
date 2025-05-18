import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { DeleteBtn } from "./DeleteBtn";

jest.mock("next/navigation", () => {
  return {
    useParams: () => ({ get: () => { } })
  }
});
test("test label delete button", () => {

  render(<DeleteBtn />)
  expect(screen.getByText("Delete")).toBeInTheDocument()
})

test("test handleClick delete button", async () => {
  jest.spyOn(window, "alert").mockImplementation(() => { });
  render(<DeleteBtn />)
  const button = screen.getByText("Delete")
  await userEvent.click(button)
  expect(window.alert).toHaveBeenCalledTimes(1)
})