function longestWord(sentence) {
    var sentenceSplit = sentence.split(' ');
    var longest = "";
    for (var i = 0; i < sentenceSplit.length; i++) {
        if (sentenceSplit[i].length >= longest.length) {
            longest = sentenceSplit[i];
        }
    }
    return longest;
}


function shortestWord(str) {
    var strSplit = str.split(' ');
    var shortest = strSplit;
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length <= shortest.length) {
            shortest = strSplit[i];
        }
    }
    return shortest;
}


function wordLengths(sentence) {
    var sentenceSplit = sentence.split(' ').join('');
    var count = 0
    for (var i = 0; i < sentenceSplit.length; i++) {
        count = sentenceSplit.length;
    }
    return count;
}
