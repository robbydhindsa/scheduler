export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
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
