# QWERTY QUIZ

## Intro

I really thought it wasn't gonna be something I'd spend this much time on but then, life's not fair at all :wink

So I started with reading the instructions over and over again but maybe cause I was a bit sick when I got the task, I misunderstood the task and as I tried implementing what I understood, I discovered that cannot possibly be what I was tasked to do.

At first reading, I understood it was a typing speed quiz that has a timer that reduces with every passing word and points are given based on speed, multiplier and level but misunderstood, the `stack space`

After the next couple of scanning to get clear view of what the logic would be like, I ended deciding to build what the face of the task would look like first before going into the logic as that would be the challenging aspect.

## REACT.js

I'm quite versed with react but not so good with Algorithms I must say, putting the fact that am good with Numbers, observation and probabilities. I was able to put up the front-end within the after the first day and added few CSS (in a not_so_neat_manner).

### On-Screen Keyboard

On what I had for a checklist, an onscreen keyboard was next, so I had to take out my designed keyboard and install `react-simple-keyboard` that took out the process of adding functionality to my own keyboard. Before this was marked completed, I had to add the physical effects of showing the clicked or typed key(if correct or wrong). Was much of a fuzz but I had to set the keyboard to only Uppercase as this required the exact case to work. After which I marked done.

### Sound Effects

Next, was to add the sound effects for the various updates that will take place withing the app. Being in the react ecosystem for sometime now, I knew there was a package for functionality you'd need, after a quick search I came across `use-sound` which was a package built for functional components and not class components. So after a little thought, I converted my app component to a functional component but still came up with issues using useEffect hooks for some functionalities(which I resolved later on). So I moved the whole sound Effect functionality to another component. Had to pass a lot of props(ops, didn't even validate my props).

### Functionality

I know, not think that this was the cunniest. I made one or two maybe a million too many functions while trying to achive this. I've always been weak when it came down to `setInterval` for no reason, mostly when using functional components but thanks to this task I had to give it a second look and now am a god_level setInterval user. I think I really never got to finish this and I was advice to rest for 3 days by the doctor which I really didn't obey to the fullest but got me down.

## NODE.js

Since the server didn't really bear much functionality, I had it built the next day after checking the functionality checkbox(still_not_completed). I use docker for most of my secondary services like database(mongodb, mysql) or local servers (nginx, apache) etc. The problem I had here was a bit funny, as I miss took `app.get/app.post` for `app.use` and had to add another hours to the backend. My final dragg was the database, as I've not used my Mongo Atlas for a few months, if not years as I usually use a test database I created few about a year or two ago(at time of writing this, I haven't confirmed a working database)

## DOCUMENTATION PROCESS

I'd say this is the part of the tast I feared the most, as you've seen, I didn't say anything technical, or anything really useful in this, I think it took me 2 days or so to finally decide that I was just gonna write how I felt while developing the project, I did a 30 minutes research on `Development Process Documentation` but came up with only answers for business process documentations.

## CONCLUSION

I really had fun with this process and learnt a whole lot. I really appreciate for taking my application into consideration in the first place, this is the level am at right now, am a fast paced learner and would be glad to serve as an intern in your company as I believe I'll learn the most amazing things yet.
