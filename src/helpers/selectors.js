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
