import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"; 
import userEvent from '@testing-library/user-event';
import Post from "./index";

describe("Post Component", () => {
  test("Basic Rendering of Post component", () => {
    render(<Post />);
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("post-input-title"), {
      target: { value: "Post Title" },
    });

    fireEvent.change(screen.getByTestId("post-input-description"), {
      target: { value: "Post Description" },
    }); 

    userEvent.type(screen.getByTestId("post-input-title"),'Post Title'); 
    userEvent.type(screen.getByTestId("post-input-description"),'Post Description');
    screen.debug();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
