function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function mostFrequentWord(text) {

  /*we are grabbing 'text' from input to store in variable
  'words' to scan through every word in array and see if it's
  in the 'wordFrequencies object.'

*/

  var words = getTokens(text);
  var wordFrequencies = {};
  for (var i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    }
    else {
      wordFrequencies[words[i]]=1;
    }
  }

  /*
  The first variable 'currentMaxKey is defined to keep track of 
  how many times a word occurs.

  The second variable keeps track of the max # of keys counted 
  in the object.'
  */
  var currentMaxKey = Object.keys(wordFrequencies)[0];
  var currentMaxCount = wordFrequencies[currentMaxKey];
  
  /*
  In this section we test and see if our words counted
  in our wordFrequencies variable is greater than our currentMaxCount
  variable. If so we assign the last two variables the value of word.
  then we return currentMaxKey which should be the most frequent word in the list.
  */
  for (var word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  return currentMaxKey;
}

