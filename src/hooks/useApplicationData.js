import { useState, useEffect } from "react";
import axios from "axios";
import { func } from "prop-types";

export default function useApplicationData() {
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, []);

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = day => setState({ ...state, day });

  // Dynamically update number of spots remaining upon booking/deleting an appointment
  const updateSpots = function(state, appointments, id) {
    const dayObj = state.days.find(d => d.name === state.day);

    let spots = 0;
    for (const id of dayObj.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }

    const day = {... dayObj, spots};
    return state.days.map(d => d.name === state.day ? day : d);
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // Update database upon appointment booking/edit
    return axios.put(`/api/appointments/${id}`, {interview})
      .then(response => {
        setState({
          ...state,
          appointments,
          days: updateSpots(state, appointments)
        });
        return response;
      })
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // Update database upon appointment deletion
    return axios.delete(`/api/appointments/${id}`)
      .then(response => {
        console.log("response:", response);
        setState({
          ...state,
          appointments,
          days: updateSpots(state, appointments)
        });
        return response;
      })
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}