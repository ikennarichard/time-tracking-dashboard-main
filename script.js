
const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


const timeFrames = document.querySelectorAll('.time_of_report > small');

const current = [...document.querySelectorAll('.bg .duration > p')];

const previous = [...document.querySelectorAll('.previous')];


const previousText = [...document.querySelectorAll('.previous_text')];

const dots = [...document.querySelectorAll('.dots')];


function setTimeFrames() {
    try {
    timeFrames.forEach((time) => time.addEventListener('click', (e) => {
        select(e);
        setValues(e)
    }))
    }


catch(e) {
    console.log(e)
}
}

setTimeFrames()


function setValues(e) {
    for(let i in data) {
        if (e.target.innerText == "Daily") {
            current[i].innerText = data[i].timeframes.daily.current + 'hrs'
            previous[i].innerText = data[i].timeframes.daily.previous + 'hrs'
            previousText[i].innerText = 'Yesterday'
        }  else if (e.target.innerText == "Weekly") {
          current[i].innerText = data[i].timeframes.weekly.current + 'hrs'
          previous[i].innerText = data[i].timeframes.weekly.previous + 'hrs'   
          previousText[i].innerText = 'Last Week'
      }
        
        else if (e.target.innerText == "Monthly") {
            current[i].innerText = data[i].timeframes.monthly.current + 'hrs'
            previous[i].innerText = data[i].timeframes.monthly.previous + 'hrs' 
            previousText[i].innerText = 'Last Month'  
        }
    }
}



function select(e) {
    timeFrames.forEach((time) => {
        if (time == e.target) {
            time.classList.add('selected');
        } else {
            time.classList.remove('selected');
        }
    })
}