# Why a Healthy Master Branch is Important
_4/12/2020_

At Compass, I've been working moving our CI test suite over from running on Jenkins to CircleCI, a
result of our transition from Gerrit to Github for code review (or rather, we now are able to 
 since we completed that prerequisite -- but that's neither here nor there).

As such, I've been following our master build closely, and encouraging other developers working on
the repo to do so as well. We've setup notifications to warn developers when the test suite fails
while it's running on the master branch.

Considering that this is a monorepo with over 450 services, it's not surprising that the test suite
occasionally fails. And about half or those times, it's because of a non-deterministic test (aka
a flaky test, one that fails when you run it once, and without changing anything, it passes on the
second run).

I hate flaky tests. I really do. Especially as the "caretaker" of this test suite. I hate these 
flaky tests for a few reasons:
1. They ping me messages in the middle of the day, which is both distracting and upsetting.
2. They take time to investigate and clarify their cause.
3. They ruin the integrity of the build.

That last point is the doozy. Receiving the message in the middle of the day is upsetting and 
alarming. And taking the time to look sucks. But it's not a _huge_ deal, in the grand scheme of 
things. But to me, the worst part of a test suite with flaky tests is the distrust it creates in
that test suite. 

If your developers don't trust the build, and are used to seeing errors pop up which are remedied 
with a simple rerun, then they are less likely to pay attention to the alerts that the automated
test suite sends. And then, the bugs don't get addressed. It's the boy who cried wolf. They don't 
trust that there's an actual problem worth their attention, and then it takes more time for them
to be informed that there's something to be fixed when there is an actual problem. And it's my job
to babysit the thing and make sure developers are paying attention when there's an actual problem.
