# Tips for Performing Code Review
_4/26/2020_

Do code review. Why? I do it because:
- I learn different methods of writing code.
- I have a grasp of what is changing.
- I get practice reading code.
- I learn more about the code base.
- It helps my teammates. Not only get their code through the door, but improve it. And maybe catch
a bug.
- It earns me respect with fellow collaborators (_as long as I'm giving comments respectfully in 
turn_).
- I can influence code cleanliness 
([Uncle Bob's "Clean Code"](https://www.oreilly.com/library/view/clean-code/9780136083238/) is my 
bible).

I've performed a lot of code review during my 5 years as a software engineer and these are the tips
I've found helpful from my experience:
- *Ask that a pull request be kept small.* If you glance through the files comprising the pull 
request and think to yourself, "Do I have to do all this?", then there's a good change that pull
request is "too" big. Too big not only because it's a pain for you to review, but because large 
changes all happening at once are inherently more risky. I don't think it is ever impolite to _ask_ 
if a pull request be broken down ("ask" being important - refusing would just be abrasive. More on 
etiquette later)

- *Ask for a good commit message.*. Not just for your sake. But future generations. Including the 
code review owner. Inevitably, the history of why code was written will need to be looked at down
the line, and it's helpful to have a good commit message that outlines _what_ was done, and more
importantly, _why_ the change was made.

- *Ask "Where are the tests?"* One of the first things I look for are tests included with the 
change. This may not apply to everyone, but I think most organizations want good unit tests to 
support their production code. And most organizations will want unit tests with every change.
This is a whole separate discussion, but for most organizations, ensuring that each pull request
has at least one test for the change is helpful. And a simple reminder to the owner can help, or 
maybe they had a good reason not to include tests (which is why I always word it: "Should there be
tests?"). In addition to the existence of tests, you can check that the proper code paths are 
tested (again, a whole separate topic that could be debated).

- *Understand the code.* Seemingly obvious, but really take the time to go through it line-by-line. 
And ask questions if you don't understand the line (but first do some research on your own).

- *Understand the "why" at every line.* This is a little more interesting. You might know what is
happening, but why did they implement it this way? Why did they name the variable/function that way?
Does it make sense? Is there a better way? It's easy to overlook silly things as the implementer of 
code because you're so close to it. An extra set of eyes is always helpful.

- *Look for bugs at the "micro" level.* Make sure the line-by-line logic makes sense. This doesn't
require a knowledge of the codebase: anybody should be able to catch these types of problems. 
Should there be a null check? Does the if-statement behave correctly for all statements? Is there a 
return statement in the wrong place? If you find a problem like this, probably means there's a 
missing test case.

- *Look for bugs at the "macro" level.* This requires some knowledge of the codebase and the 
application. Check that what is being changed won't affect anything else negatively and makes sense. 
Ideally, there would be tests for these sorts of things, but often times these things don't even 
have tests because they aren't clearly "bugs". These are harder to think about and require you to 
stop and think about the application. Example: should we be removing this message once it's been 
read?

- *Read ["Clean Code"](https://www.oreilly.com/library/view/clean-code/9780136083238/).* It offers a 
lot of practices for writing maintainable code. These are subject to opinion, but I truly believe
the philosophies will result in code that is understandable and easier to work with. Most of my 
comments in code reviews derive from ideas in this book, and I highly recommend it to anyone who
writes code.

- *Practice good etiquette.* Code review can be a personal process, and criticism (constructive or 
not) can be difficult to digest. Help the code owner receive the suggestion by softening the 
request/comment, whether it's a fact or opinion. This could probably be an entirely separate topic,
 but here are a few ways I like to do this:
  - Framing the comments as a question."Maybe it would be better if...", 
  "What if this was done this way...", "Do you think it might be better if...". 
  - Don't make it personal. Don't say "I think you did this wrong...", "You could've done this 
  better by...", etc. Generally, leave out the word "you".
  - Only block a pull request if you think there will be a bug. Don't block pull requests for style
  preferences. 

I encourage EVERY developer to perform code review, _especially_ junior developers. Performing code 
review as a junior developer is a great way to learn and earn respect with senior developers. I know
many junior developers feel uncomfortable providing feedback (I know I was one of them), sometimes 
because of imposter  syndrome, but more often because they don't know enough to have an opinion or 
see anything that could or should be changed. Understandably so, but code review isn't all about 
finding a bug. Asking questions is my go-to when reviewing a codebase I'm unfamiliar with. Not only
does it help me learn, but it forces the pull request owner to think through an explanation for you,
which may lead to new insights or realizations.

Happy reviewing!
