import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App, { TODO_KEY } from "./App";

test("Given saved todos When App is loaded Then show those", () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(["hello", "youtube"]));
  render(<App />);
  const linkElement = screen.getByText("hello");
  expect(linkElement).toBeInTheDocument();
});

test("Given saved todos When adding another todo Then show saved and new todo", () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(["hello"]));
  render(<App />);

  const inputElement = screen.getByTestId("todo-input");
  const buttonElement = screen.getByText("Add todo");

  fireEvent.change(inputElement, { target: { value: "youtube" } });
  fireEvent.click(buttonElement);

  const linkElement = screen.getByText("youtube");
  expect(linkElement).toBeInTheDocument();
});

test("Given saved todos When deleting specific todo Then remaining todo", () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(["hello", "youtube"]));
  render(<App />);
  const deleteIcon = screen.getByTestId("delete-youtube");

  const linkElement = screen.getByText("youtube");
  fireEvent.click(deleteIcon);

  expect(linkElement).not.toBeInTheDocument();
});
