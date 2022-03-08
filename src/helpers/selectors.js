export function getAppointmentsForDay(state, day) {
  let appointmentList = [];
  state.days.filter(weekDay => {
    if (weekDay.name === day) {
      appointmentList = weekDay.appointments.map(id => state.appointments[id]);
    }
    return appointmentList;
  });
  return appointmentList;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  } else {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer]
    }
  }
}

export function getInterviewersForDay(state, day) {
  let interviewers = [];
  state.days.filter(weekDay => {
    if (weekDay.name === day) {
      interviewers = weekDay.interviewers.map(id => state.interviewers[id]);
    }
    return interviewers;
  });
  return interviewers;
}