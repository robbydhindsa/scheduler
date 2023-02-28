import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = day => setState({ ...state, day });

  function updateSpots(state, dayName, modifier) {
    const daysArray = state.days;
    let newDaysArray = [];
    for (const day of daysArray) {
      if (day.name === dayName) {
        day.spots += modifier;
      }
      newDaysArray.push(day);
    }
    return newDaysArray;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    console.log(id, interview);

    return axios.put(`/api/appointments/${id}`, {interview})
      .then(response => {
        setState({
          ...state,
          appointments,
          days: updateSpots(state, state.day, -1)
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

    return axios.delete(`/api/appointments/${id}`)
      .then(response => {
        console.log("response:", response);
        setState({
          ...state,
          appointments,
          days: updateSpots(state, state.day, 1)
        });
        return response;
      })
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}