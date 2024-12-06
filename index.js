/* 
This Christmas, you’ve been tasked with running an anagram quiz at 
the family gathering.

You have been given a list of anagrams, but you suspect that some 
of the anagram pairs might be incorrect.

Your job is to write a JavaScript function to loop through the array
and filter out any pairs that aren’t actually anagrams.

For this challenge, spaces will be ignored, so "Be The Helm" would 
be considered a valid anagram of "Bethlehem".
*/

let anagrams = [
  ["Can Assault", "Santa Claus"],
  ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
  ["Frosty The Snowman", "Honesty Warms Front"], /* NOT ANAGRAMS: !== string length */
  ["Drastic Charms", "Christmas Cards"], /* NOT ANAGRAMS: !== string length */
  ["Congress Liar", "Carol Singers"],
  ["The Tin Glints", "Silent Night"], /* NOT ANAGRAMS: !== string length */
  ["Dormitory", "Dirty Room", "Room Darty"], /* ADDED to test if the solution works for larger subarrays: First 2 are anagrams, not 3 altogether */
  ["Be The Helm", "Betlehem"], /* NOT ANAGRAMS: !== string length */
  ["Is Car Thieves", "Christmas Eve"] /* NOT ANAGRAM: === string length but non-identical letters */
];

/**
 * Returns the str after removing all spaces, lowercasing, and sorting it
 * @param {string} str the first string in the sub-array to base the anagrams
 * @returns {string} normalized str
 */
const normalizeStr = (str) => {
  return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('')
}

function findAnagrams(array) {
  const trueAnagrams = array.filter(subArray => {
    for (let i = 0; i < subArray.length; i++) {
      if (normalizeStr(subArray[0]) !== normalizeStr(subArray[i])) return false
    }
    return true
  })
  return trueAnagrams
}

// TEST CASE:
console.log(findAnagrams(anagrams))
