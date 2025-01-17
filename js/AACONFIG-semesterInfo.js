
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("08/26/2024 4:00:00"),
    lastDayOfSemester:  new Date("12/09/2024 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("Labor Day",          new Date("09/02/2024"), new Date("09/02/2024")),
//        new VacationDays("NO CLASS",                   new Date("10/8/2024"), new Date("10/10/2024")),
        new VacationDays("Fall Break",         new Date("10/14/2024"), new Date("10/15/2024")),
        new VacationDays("Thanksgiving Break", new Date("11/27/2024"), new Date("11/29/2024")),
//         new VacationDays("Snow Day",           new Date("11/20/2019"), new Date("11/20/2019")),
    ]
};
