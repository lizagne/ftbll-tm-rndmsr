# Football 5-a-side Random Team Picker Project
This is the technical project set on our penultimate day at the Coding Fellowship to make for January 7th

## To run the project:
* NPM and a Command Line tool is needed.
* git clone this repo
* run npm install or npm i
* run npm start to view on localhost:3000

Alternatively view the live app here: http://lizagne.uk/ftbll-tm-rndmsr/

## tecnologies used
React, Redux, JSX, CSS, SASS, gulp, CSS animations, Git

## The brief
The exercise is to create a tool which randomly picks 5-a-side football teams from a list of 10 names.
It's up to you how you implement this, with JavaScript, PHP, as a web page, or as an app.

### Advanced features might include:
    1. support for n-a-side, where a list of any length can be split into two teams
    2. support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly

## My initial notes
The MVP is randomly picking a 5-a-sdie football team from a list of 10 names, so initially I need:
1. to have an input where the user can enter 10 names
2. It should have a Generate Teams button which when pressed will places the 10 names into 5-a-side teams.

## Wireframes:
![Demo](https://user-images.githubusercontent.com/26763021/34521518-f97e4088-f085-11e7-937b-10b21d12942a.png)
![Demo](https://user-images.githubusercontent.com/26763021/34521517-f962918a-f085-11e7-9778-cb628c70ce69.png)

### Additional Notes on Saturday 23rd after 1st draft of Wireframe (see pdf attached) initial set up and first changes:
1. have set up SASS on my project
2. Also have set up a background and the logo and favicon - this has allowed me to help with the formatting
3. Adding an input and thinking about the best way the user interface could work.
4. Will now do some more research into other apps to get some more ideas.

### Sunday 24th Notes:
1. Have managed to get the input to add names to an initial list below.
2. Need to write some logic that disables the add button after 10 names are entered.
3. Would like to have some visual boxes, maybe dotted lines in the space in the middle for the start of the page, so that it's obvious there whould be players names entered. (Will make a new wireframe draft 2).
4. Need to figure out where to put randomise button.
5. I have to make sure that the text entered does meet text requirements, should be no longer than 50 characters, and must be letters, not numbers or spaces or empty.

### Tuesday 26th Dec Notes:
I got a bit stuck with adding in Redux, and after lots of back and forth and looking over older work and tutorials with React and Redux, I kind of want to go back to the drawing board, both in terms of layout and in terms of approach. I will remake a 2nd draft of the wireframe first thing tomorrow (it's 23:14) and re-structure the app in the morning too! I want to make it more horizontal so everything can fit within the fold, also have 10 inputs, so that it's clear immediately that the app needs to take 10 names.

### Monday 1st Jan Notes:
Since Boxing Day, I went over a lot of other React and separate stuff, I started again a couple of times after going back over Redux and React tutorials and workshops. I decided to go back to simplyfying the idea. I've now got to a stage where the user can enter names, the names get outputted to the left of the screen, these names come with an Edit and a Delete button. Then when 10 names have been entered the Reset and Generate buttons appear. Reset takes everything but the header and the input away from the screen, and Generate button generates two teams, these will then be shuffled when the user represses the generate button.

### Wednesday 3rd Jan Notes:
I've been trying to do a lot of Refactoring, but not always with much success, have sometimes reverted to older code, but I will endeavour. Just tried testing in different browsers, Firefox and Safari, both not working because of a Redux problem, found out it was about installing the dev tools, did that and both work now. Tried putting in some validation also, will continue with that. Will finish off the day with some SASS!

Things TODO:
1. Try and get a balancing skills section in, with stars, or points
2. Add some more styling to the scoreboard area
3. Refactor a lot of the code
5. Try to put the functionality for the randomising into a smaller function from lodash - called _.shuffle

### Checklist
1. Check accessibility and responsiveness when the project is nearing the end.
2. Testing with friends, family and unit testing
3. Write up how to run it on another machine
4. Send supporting documentation

## Testing
I made the last minute decision to change the background image to an SVG to make the app more engaging, though SVG's are heavy on code. I used Google Dev Tools to check on it's performance. The speed ...

Throughout the build I used a third party server to test the build on a live page so that I could then test on actual devices, Ipad and Iphone. I realised that I wanted to show the basic and most important information and inputs on one screen, so for smaller devices I turned off the display of certain elements.

I have been using Chrome primarily, but have also tested it on Firefox and Safari, Redux dev tools needed to be installed, but then the app worked fine on both.

## Validation and Error Handling
I am pleased that I was able to get a bit of form validation in. Firstly the min and max length of the input had to be limited because otherwise the user could keep on typing. I kept a upper limit to 30 characters but also for the final output, I wrote a ternary expression which sliced the string at 20 characters and concatenated elipses on the end, for extra long names:
``
player.name.length >= 20 ? player.name.slice(0, 19) + "..." : player.name 
``
I created a FormErrors component to handle when a user puts in special characters which I have disallowed. But then whilst looking on StackOverflow I saw that someone made the point that some names have hyphens in them and apostrophes, also spaces for surnames, so the code now includes these things, so alphanumeric with spaces, hyphens and apostrophes and the input must be between 3 and 30 characters long:
``
nameValid = value.match(/^[a-zA-Z0-9 \-']{3,30}$/);
``

## Styling
I wanted to spend time in getting the app to be designed for responsiveness. So I made use of SASS by using gulp tasks to minify, convert and rename scss to the min.css file. Using SASS I was able to better organise, what proved to be a lot of css styling. I used mixins, extends and variables to reuse styles throughout the app.

