/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
//testing
Input: ransomNote = "aa", magazine = "aab"
Output: true
var canConstruct = function(ransomNote, magazine) {
    //est magazine character map through set and get?
    const map = new Map();
    for (let character of magazine){
          map.set(character, map.get(character) + 1 || 1)
    }
    // console.log("map", map)
    for (let character of ransomNote){
        if (!map.get(character)) 
            {return false}
        map.set(character, map.get(character) - 1 )
        map[ransomNote[character]]--;
          console.log("character", character, "value", map.get(character))
            
    }
    return true;   
};