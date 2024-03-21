[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/DlFCTo_q)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14047064&assignment_repo_type=AssignmentRepo)
### 2024 MDDN342 Project 1: Parameterised Space

Initial Idea: 960x

drew tyndell
aperiodic tile

- pale pink/brown wallpaper with ships moving
- /amsterdam houses lined up in slanted grid letting go of puffs of smoke, rotate to little heads
https://www.construction21.org/data/sources/users/18990/aquiles-carattino-usxbvi3pqpi-unsplash.jpg
- london tube lines - little circle travelling on 
- birds eye view of houses with rotating shadows https://www.istockphoto.com/photo/new-housing-estate-from-above-gm1187918698-335769022
https://stackoverflow.com/questions/67634103/how-to-get-a-top-view-house-in-p5-js




colour shifting:
My first sketch is based off of [this gif] (https://bestanimations.com/Balls&Buttons/amazing-3d-computer-ball-sphere-art-animated-gif-6.gif):

I find this animation completely mesmerising and would love to see how I could expand on it. For my sketch I have turned the basic sphere shape into a pattern as I think this will look more satisfying in wallpaper format. I have left the sketch as black and white for now because I'd like to test a few options in combination with the animation effect. To distinguish my own work from the original gif, I'd quite like to work with a shift between 2 colours rather than a whole spectrum, but the effect of this needs to be tested in animation.

I was inspired also by Lucy Jaegers' previous work. I was shown this piece last year and remember finding the effect of this piece quite hypnotising. My wallpaper will attempt to recreate this effect - hopefully imitating the colour shifting and movement this wallpaper has. 

UPDATE 1:
I decided to start this process by focusing on recreating my inspiration gif. I lay down some base shapes relative to the height of the canvas to begin. I'm aware that the idea I have will rely heavily on relative numbers in order for it to be sized up successfully. 

I've managed to sort the center circle shape using layered arcs. I'm currently struggling a lot with the shapes behind this main sphere. I've been attempting to use bezier curve and curves but these have been quite difficult to control. I'll attempt this again today in class but may need to resort to other techniques. 

UPDATE 2:
I wanted to make sure that I could get the colour movement working on the inner circle so I attempted a few ways to do this. I initially tried to condense the code into a for-loop with a few if statements and one colour array. This wasn't successful as I couldn't control each individual section ie. The entire sphere would flash the same colour. to fix this I had to separate all shapes into their individual if statements and make a colour array for each section. The colour arrays were staggered so that the colour shifted from one side of the sphere to the other. This took quite a bit of playing around and I feel like I could make the code more elegant. I'll attempt to do this later but want to focus on the background circle 

UPDATE 3: 
After getting the colour changing cycle working I tried a few different colour combos. My original plan of having the orb shift only between 2 colours didn't work very well. In order for the 3Dish illusion to work i had to use a dark and light tone with 2 sets of colour gradients that transformed into and out of each colour extreme. Basically I had to make the colour shift cyclic and shifting between 2 colours wasn't giving this effect. I found a set of colours that I quite like and give the effect I want, but I might come back to play with a few other combos later. 

I've now also managed to fit the spheres into a grid pattern using for loops. I've tested how the canvas looks depending on how many rows/columns I drew. I also played around with layering the spheres. Currently the code is drawing 2 grids - one with lots of smaller spheres in the background and another with larger,fewer spheres in the foreground. 

UPDATE 4:
To add some interest I've experimented with side scroll. I used the example_sidescroll.js given to us for the set up of my code. I've experimented with just big spheres, only smaller spheres and both together. A happy accident was making the two types of spheres move in opposite directions. This created a crossing effect where the smaller ones would start in the background and end up in the foreground. The dynamic look this created appeals to me so I'm going to see where it leads. As there's a bit of extra white space, I'm currently looking at how many smaller/bigger spheres should be placed to appropriately fill the canvas during movement.

UPDATE 5: 
Refining time - I settled at the crossing movement that I tested out previously. I experimented with a few differnt sizes of the spheres, but ultimately decided the original was more balanced. I'm really happy with the effect of this. I played around with a few different colour palettes, looking at different blues and greens in particular, but again, I decided to come back to my first iteration. (The accidental) 70s colour palette that I stumbled onto feels right with the sphere shape to me. Probably because of its similarity to 70s flower power patterns [like this] (https://carmengonzalezartist.com/product/delicate-flower-power-20x20-acrylic-on-canvas-original/) that I've always had an affinity with. I think the general visual feel of the final has some quite clear ties to other 70s inspiration, specifically the 'trippy' [psychedelic aesthetic] (https://www.pinterest.com/vivianic/psychedelic/) that was so popular.