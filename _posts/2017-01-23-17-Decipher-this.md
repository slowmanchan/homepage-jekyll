---
layout: post
title: The Code Wars (Decipher this!)
date: 2017-01-23
categories: coding
tags: [puzzles]
---
It's time for some more code wars again!

I'll link to the actual codewars puzzle if you want to try it on the live site (I recommend you do so).

You're in for a treat today because I have not one but two puzzles to decipher with you today.  

### Decipher me!
[Link](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)

Here's the first:

<!--more-->

> Decipher this!
You are given several secret messages you need to decipher. Here are the conditions:

> The first letter corresponds to ASCII character code (case sensitive)
The second letter needs to be switched to the last letter
The last letter needs to be switched to the second letter
If it only has one letter, it will be unchanged
If it only has two letters, you will just need to convert the ASCII character code to a letter
Keepin' it simple -- there are no special characters

> Example:
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

I'll give you a second to process.

....

Ok! Did you get it? If not it's cool, I found this one particularly tricky because I did'nt know how to convert ascii character codes.  Luckily I found this:

~~~javascript
String.fromCharCode(num, num2)
~~~

this will take any number and returns it's corresponding ASCII character.  

for example:

~~~javascript
String.fromCharCode(72);
<< "H"
~~~

I also learned of the replace and match methods:

replace will replace the first argument with the second.

~~~javascript
var str = 'hello bob';
str.replace('bob', 'norm');
<< 'hello norm'
~~~

match will find any matches and return it in an array:

~~~javascript
var str = 'hello 777';
str.match(/\d+/);
<< ["777"]
~~~

great little methods for isolating numbers or letters.

So lets break this baby down.  

* split the string into an array.
* iterate through the array.
* replace any numbers in array to its ascii equivalent.
* if the result is length of 2 or 1 then push it to the a new array.
* else, concatenate all necessary substrings and push that to the new array.
* join the new array and return it.

This is the answer I came up with:

~~~javascript
function decipherThis(str) {
  var result = [];
  var array = str.split(' ');
  var ascii_string = '';

  for (var i = 0; i < array.length; i++) {
    ascii_string = array[i].replace(/\d+/, String.fromCharCode(array[i].match(/\d+/)));

    if (ascii_string.length == 2 || ascii_string.length == 1 ) {
      result.push(ascii_string);
    }else{
      ascii_string = ascii_string[0] + ascii_string.slice(-1) + ascii_string.slice(2, -1) + ascii_string[1];
      result.push(ascii_string);
    }
  }return result.join(' ');
};
~~~

And thats it!  This one took me a while because I wasn't very comfortable with the new methods but a persistence got me there!

### Street Fighter 2
[Link](https://www.codewars.com/kata/5853213063adbd1b9b0000be)

This one was kind of neat because it has you traverse 2 arrays and return your position each time.

> Description:

> Short Intro

> Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

> Can you solve this kata? Suuure-You-Can!

> UPDATE: a new kata's harder version is available here.

> The Kata

> You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:
Here is the answer:

>![StreeFighter](https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fightersgeneration.com%2Fnp5%2Fgm%2Fsf2ce-s2.jpg&f=1)

>Selection Grid Layout in text:

>| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
Input

>the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);
Output

>the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);
Rules

>Selection cursor is circular horizontally but not vertically!

>As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

>Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

>Test

>For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

>Notice : changing some of the input data might not help you.

>Examples

>1.

>fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']
then I should get:

>['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

>2.

>fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
Result:

>['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
OFF-TOPIC

>Some music to get in the mood for this kata :

>Street Fighter 2 - selection theme

Long description but don't worry, this one isn't too difficult.

I'll give you a sec to process...
...

If you got it, great! if not, then thats ok to.  I'll walk you through my process.

* Iterate through the moves array.
* Use a switch using moves[i] as the switch expression.
* Use the directions for each case.
* Make if statements for each wrap case.
* for each else statement, increment for 'right' and decrement for going 'left'.
* Push the each position to the result array.
* After the loop. return the result array.

And heres the code:

~~~javascript
function streetFighterSelection(fighters, position, moves){
var result = [];
  for (var i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'up':
        if (position[0] != 0) {
          position[0] = 0;
        }
        break;
      case 'down':
        if (position[0] != 1) {
          position[0] = 1;
        }
        break;
      case 'right':
        if (position[1] == fighters[0].length - 1) {
          position[1] = 0;
        }else{
          position[1] += 1;
        }
        break;
      case 'left':
        if (position[1] == 0) {
          position[1] = fighters[0].length - 1;
        }else{
          position[1] -= 1;
        }
        break;
      }
      result.push(fighters[position[0]][position[1]]);
      }
  return result;
  }
~~~

There we go.  Easy, Peasy right?  This was good practice with the switch statement and array traversals.

Let me know if you have any questions.
