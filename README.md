# Football 5-a-side Random Team Picker Project
This is the technical project set on our penultimate day at the Coding Fellowship to make for January 7th

## To run the project:
* NPM and a Command Line tool is needed.
* git clone this repo
* run npm install or npm i
* run npm start to view on localhost:3000

Alternatively view the live app here: http://lizagne.uk/ftbll-tm-rndmsr/

## Tecnologies Used
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

From my initial research into similar apps, I want to make an app which gives the user all the information they need on one page, because it's a simple app, I don't want the user to have to worry about tapping or clicking thought to anything else just to get their teams randomised. So I have to think about saving space and for it to work across all devices.

The design of the App should be very clear so the user knows exactly where to input data and where to generate data, so buttons and inputs will be highlighted and obvious.

## Wireframes:
![Demo](https://user-images.githubusercontent.com/26763021/34521518-f97e4088-f085-11e7-937b-10b21d12942a.png)

![Demo](https://user-images.githubusercontent.com/26763021/34521517-f962918a-f085-11e7-9778-cb628c70ce69.png)

## Notes over the 2 weeks
I decided to use React and Redux for this project because it was the subject that we were taught the most at DevelopMe_ and it also brings together a lot of what we have learnt over the past 12 weeks. I also found this subject the most enjoyable, yet also the hardest, and we've often been told once you make a React app 15-20 times things start getting easier. I have enjoyed trying to practice these subjects as much as possible, even though I struggle a lot with them.

I started this app as soon as the holiday started, on the 23rd Dec, and quite quickly got a list of 10 names rendering out to the screen with React, but I struggled a lot when it came to using Redux and holding state. I tried and tested a single input printing out 10 names, and then 10 inputs that each needed filling out. Both ways were fine locally but I struggled a lot with connecting Redux for the next stage.

I decided to go back to my past work from the Coding Fellowship and also Treehouse and Udemy. I went through a few app tutorials, Reduxtagram which concentrated on Redux and used a json file to pull in data, then a YouTube React app which used their API. I also looked back at my Treehouse RSVP app, which helped a lot with passing props, state and actionCreators and handlers.

### Notes from 23rd - 1st Jan
1. Have managed to get the input to add names to an initial list below.
2. Need to write some logic that disables the add button after 10 names are entered.
3. I have to make sure that the text entered does meet text requirements, should be no longer than 50 characters, and must be letters, not numbers or spaces or empty.
4. I would like to use lodash's _.shuffle method to randomise the names - this apparently should only take one line of code.
5. The Reset button clears everything but the Header and maybe get a Footer in too.

Since Boxing Day, I went over a lot of other React and separate stuff, I started again a couple of times after going back over Redux and React tutorials and workshops. I decided to go back to simplyfying the idea. I've now got to a stage where the user can enter names, the names get outputted to the left of the screen, these names come with an Edit and a Delete button. Then when 10 names have been entered the Reset and Generate buttons appear. Reset takes everything but the header and the input away from the screen, and Generate button generates two teams, these will then be shuffled when the user re-presses the generate button.

### Wednesday 3rd Jan Notes:
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
I used Bootstrap as a base so I could spend more time on the Javascript side of the app and also to make use of the column layouts, which I now feel very confident with. These helped me a lot when building for devices.

I wanted to spend time in getting the app to be designed for responsiveness. So I made use of SASS by using gulp tasks to minify, convert and rename scss to the min.css file. Using SASS I was able to better organise, what proved to be a lot of css styling. I used mixins, extends and variables to reuse styles throughout the app.

