//Problem 1
function anaToVori(ana) {
    //Exception handling
    if (typeof (ana) != "number") {
        return "Please Enter a valid type of input.";
    }
    if (ana < 0) {
        return "Quantity cannot be lower than zero(0).";
    }
    //Calculating vori
    //16 ana = 1 vori
    let vori = ana / 16;
    return vori;
}

//Problem 2
function pandaCost(singara, samucha, jilapi) {
    //Exception handling
    if (typeof (singara) != "number" || typeof (samucha) != "number" || typeof (jilapi) != "number") {
        return "Please Enter a valid type of input.";
    }
    if (singara < 0 || samucha < 0 || jilapi < 0) {
        return "Quantity cannot be lower than zero(0).";
    }
    //Calculating total cost
    //singara per piece 7 taka
    //samucha per piece 10 taka
    //jilapi per piece 15 taka
    let totalCost = (singara * 7) + (samucha * 10) + (jilapi * 15);
    return totalCost;
}

//Problem 3
function picnicBudget(people) {
    //Exception handling
    if (typeof (people) != "number") {
        return "Please Enter a valid type of input.";
    }
    if (people < 0) {
        return "Quantity cannot be lower than zero(0).";
    }
    //Calculating total budget
    let totalBudget;
    //Calculating total budget for first 100
    //5000 per head under 100 people
    if (people <= 100) {
        totalBudget = people * 5000;
    }
    //Calculating total budget for first 200
    //4000 per head from 101 to 200 people
    else if (people > 100 && people <= 200) {
        totalBudget = (100 * 5000) + ((people - 100) * 4000);
    }
    //Calculating total budget for first 200 and beyond
    //5000 per head beyond 200 people
    else {
        totalBudget = (100 * 5000) + (100 * 4000) + ((people - 200) * 3000);
    }
    return totalBudget;
}

//Problem 4
function oddFriend(names) {
    //Handling exception
    if (typeof (names) != "object") {
        return "Please Enter a valid type of input.";
    }
    if (names.length == 0) {
        return "There is no name in the list.";
    }
    //Getting first odd length name of the array
    let oddName = "";
    for (const name of names) {
        if (name.length % 2 != 0) {
            oddName = name;
            break;
        }
    }
    //returning the name
    if (oddName.length == 0) {
        return "No odd friend name found.";
    }
    else {
        return oddName;
    }
}