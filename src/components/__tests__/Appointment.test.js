import React from "react";
import { fireEvent, getAllByTestId, getByAltText, getByText, queryByText, render, waitForElement } from "@testing-library/react";

import Appointment from "components/Appointment";
import Application from "components/Application";


describe("Appointment", () => {

  it("renders without crashing", () => {
    render(<Appointment />)
  });

  it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
    const { container } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[1];

    fireEvent.click(getByAltText(appointment, "Delete"));

    expect(getByText(appointment, "Delete the appointment?")).toBeInTheDocument();

    fireEvent.click(getByText(appointment, "Confirm"));

    expect(getByText(appointment, "Deleting")).toBeInTheDocument();

    await waitForElement(() => getByAltText(appointment, "Add"));

    const day = getAllByTestId(container, "day").find(day =>
      queryByText(day, "Monday")
    );

    expect(getByText(day, "2 spots remaining")).toBeInTheDocument();
  });
});

