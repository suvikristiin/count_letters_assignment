function getCountOfLetters(str) {
    const count = {};

    for (let i in str) {
        // Ignore whitespace characters
        if (str[i] === " ") { 
            continue;
        // If the character is already in the count object, increment its count
        } else if (str[i] in count) {
            count[str[i]]++;
        // If the character is not in the count object, add it with a count of 1
        } else {
            count[str[i]] = 1;
        }
    }
    
    // Sort the keys of the count object alphabetically
    const sortedCount = Object.keys(count).sort();
    const returnObject = {};
    // Loop through the sorted keys and add them to the return object
    sortedCount.forEach(key => returnObject[key] = count[key]);

    return returnObject;
}

const result = getCountOfLetters("a black cat");
console.log(result);
