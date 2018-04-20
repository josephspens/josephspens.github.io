---
layout: post
title:  "Keep Your Framework Out Of My Application"
---
> Are they a javascript engineer or a jQuery engineer?

Ha! I made an obvious comment on a well established flaw in our industry. This is the same joke I always tell when someone brings up the subject of technical interviews for javascript developers. Many people used to enter our community with little background and experience in front end web development; sometimes they're a back end engineer, sometimes they're in marketing. With a lack of understanding in modern javascript frameworks and libraries, these budding front end-ians inevitably stumble upon jQuery, an answer to their prayers. It had everything you needed a web app to do... form validation and submission, AJAX, cool fully functional interfaces. It did all these things by abstracting the various native browser APIs into a single interface, and it was too good at it's job.

> Since we're already using jQuery for this, let's use jQuery for that.

Swing and a miss, keep those false equivalencies out of my code. Just because a library does one thing right doesn't mean it can build you an entire application. Engineers are now able to hack in functionality line after line until their feature works, then they move on. What they don't realize is this is some serious technical and architectural debt they're taking on. Like paying off student loans as a fry cook kind of serious. Eventually your team will grow, and you'll get some new hot shot front end engineer on board who will spend _way_ too long trying to make heads or tails of how this feature works. He/she is not used to the challenge, and they abruptly burst out

> We should rewrite it in ...

## Framework Engineers

Name a javascript MVC framework. It's the new jQuery. Modern day application frameworks have the same drawback:

> Are you a framework engineer or a language engineer?

People who learned to code with jQuery ride the jQuery train and can't get off because they never needed to learn the underlying language. jQuery is built on javascript. React is built on javascript. Angular is built on javascript. Yes, Angular _is_ built on javascript, TypeScript isn't its own thing, deal with it.

Engineers still reference their favorite MVC framework documentation like a bible. They may know it well, but what else do they know? Do they know _how_ this all works? Do they understand the framework design? They're generally good at reciting framework scripture, but can they explain its philosophy?

All too often frameworks have a very specific philosophy that is mostly designed for bootstrapping new applications. Migrating legacy code following another philosophy (or none at all) to a new framework is much more than renaming method calls. These situations generally require large rewrites and re-architecting that will require a deep understanding of the legacy code and the new framework.

Eventually you will find yourself in a position where you need to stretch a bit and solve a problem specific to you, but the framework won't be there to save you. Maybe they never considered this scenario and you have an opportunity to improve the framework. Maybe the authors of the framework made a conscious decision not to support your scenario, and you're left alone to find the best way forward. It is in these dire times that you need to rely on a solid understanding of the **underlying language**.

## Language Engineers

Ultimately, a framework is designed to solve a particular set of problems a particular way. By adopting a framework, you have identified many of the problems it has set out to solve, and you both understand and agree with its approach to solve them. That is as simple as it needs to be, and as simple as it should be. Write your application, include your framework code, but stay out of its way and let it do its thing. Don't start leveraging framework functionality to go above and beyond its original purpose and solve your domain specific problems. Use your own skills to solve these problems on your own taking advantage of the underlying language, or with another set of libraries.

This simple division forces you to recognize when it's appropriate to leverage a framework and when it isn't. You can then start to carve out code that is specific to your framework, and code that is specific to your business. That is respectively your framework logic and your business logic. When an engineer comes upon the framework code, whether they be experienced with the app or a new team member, they are much more likely to recognize boilerplate framework code. This makes maintainability so much easier since much of your code is heavily leveraging an open source framework with community driven design patterns. It then becomes obvious what is your business logic specific to your domain, and _that_ is what you need to focus on maintaining. The scope of code which requires your attention has immediately shrunk.

Don't be a framework engineer, be a language engineer.


> ***Update [4/20/18]*** - If you enjoyed this article, I recommend [Screaming Architecture](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html) by Uncle Bob Martin.
