/*
    CIT 281 Project 1
    Name: Wes O'Brien
*/

function makeid(length) {
var result           = '';
var characters       = 'abcdefghijklmnopqrstuvwxyz';
var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));

/*

I struggled to figure out how to generate the number of
characters between 5 & 25.

*/

