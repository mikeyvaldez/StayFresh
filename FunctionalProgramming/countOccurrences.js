function countOccurences(arr = ['a', 'a', 'b', 'b', 'b', 'c']){
    let frequency = {};

    for(let i in arr){
        if(!(arr[i] in frequency)){
            frequency[arr[i]] = 1;
        } else {
            frequency[arr[i]] += 1;
        }        
    }

    return frequency;
}


console.log(countOccurences())


// function frequencyCounter(arr){
//     return arr.reduce(function(counts, item){
//         return {
//             ...counts,
//             [item]: counts[item] ? counts[item] + 1 : 1
//         }
//     })
// }