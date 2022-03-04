export function getAppointmentsForDay(state, day) {
  let appointmentList = [];
  state.days.filter(weekDay => {
    if (weekDay.name === day) {
      appointmentList = weekDay.appointments.map(id => state.appointments[id]);
    }
  });
  return appointmentList;
}