export function getAppointmentsForDay(state, day) {
  let appointmentList = [];
  state.days.filter(weekDay => {
    if (weekDay.name === day) {
      appointmentList = weekDay.appointments.map(id => state.appointments[id]);
    }
  });
  return appointmentList;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  } else {
    return {
      "student": interview.student,
      "interviewer": {  
        "id": state.interviewers[interview.interviewer].id,
        "name": state.interviewers[interview.interviewer].name,
        "avatar": state.interviewers[interview.interviewer].avatar 
      }
    }
  }
}