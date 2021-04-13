---
id: whatis
title: What's a Use Case?
sidebar_label: What's a Use Case?
slug: /usecase
---

// TODO

## Herbs Use Case

### Maintainability

"Programs must be written for people to read, and only incidentally for machines to execute" - Harold Abelson, Structure and Interpretation of Computer Programs

Understanding what a software is doing from a business perspective is a must in order to be able to change it quickly and in a sustainable way.

### Metadata for system intent

It should be easy to retrieve a system's metadata for all its use cases and steps. This info could be used to leverage innovative interfaces (ex: dynamic admin pages, use case documentations, etc), helping narrow the gap between developers, testers and product managers.

### Auditable and Secure

It should be easy to have enterprise grade features even for simple applications. Authorization and auditing, for instance, should be available out of the box. Not using should be opt-in.

## Concepts

Conceptually, a use case reflects a single action exposed by the Domain to the end user.

For exemple: _Reopen Ticket_, _Reply Message_, _Add User_

Internally a Use Case is responsible to control the interaction between entities, repositories and other domain components.

It should:

- Be modeled around business
- Be reusable
- Be testable
- Have clear acceptance criteria
- Use Ubiquitous language

From Clean Architecture book: "Use cases orchestrate the flow of data to and from the entities, and direct those entities to use their Critical Business Rules to achieve the goals of the use case." 

## Best pratices

- Keep it simple by telling stories
- Focus on value
- Build the use case in steps

### Architecture

- Implement business __flows__ using Use Cases.

  Ex: _Reply Message_ use case interacts with `Message`, `Ticket`, `User` and others entities in order to reply a message for a user
- Split the __flows__ in smaller steps
- Avoid implement __validations__ using Use Cases. Prefer Entities for validations
- Access Use Cases from outside the Domain

  Use cases are the "entry points" for the Domain layer, so it is the only accessible layer from outside the Domain.
- Don't access any other sublayer which belongs to Domain layer (Entities, etc) apart Use Case from outside Domain
- Name the Use Case folder, file and its steps  as an action (verb).

  Ex: `OpenTicket.js`, `ReplyMessage.js`, `AddUser.js`

  Use Cases are implemented as [command patterns](https://sourcemaking.com/design_patterns/command).

### References

- Clean Architecture book [link](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)
- Use Case 2.0 [link](https://www.ivarjacobson.com/sites/default/files/field_iji_file/article/use-case_2.0_final_rev3.pdf)
- Use Case diagram [link](http://www.agilemodeling.com/artifacts/useCaseDiagram.htm)
- Service Layer [link](https://martinfowler.com/eaaCatalog/serviceLayer.html)

----------------------------



We’ve already talked about the complexity of business rules and how we try to solve this with Herbs, but if you look closely you can see that at the center of the clean architecture concept, you’ll notice that * use cases * are at the center of everything, that's where the business rule is, along with the entities that guide and model the behavior of that system. Herbs was born from there, to try to describe complex business rules in an easy way for humans and machines to read.

Here we can see an example of a use case implemented with ** buchu **, one of the Herbs libs:

``` js
usecase("Add or Update an Item on a to-do List", {
        request: { listId: Number, item: Object },

        authorize: (user) => user.isAdmin ? Ok() : Err(),

        setup: (ctx) => ctx.di = Object.assign({}, dependency, injection),

        "Check if the Item is valid": step((ctx) => {
            const item = ctx.ret.item = new ctx.di.Item(ctx.req.item)
            return item.validate() // Ok or Error
        }),

        "Check if the List exists": step(async (ctx) => {
            const listRepo = new ctx.di.ListRepository(ctx.di)
            const list = await listRepo.first(ctx.req.listId)
            const hasList = (list != null)
            if (!hasList) { return Err("List does not exist. listId: " + ctx.req.listId) }
            return Ok()
        }),

        "Add or Update the Item": ifElse({

            "If the Item exists": step(async (ctx) => {
                const itemRepo = new ctx.di.ItemRepository(ctx.di)
                const item = await itemRepo.firstLike(ctx.req.item.name)
                const newItem = (item == null)
                if (!newItem) ctx.ret.item = item
                return Ok(newItem)
            }),

            "Then: Add a new Item to the List": step(async (ctx) => {
                const item = ctx.ret.item = new ctx.di.Item(ctx.req.item)
                const itemRepo = new ctx.di.ItemRepository(ctx.di)
                return await itemRepo.save(item) // Ok or Error
            }),

            "Else: Update Item on the List": step(async (ctx) => {
                const item = ctx.ret.item
                item.name = ctx.req.item.name
                item.position = ctx.req.item.position
                const itemRepo = new ctx.di.ItemRepository(ctx.di)
                return await itemRepo.save(item) // Ok or Error
            })
        })
    })
```

With just one method, you can generate documentation for that usecase:
``` js
console.log(uc.doc())
/*
 {
  type: 'use case',
  description: 'Add or Update an Item on a to-do List',
  steps: [
    {
      type: 'step',
      description: 'Check if the Item is valid',
      steps: null
    },
    {
      type: 'step',
      description: 'Check if the List exists',
      steps: null
    },
    {
      description: 'Add or Update the Item',
      type: 'if else',
      if: [Object],
      then: [Object],
      else: [Object]
    }
  ],
  request: { listId: [Function: Number], item: [Function: Object] }
}*/
```

And with another, you can audit it:

``` js
uc.audit()
/* {
  type: 'use case',
  description: 'Add or Update an Item on a to-do List',
  transactionId: 'c7702d26-aad2-4641-9bc3-409fc5a310f7',
  user: { user: 'John', id: '923b8b9a', isAdmin: true },
  authorized: true,
  return: Ok { value: { item: [Item] } },
  steps: [
    {
      type: 'step',
      description: 'Check if the Item is valid',
      return: [Ok],
      elapsedTime: 64400n
    },
    {
      type: 'step',
      description: 'Check if the List exists',
      return: [Ok],
      elapsedTime: 53700n
    },
    {
      type: 'if else',
      description: 'Add or Update the Item',
      returnIf: [Ok],
      returnThen: [Ok],
      elapsedTime: 119300n
    }
  ],
  elapsedTime: 802300n
}*/
```