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

### [A journey from Junior Developer to Technical Lead](https://medium.com/comparethemarket/a-journey-from-junior-developer-to-technical-lead-b1af4d2419fb)
You own your career, and each phase of your career has different challenges. Understanding your trajectory and what you need to succeed at each step is critical in personal and professional growth.

## Personal Development

### [How to Feel Progress](http://jkglei.com/progress/)
Feeling like you've made progress towards a worthy goal at the end of a day or week is critically important to moral and motivation. Understanding that context and learning some tools to break large tasks into small bite-sized ones are the first steps in feeling your progress.

## Programming

### [No Longer An Inspiration](http://www.gina.codes/2015/04/13/no-longer-an-inspiration)
My good friend Gina Maini's comments on the current state of women in the hacking community [trended \#1 on Hacker News](https://news.ycombinator.com/item?id=9381524) and inspired me to write my first post [Why We Hack]({% post_url /2015-11-29-why-we-hack %}).

### [Ship Small Diffs](https://blog.skyliner.io/ship-small-diffs-741308bec0d1#.1mrqc28up)
Why continuous deployment is important, how continuous integration affects your deployment process, and why it's important to help your reviewers with small changes.

### [Unlearning Toxic Behaviors in a Code Review Culture](https://medium.com/@sandya.sankarram/unlearning-toxic-behaviors-in-a-code-review-culture-b7c295452a3c)
What can you do to become a better code reviewer? There are certain toxic behaviors common in our industry when it comes to code reviews, but there is a simple checklist you can follow to make your reviews more positive, productive, and collaborative.

### [Run Less Software](https://blog.intercom.com/run-less-software/)
Engineering and Product teams need to focus on their core value prop in order to stay competitive. This means teams need to spend less time on technologies and tools that have a high overhead cost, but provide little direct value to the business. Knowing when to outsourcing these tools is a key indicator of a successful engineering team.

### [SOLID Principles](https://en.wikipedia.org/wiki/SOLID_%28object-oriented_design%29)
1. [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) - a class should have only a single responsibility (i.e. changes to only one part of the software's specification should be able to affect the specification of the class).
2. [Open/closed principle](https://en.wikipedia.org/wiki/Open/closed_principle) - "software entities ... should be open for extension, but closed for modification."
3. [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle) - "objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also design by contract.
4. [Interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle) - "many client-specific interfaces are better than one general-purpose interface."
5. [Dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle) - one should "depend upon abstractions, _not_ concretions."

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

## Learning Architectural Design Patterns

### 1. [Ports and Adaptors](http://alistair.cockburn.us/Hexagonal+architecture) by Alistair Cockburn
#### Intent
Allow an application to equally be driven by users, programs, automated test or batch scripts, and to be developed and tested in isolation from its eventual run-time devices and databases.

### 2. [Onion Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/) by Jeffrey Palermo
#### Intent
It emphasizes the use of interfaces for behavior contracts, and it forces the externalization of infrastructure.
#### Key Tenents
1. The application is built around an independent object model
2. Inner layers define interfaces.  Outer layers implement interfaces
3. Direction of coupling is toward the center
4. All application core code can be compiled and run separate from infrastructure

### 3. [Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html) by Bob Martin
An evolution of the Onion Architecture that emphasizes higher trust and truth in the center of your architecture, fanning out into layers of higher rates of change, connected together leveraging dependency inversion. It redefines the Onion Architecture in terms of _Entities_, _Use Cases_, _Interface Adaptors_, and _Frameworks & Drivers_.

## Testing

### [Five Factor Testing](https://www.devmynd.com/blog/five-factor-testing/)
Five reasons why testing is important. Good tests can:
1. Verify the code is working correctly
2. Prevent future regressions
3. Document the code's behavior
4. Provide design guidance
5. Support refactoring

### [Please don't mock me: and other test double advice](http://blog.testdouble.com/posts/2018-03-06-please-dont-mock-me)
A break down of some code smells when mocking and other testing tools are misused and mislead issues. A big takeaway is that functions should do or delegate, but never both.

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
