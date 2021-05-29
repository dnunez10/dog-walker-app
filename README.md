# Phase 3 Project

## Requirements

1. Access a Sqlite3 database using Active Record.
2. You should have a minimum of two models with a one to many relationship.
3. You should build out a simple **React** frontend to give your user 3 of the 4
   CRUD abilities for at least one of your resources. 
4. Use good OO design patterns. You should have separate classes for your
   models.

## Domain

You'll be building an dog walker app where a user can find walkers to walk their dog(s) for them.

## MVP User Stories
* a user can create a dog
* a user can choose which walker will walk a dog (walkers can be static and pre-seeded in the db)
* a user can change which walker will walk a dog
* a user can see a list of all dogs (and their walkers?)
* Bonus: a user can delete a dog

## Models

You'll start with a `Walker` model and `Dog`.  A `Walker` can have many `Dog`s and a `Dog` belongs to a `Walker`

## Migrations

Think about what attributes you'll want `Walker`s and `Dog`s to have. Which table will need a foreign key (id from another table) to show that it belongs to an instance from that model?

## Seeds

In your seed file, use loops and/or iterators to create several Walkers and Dogs. Make sure the that dogs belong to walkers!

## TEST!

Now's a good time to test your models, db, and associations.  Open a Pry instance with `rake console`.  Call ActiveRecord methods on your model classes.  Can you see all the Dogs?  All the Walkers?  Can you select one Walker and save it to a variable?  Can you execute the AR association method to see just the dogs that belong to one walker?  Don't forget the other side of the relationship; what can you call on a Dog instance to see it's Walker object?

## Getting Started with Rack

Clone down this repository. A basic Rack app is located in the `backend` folder.

First, cd into the `backend` folder and run `bundle install` in your backend
folder to install your gems.

The `app/application.rb` file has an example GET route. Replace this route with
routes for your project!

## Routes

Here are suggested RESTful routes that will handle requests from the frontend and execute the necessary CRU(D?) actions on the backend:

* `GET /dogs`  READ
* `POST /dogs` CREATE
* `PATCH /dogs/:id`  UPDATE
* `DELETE /dogs/:id` DELETE/DESTROY (Bonus!)

Since you'll want to show the assocation between a dog and its walker, you'll need to think about how to send walker data to the frontend as well.  Will `GET /dogs` also automatically include all the Walkers in its response in their own array? Or would it make sense to have a separate `GET /walkers` route? Will you keep walkers in their own array in state on the frontend?

**Start your server with:**

```sh
shotgun --port=9292
```

> **Note:** This will run your server on port
> [http://localhost:9292](http://localhost:9292).
> [shotgun](https://github.com/rtomayko/shotgun) is a ruby gem that will
> automatically reload your Rack server. You may still need to refresh your
> browser to see changes.

## MORE TESTING!

Use an app like Postman or Insomnia to send requests to your Rack server and examine the data you get back in the responses.  Is it what you expected? Can you imagine how you'll use it to create React components on the frontend?  Make sure to test all of your routes!

## Set up the Frontend

Your backend and your frontend should be in two different repositories. Create a
new repository in a separate folder with a React app for your frontend using
[create-react-app][].

### Fetch Example

Your React app should make fetch requests to your Rack backend! Here's an
example:

```js
fetch("http://localhost:9292/test")
  .then((res) => res.json())
  .then(console.log);
```

[create-react-app]: https://create-react-app.dev/docs/getting-started

## Thinking in React

Don't forget all of the good practices you learned in Phase 2!  Go through the steps outlined in Thinking in React in the React docs.
* Sketch out your UI (what will the app look like in browser)
* Draw nested boxes around your UI to help you identify the components you'll need
* Think about the component heirarchy
* Considering the data you'll be getting from your backend, which components will hold state? Which components will do the fetching?
* Map out state, where props will be passed down to which components, where callbacks will be passed down to event listeners.
* Start building your components!
* Will React Router help to conditionally render some components? Use it if it seems helpful. but it's not mandatory.

## After MVP: Stretch goals
* a user can see a list of Walkers with the total number of dogs they are walking
* a user can schedule an `Appointment` when a dog will be walked (will you be able to do this with 2 models or will you need to add more?  If so, what will the new relationships be?  What would you have to change?)
* a user can do a simple login as an `Owner`, and all dogs would then belong to both an `Owner` and a `Walker` (see the last bullet point for considerations)
