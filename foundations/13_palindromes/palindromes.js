const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz1234567890';

    const stringAsArray = string.split("");
    const cleanedStringArray = stringAsArray
        .map(character => character.toLowerCase())
        .filter(character => alphanumerical.includes(character)); 

    console.log(cleanedStringArray);

    let left = 0, right = cleanedStringArray.length - 1;

    while (left < right) {
        if (cleanedStringArray[left] !== cleanedStringArray[right]) {
            return false;
        }

        left += 1;
        right -= 1;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
