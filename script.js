/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// Leetcode: Instructions: Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
//  Each letter in magazine can only be used once in ransomNote.

 
Input: ransomNote = "aa", magazine = "aab"
Output: true
var canConstruct = function(ransomNote, magazine) {
    //est magazine character map through set and get?
    const map = new Map();
    for (let character of magazine){
          map.set(character, map.get(character) + 1 || 1)
    }

    for (let character of ransomNote){
        if (!map.get(character)) 
            {return false}
        map.set(character, map.get(character) - 1 )
        map[ransomNote[character]]--;
          // console.log("character", character, "value", map.get(character))
            
    }
    return true;   
};