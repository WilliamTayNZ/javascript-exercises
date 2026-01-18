const findTheOldest = function(people) {
    // death year - birth year
    people.forEach(function(person) {
        if (!(person.yearOfDeath)) {
            const currentDate = new Date();
            person.age = currentDate.getFullYear() - person.yearOfBirth
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    })

    console.log(people);

    return people.reduce(function(oldest, current) {
        console.log("oldest =", oldest); 
        console.log("current =", oldest); 
        
        if (current.age > oldest.age) {
            return current;
        } else {
            return oldest;
        }
     });

};

// Do not edit below this line
module.exports = findTheOldest;


// Why this doesn't work:
const findTheOldestDoesntWork = function(people) {

    people.forEach(function(person) {
        if (!(person.yearOfDeath)) {
            const currentDate = new Date();
            person.age = currentDate.getFullYear() - person.yearOfBirth
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    })

    console.log(people);

    return people.reduce(function(oldest, current) {
        console.log("oldest =", oldest); 
        // don't use concatenation here because 
        // "oldest = " + {}  will become "oldest = [object Object]"
        console.log("current =", current);
        
        if (oldest) { // fails here, because {} is TRUTHY!
            if (current.age > oldest.age) {
                return current;
            } else {
                return oldest;
            }
        } else {
            return current;
        }
     }, {});

};