# Giacomo Messina Midterm

## What you did?

For this midterm project I started by drawing a quick sketch of my iPhone before being able to code a digital image on Java Script. I then took that code and made it into a function before I finally was able to figure out a way to tile it in a grid and make that grid size changable by just 1 number. 

## How you did it/ Probelms you faced/ How you fixed them?

I first started with roughly tracing my iPhone on my iPad and sketching out the important details such as the camera lenses and wireless charging pad. I then through trial and error alongside those basic number ideas was able to get a sketch of it onto Java. Throughout this I had a lot of problems come up, including re teaching my brain that 0,0 was at the top left and not the bottom left. I also had to do some math in terms of finding the centers of circles as thats how the ellipse function works versus the rectangle where you define a corner. 

```
function setup() {
  createCanvas(150, 150); // Set the size of canvas
  noStroke(); // Disable drawing the stroke
}

function draw() {
  fill (75);
  rect(7.5, 5, 65, 125, 5); 
  fill(50)
  rect(11, 10,  30, 30, 5);
  fill(0)
  ellipse(20, 19, 10.5, 10.5); 
  ellipse(20, 31, 10.5, 10.5);
  ellipse(31, 25, 10.5, 10.5);
  fill (75)
  ellipse(32, 35, 6, 6);
  fill (200)
  ellipse(32, 15, 6, 6);
  fill (255)
  rect(37.5, 90, 6, 22, 4);
  ellipse(40, 65, 42.5, 42.5);
  fill(75)
  ellipse(40, 65, 32.5, 32.5);
}

```

After that it was quite easy to get it into a function I just had to add push and pop, (first in last out) and define x, y, and s. 

```
function setup() {
  createCanvas(400, 400); 
  noStroke(); 
}
function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill (75);
  rect(7.5, 5, 65, 125, 5); 
  fill(50)
  rect(11, 10,  30, 30, 5);
  fill(0)
  ellipse(20, 19, 10.5, 10.5); 
  ellipse(20, 31, 10.5, 10.5);
  ellipse(31, 25, 10.5, 10.5);
  fill (75)
  ellipse(32, 35, 6, 6);
  fill (200)
  ellipse(32, 15, 6, 6);
  fill (255)
  rect(37.5, 90, 6, 22, 4);
  ellipse(40, 65, 42.5, 42.5);
  fill(75)
  ellipse(40, 65, 32.5, 32.5);
  pop();
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 200, 1);
}
```

I honestly did not run into any problems at this part it was absolutley the quiquest section and it was very simple to follow along with the GitHub information. 

For the final phase, phase 4, I had the hardest time trying to get my code to tile and after about a weeks worth of trial and error, brainstorming, and annoying my friends with constant complaining I was able to get it to tile even if it is not perfect code. 

The first step I wanted to do was change the background color, this gave me the full format so it felt easier to look at, my eyes could see the area I was trying to fill up. My first instinct was to go back into the notes and I copied and pasted the code from the chess board section of the functions chapter (the closest thing I could think fo to a full tiled board). However when I opened this obviously I was given code in the console section, not something drawn out. I scraped that idea for now and really tried to go back into the original GitHub to define a few things. 

```
  let gridSize = 10
  let tileWidth = width / gridSize;
  let tileHeight = height / gridSize;

  let objectWidth = 60; 
  let objectHeight = 125;
  
```
I tried to go to the most basic areas defining the gridSize (the number I'd be able to change to anything later) and then the tile width and height and the object width and height. The object width and height was easy as I was able to reference my original work. For the tileWidth and height I was stuck thinking about the math and originally plugged numbers before I knew I had to make it a function. In defining it as width (total canvas width) over the grid size I was able to make sure that no matter what number I was able to put into grid there would always be that many tiles wide, and the same goes for the height. 

The hardest part for me was trying to determine what s would be, as I had already defined x and y but the final piece of code:

```
let s = (tileWidth / objectWidth, tileHeight / objectHeight);

```

Ended up being quite simple as I was just defining the scale to be what fits within the area of the tile. 

For the last bit of code:

```
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      
      let X = x * tileWidth
      let Y = y * tileHeight;
      drawObject(X, Y, s);
```

I went back to the nested loops from the chess board code and defined y and x for the loop. To actually draw the loops I defined an uppercase X and Y as the tileWidth and Height:

 (I originally defined it as gridSize which did not work of course and squished all the phones together. I then tried other numbers and mathematical equations before almost giving up engirely. I then just plugged everything to try and this worked so I called it a day lol). 

But in the end I drew the Object with all of what I defined and created a final working function with the code: 

```
function setup() {
  createCanvas(400, 400); 
  noStroke(); 
}
function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill (75);
  rect(7.5, 5, 65, 125, 5); 
  fill(50)
  rect(11, 10,  30, 30, 5);
  fill(0)
  ellipse(20, 19, 10.5, 10.5); 
  ellipse(20, 31, 10.5, 10.5);
  ellipse(31, 25, 10.5, 10.5);
  fill (75)
  ellipse(32, 35, 6, 6);
  fill (200)
  ellipse(32, 15, 6, 6);
  fill (255)
  rect(37.5, 90, 6, 22, 4);
  ellipse(40, 65, 42.5, 42.5);
  fill(75)
  ellipse(40, 65, 32.5, 32.5);
  
  pop();
}

function draw() {
  background(220);

  let gridSize = 10
  let tileWidth = width / gridSize;
  let tileHeight = height / gridSize;

  let objectWidth = 60; 
  let objectHeight = 125;
  
  let s = (tileWidth / objectWidth, tileHeight / objectHeight);

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      
      let X = x * tileWidth
      let Y = y * tileHeight;
      drawObject(X, Y, s);
    }
  }
}
```