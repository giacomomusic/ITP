# FtoC HW

## What you did?

This week I used javaScript in order to count to 100 but every number divisible by 3 print "Fizz," every number divisible by 5 print "Buzz," and any number divisible by both print "FizzBuzz"

## How you did it?

I used the in class code along as my base and I copied it over into editor.p5js.org in order to better test the code. My final code was:

```
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 != 0) {
    console.log("Fizz");
  }
   if (i % 5 === 0 && i % 3 != 0) {
    console.log("Buzz");
  }
   if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
}
 if (i % 3 != 0 & i % 5 != 0)
   console.log(i)
}
```

## Problems you faced/ How you fixed them?

My first attempt of the code was not fully working, it was a good start but this is how it looked. 

```
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
   if (i % 5 === 0) {
    console.log("Buzz");
  }
   if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
}
  console.log(i)
}
```
When I printed this code it did do what I want in terms of printing fizz, buzz, and fizzbuzz when needed but it still printed every other number at the same time. I had to then tell the code that not only when something is true "===" do something but also when something is false "!=" don't do something. So in my final code I made sure that when both 3 was divisible and 5 was NOT divisible it would print fizz, and same for buzz. Also for the final print of all the numbers I had to clarify that i could not be divisible by 3 or 5. Overall it was very straightforward and it was just a little bit of extra work after the fist attempt. 