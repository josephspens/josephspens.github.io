---
layout: page
title: Reading Material
permalink: /links/
---

## Leadership

### [How to run 1:1 meetings that work for 2](https://blog.intercom.com/high-impact-one-to-one-meetings/)
A comprehensive how-to in scheduling, planning, executing, and following up with productive 1:1s with your direct reports.

### [Senior Engineers Reduce Risk](https://hackernoon.com/senior-engineers-reduce-risk-5ab2adc13c97#.8qzvmcn25)
This is a really great article about what a senior engineer is and how they add value to companies of different sizes. It also covers culture and interviewing.

## Programming

### [No Longer An Inspiration](http://www.gina.codes/2015/04/13/no-longer-an-inspiration)
My good friend Gina Maini's comments on the current state of women in the hacking community [trended \#1 on Hacker News](https://news.ycombinator.com/item?id=9381524) and inspired me to write my first post [Why We Hack]({% post_url /2015-11-29-why-we-hack %}).

### [Ship Small Diffs](https://blog.skyliner.io/ship-small-diffs-741308bec0d1#.1mrqc28up)
Why continuous deployment is important, how continuous integration affects your deployment process, and why it's important to help your reviewers with small changes.

### [Five Factor Testing](https://www.devmynd.com/blog/five-factor-testing/)
Five reasons why testing is important. Good tests can:
1. Verify the code is working correctly
2. Prevent future regressions
3. Document the code's behavior
4. Provide design guidance
5. Support refactoring

## Architecture

### [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
A great React design pattern which separates presentational view-only React components and stateful Redux connectors. This affords reusability of React components, easy testing, and clear separation of concerns for simple maintainence.

### [React + Redux Architecture : Separation of Concerns](https://medium.com/prod-io/react-redux-architecture-part-1-separation-of-concerns-812da3b08b46)
Take an intermediary dive into arctitecting your client applications with React and Redux by applying _separation of concerns_. Both tools are unidirectional and promote immutability, configuring them correctly will create resiliant applications.

### [Five Things Every Developer Should Know About Software Architecture](https://www.infoq.com/articles/architecture-five-things)
1. Software architecture isn't about big design up front
2. Every software team needs to consider software architecture
3. The software architecture role is about coding, coaching and collaboration
4. You don't need to use UML
5. A good software architecture enables agility

### [Redux for Transactional Apps](https://youtu.be/V8oTJ8OZ5S0?t=18m54s)
At minute 36, Netflix engineer Jeff Shi talks about designing SPAs where the application and business data is maintained in Redux, so that the rest of the application is a lightweight UI reacting to state changes.

### [Don't Rewrite, React!](https://www.youtube.com/watch?v=BF58ZJ1ZQxY)
At React-Europe 2015, Ryan Florence describes an easy bottom-up approach to refactoring large applications with React. Very handy when you're staring down a large refactor and want to approach it with as little risk as possible.

## Performance

### [Jank Free](http://jankfree.org/)
This site is a collection of articles, presentations, and tutorials which outline UX and technical issues with perceived performance, and how to address them.

## JavaScript

### [Function Declarations vs. Function Expressions](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)
A good write up about variable and function hoisting, functional expressions and declarations, and the benefits of named functions.

## CSS

### [The Specificity Graph](http://csswizardry.com/2014/10/the-specificity-graph/)
Harry Robert's CSS Specificity Graph for managing the ordering of CSS rules to better compliment the cascade.

### [Side Effects In CSS](http://philipwalton.com/articles/side-effects-in-css/)
Highlighting pitfalls in CSS, identifying side effects in CSS and how to minimize them, along with reasons for architecting CSS.

### [Extending In Sass Without Creating A Mess](http://www.smashingmagazine.com/2015/05/extending-in-sass-without-mess/)
`@extend` in Sass is often misrepresented and underappreciated. Smashing Magazine answers the questions "what is `@extend`?" and "how do I use it efficiently?"

### [Classy CSS: a Programmatic Approach to Sass Stylesheets](http://una.im/classy-css)
Most people don't realize or acknowledge that CSS requires programmatic approaches with tools like Sass. Variables, DRY code, functional CSS. Make sure you check out links in the article including [Atomic OOBEMITSCSS](http://www.sitepoint.com/atomic-oobemitscss/).
