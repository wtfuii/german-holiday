function easterCalculation (y) {
    //The date of Easter is computed by an algorithm found in the book of Meeus,
    //which is valid without exceptions for all years in the Gregorian Calendar 
    //(from the year 1583 on)  Input: Year
    var a = y % 19;
    var b = Math.floor(y/100);
    var c = y % 100;
    var d = Math.floor(b/4);
    var e = b % 4;
    var f = Math.floor((b+8)/25);
    var g = Math.floor((b-f+1)/3);
    var h = (19*a+b-d-g+15) % 30;
    var i = Math.floor(c/4);
    var k = c % 4;
    var l = (32+2*e+2*i-h-k) % 7;
    var m = Math.floor((a+11*h+22*l)/451);
    var n = Math.floor((h+l-7*m+114)/31);
    var p = (h+l-7*m+114) % 31;
    p = Math.round(p+1);
    return new Date( y, n -1 , p )
}

function bubeCaluclation (date) {
    // calculates the "Buß- und Bettag"
    var nov23 = new Date(date.getFullYear(), 10, 23)
    nov23.setDate(nov23.getDate() - 1)
    while (true) {
        if (nov23.getDay() == 3) {
            return nov23
        } else {
            nov23.setDate(nov23.getDate() - 1)
        }
    }
}

function holidayCheck (date, state) {
    function checkIndividual (holidate, states, holiday) {
        //checks if the passed date equals the the holiday. If true: check if it is a state-specific holiday
        if (date.valueOf() == holidate.valueOf() && ((states != false) ? ((states.indexOf(state) != -1) ? true : false) : true)) {
            return holiday
        }
    }
    var easter = easterCalculation(date.getFullYear())
    var holidayparams = [
        [new Date(date.getFullYear(), 0, 1), [], "Neujahrstag"],
        [new Date(date.getFullYear(), 0, 6), ["BW", "BY", "ST"], "Heilige Drei Könige"],
        [easter - 2, [], "Karfreitag"],
        [easter, ["BB"], "Ostersonntag"],
        [easter + 1, [], "Ostermontag"],
        [new Date(date.getFullYear(), 4, 1), [], "Tag der Arbeit"],
        [easter + 39, [], "Christi Himmelfahrt"],
        [easter + 49, ["BB"], "Pfingstsonntag"],
        [easter + 50, [], "Pfingstmontag"],
        [easter + 60, ["BW", "BY", "HE", "NW", "RP", "SL"], "Fronleichnam"],
        [new Date(date.getFullYear(), 9, 3), [], "Tag der deutschen Einheit"],
        [new Date(date.getFullYear(), 9, 31), ["BB", "MV", "SN", "ST", "TH"], "Reformationstag"],
        [bubeCaluclation(date), ["SN"], "Buß- und Bettag"],
        [new Date(date.getFullYear(), 11, 25), [], "1. Weihnachtstag"],
        [new Date(date.getFullYear(), 11, 26), [], "2. Weihnachtstag"]
    ] 
    
    for (var i = 0; i < holidayparams.length; i++) {
        var check = checkIndividual(holidayparams[i][0],holidayparams[i][1],holidayparams[i][2],holidayparams[i][3])
        if (check) {
            return check
        }
    }
    return false
}