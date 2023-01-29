---
layout: post
title: Proofs of Concept, Prototypes, and Productionization for Software Development
---

<p class="subtitle">
    Proofs of Concept, Prototypes, and Productionization are three phases of traditional software development (not targeting machine learning here) meant to layer your discovery methods. That discovery is meant to fail fast and provide context to future discovery.
</p>

## Proof of Concept

Proofs of Concept are quick attempts to validate or reject critical domain / enterprise business rules. You want to avoid anything that isn't directly related to the concept at hand. Any corners you can cut, cut them.

The goal is to narrow the scope of the concept as strictly as possible, with the intention of validating the concept as quickly as possible, while expanding the scope enough to instil confidence that you've sufficiently validated the concept.

## Prototype

Prototypes are quick attempts to validate or reject critical application business rules. Use cases are identified consisting of user journeys describing application business rules. If the proof of concept is validated, you next design a prototype to explore those application business rules.

Different users may have different use cases related to the same problem, which may require different application rules and by therefore different prototypes.

## Productionization

The productionization of application business rules is the implementation of those rules in a manner that satisfies some Service Level Agreement. This usually means leveraging more design patterns, architecture, and infrastructure.

The requirements detailed in the agreement are negotiated between you and your stakeholders, and those requirements indicate how users are expected to regularly interact with those application business rules.

## Example

You want to solve a problem with some datasets you own for a new prospective user. You initially aren't very confident that your datasets could solve the problem, so you initiate a **proof of concept** where the concept is the ability to extract information from your datasets relevant to the problem, and the proof is querying the dataset in postgres. The results of the query will tell you and your user whether or not your datasets can surface relevant domain knowledge.

If the proof of concept results come back, and both you and your user have used your datasets to validate domain rules, you next design a **prototype** to explore application rules to support the use case using your datasets. Different users may have different use cases related to the same problem, which may require different application rules and by therefore different prototypes.

In this situation our user is not technical and cannot use postgres directly, so a bespoke graphical interface is proposed. You and the user brainstorm simple and efficient steps they would take to engage with this interface in order to satisfy their use case, and you create a low cost prototype of that solution to validate the application rules you've identified. That prototype might be a series of static web pages, or even visual design mockups.

You receive feedback from your user that the prototype was a success, they are confident the user journey identified in the prototype yields results that satisfy their use cases. You and your user negotiate a Service Level Agreement that specifies the requirements that need to be met in order for their use case to be satisfied in a production environment. Your job is now to design and build software to **productionize** the application rules identified in the prototype and the domain rules identified in the proof of concept in a manner which can satisfy all of the requirements in the Service Level Agreement.

## Appendix

### Time Horizons

The value of each subsequent iteration increases, as well as the time it takes to reach and complete the iteration. It mimics the now/next/later product horizons.


### Mapping to Clean Architecture

This framework maps cleanly to Clean Architecture by providing a structured way to iterate through the software layers from the core entities to the infrastructure. The inner layers change infrequently, are the most expensive to change, but deliver the biggest impact to supporting use cases. You want to get that right before you build upon your foundation.