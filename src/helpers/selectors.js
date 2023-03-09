// Returns an array of appointments for that day
export function getAppointmentsForDay(state, day) {
  const daysArray = state.days;
  for (const d of daysArray) {
    if (d.name === day) {
      const appointmentArray = [];
      for (const appointment of d.appointments) {
         appointmentArray.push(state.appointments[appointment]);
      }
      return appointmentArray;
    }
  }
  return [];
}

// Returns an array of interviewers for that day
export function getInterviewersForDay(state, day) {
  const daysArray = state.days;
  for (const d of daysArray) {
    if (d.name === day) {
      const interviewerArray = [];
      for (const interviewer of d.interviewers) {
         interviewerArray.push(state.interviewers[interviewer]);
      }
      return interviewerArray;
    }
  }
  return [];
}

// Return interview for specific timeslot
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const newObject = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  }
  return newObject;
}
