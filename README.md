# SITEPreWork
# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Peter Baxter**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/scandalous-malachite-diadem?path=index.html%3A28%3A8

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Game modes implement different optional features and allow for different levels of difficulty

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![] https://recordit.co/Ht4u80oHwM

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random, https://developer.mozilla.org/en-US/, https://coolors.co/, https://pages.mtu.edu/~suits/notefreqs.html, my best friend as a rubber ducky]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[After the current features were implemented, I tried to create a keybinding, inspired by MMORPGs and similar video games, where pressing down a number key would act as a click for the relevant button. This turned out to be a bit beyond my skill level, but I went down a rabbit hole of trying event handlers, listeners for player inputs, and onkeyup/onkeydown methods. I spent a couple of hours beating my head against it, and while I found documentation on stackoverflow for how to submit on pressing enter, I never managed to adjust the code into working with my own; after enough tweaking, I got it to outline the 1 key when pressing enter, but not to click, and attempting to add it into the HTML file created a nonfunctional field that looked like a very flat button and threw off all my other formatting. Unfortunately, the way I ended up overcoming the issue was to restore it to an earlier version because my attempts hadn't yielded anything useful and threw off the code linked to it, preventing the relevant buttons from registering button clicks. The feature as a whole was problematic enough for me that it provided an excellent object lesson in being overly ambitious and making sure to back up my work when it functions.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[What kind of time does it take to develop a larger or more complex webpage? What does a web developer do when they get blocked? What are team structures when a group of people are working together on a webpage or website? What kind of tools are available to expedite or track making HTML content when the tags get complicated and start to overwhelm the screen? With CSS, is there a way to implement loops to make something like a color gradient across the buttons? Would it be even possible to program a compiler for another language in CSS, or are its functions too specific?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I would change my button shapes to something like a hexagon series and tones from a simple C scale to a series of arpeggios or something similarly simple but musical. I'd also go back to my attempt at implementing a keypress function that'd press the buttons down with a keypress, and try to figure out how to pull off the requisite event handling and set the button states as similar to onclick, onmousedown, and onmouse up so that it'd be able to function for both options. If I got the hexagonal shapes working and still had time, I'd try to format it into a honeycomb pattern, though I currently have no idea of how I'd implement that.]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Peter Baxter]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
