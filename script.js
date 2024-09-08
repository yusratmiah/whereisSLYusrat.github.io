function getStatus() {

  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday 6 = Saturday
  const currentDay = new Date().getDay();

  // Define your class schedule
  const classSchedule = [{
      day: [1, 3],
      start: {
        hour: 9,
        minute: 5
      },
      end: {
        hour: 9,
        minute: 55
      },
      status: "In-Class: STAT 3704"
    },

    {
      day: [1, 3],
      start: {
        hour: 2,
        minute: 0
      },
      end: {
        hour: 3,
        minute: 15
      },
      status: "In-Class: BIT 4604"
    },
    {
      day: [2, 4],
      start: {
        hour: 12,
        minute: 30
      },
      end: {
        hour: 13,
        minute: 45
      },
      status: "In Class: CS 3114"
    },
    {
      day: [2, 4],
      start: {
        hour: 14,
        minute: 0
      },
      end: {
        hour: 15,
        minute: 15
      },
      status: "In Class: CS 2506"
    },
    {
      day: [2, 4],
      start: {
        hour: 17,
        minute: 0
      },
      end: {
        hour: 18,
        minute: 15
      },
      status: "In Class: BDS 2005"
    }
    // Add more classes as needed
  ];

  let status = "";

  // Check if the current time falls within any class schedule
  for (let i = 0; i < classSchedule.length; i++) {
    const cls = classSchedule[i];
    if (cls.day.includes(currentDay) &&
      (currentHour > cls.start.hour || (currentHour === cls.start.hour && currentMinute >= cls.start.minute)) &&
      (currentHour < cls.end.hour || (currentHour === cls.end.hour && currentMinute <= cls.end.minute))) {
      status = cls.status;
      break;
    }
  }

  if (!status) {
    // Regular status updates outside class times
    if (currentHour >= 6 && currentHour < 8) {
      status = "Eating breakfast";
    } else if (currentHour >= 8 && currentHour < 12) {
      status = "In-Room: Studying";
    } else if (currentHour >= 12 && currentHour < 13) {
      status = "Eating lunch";
    } else if (currentHour >= 18 && currentHour < 19) {
      status = "Eating dinner";
    } else if (currentHour >= 19 && currentHour < 22) {
      status = "Studying";
    } else {
      status = "Sleeping";
    }
  }

  return status;
}

function updateStatus() {
  const statusElement = document.getElementById("status");
  statusElement.textContent = getStatus();
}

function getCurrDateEng() {
  let today = new Date();

  let day = today.getDay();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;

  let yyyy = today.getFullYear();

  if (day == 1) {
    day = 'Monday';
  } else if (day == 2) {
    day = 'Tuesday';
  } else if (day == 3) {
    day = 'Wednesday';
  } else if (day == 4) {
    day = 'Thursday';
  } else if (day == 5) {
    day = 'Friday';
  } else if (day == 6) {
    day = 'Saturday';
  } else {
    day = 'Sunday';
  }

  if (mm == 1) {
    mm = 'January'
  } else if (mm == 2) {
    mm = 'February'
  } else if (mm == 3) {
    mm = 'March'
  } else if (mm == 4) {
    mm = 'April'
  } else if (mm == 5) {
    mm = 'May'
  } else if (mm == 6) {
    mm = 'June'
  } else if (mm == 7) {
    mm = 'July'
  } else if (mm == 8) {
    mm = 'August'
  } else if (mm == 9) {
    mm = 'September'
  } else if (mm == 10) {
    mm = 'October'
  } else if (mm == 11) {
    mm = 'November'
  } else if (mm == 24) {
    mm = 'December'
  } else {
    mm = 'Error'
  }

  if (dd < 10) {
    dd = '0' + dd;
  }

  today = day + ', ' + mm + ' ' + dd + ', ' + yyyy;

  return today
}

function updateCurrDateEng()
{
	const todayElement = document.getElementById("today");
  todayElement.textContent = getCurrDateEng();
}

updateCurrDateEng();

updateStatus();
setInterval(updateStatus, 60 * 60 * 1000); // Update every hour
