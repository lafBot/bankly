
const timeReference = {
    "00:00": "midnight",
    "12:00": "noon",
    "00" : "twelve",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "fourty",
    "50": "fifety"
} 

// const militaryHours = {
//     "13": ""
// }

function checkDefault(time) {
    return timeReference[time]
}

function timeWord(time) {
    const twelve = checkDefault(time);
    let day;
    let minute = time.slice(3);

    if (twelve) {
        return twelve
    }

    // check hour and if am or pm
    let hour = time.slice(0,2);
    if (+hour >= 12) {
        day = "pm";
    } else {
        day = "am"
    }

    // convert hour into text
    if (hour == "00") {
        hour = timeReference[hour];
    }
    else if (hour.slice(0,1) == "0") {
        hour = timeReference[hour.slice(1)];
    }
    else if (+hour <= 12) {
        hour = timeReference[hour];
    }
    else {
        hour = timeReference[+hour - 12];
    }

    // else {
    //     hour = timeReference[hour.slice(0,1) + "0"] + " " + timeReference[hour.slice(1)];
    // }

    if (minute === "00") {
        minute = "o'clock";
    }
    else if (timeReference[minute]) {
        minute = timeReference[minute];
    }
    else if (minute.slice(0,1) === "0") {
        minute = "oh " + timeReference[minute.slice(1)];
    }
    else if (minute.slice(0,1) === "1") {
        minute = timeReference[minute];
    }
    else if (+minute.slice(0,1) > 1) {
        minute = timeReference[minute.slice(0,1) + "0"] + " " + timeReference[minute.slice(1)];
    }


    return `${hour} ${minute} ${day}`
}





module.exports = timeWord