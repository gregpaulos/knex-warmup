# Server Side Validation

## Standards

### Server Side: Validate User Input

- Redirects on success
- Re-renders on validation error
- Validates presence of a field
- Validates format of a field with a regex
- Validates uniqueness of a field with a query

## Objectives

- Explain what server side validation is
- Explain why server side validation is important
- Implement server side validation in Express

## What is Server Side Validation?

Server side validation is the process of a server using a defined set of rules to ensure user input from a client is correct, meaningful, and secure.

The rules to validate on a server can be as strict or lenient as the developer prefers, but remember to never trust user input sent from the client.

## Lesson

<iframe width="560" height="315" src="https://www.youtube.com/embed/0iNFgfbJXKQ" frameborder="0" allowfullscreen></iframe>

## Resources

- [Learn Article - Validation](https://learn.galvanize.com/content/gSchool/node-curriculum/master/Express/Validation.md)
- [Hapijs/Joi - Validation Library](https://github.com/hapijs/joi)
- [Regexr - Regex Testing & Practice](http://regexr.com/)




# CRUD

## Standards/Objectives

### Build a CRUD App w/ Single Resource

Includes migrations
Includes seeds

* Lists all records with GET /things
* Creates a record with POST /things
* Shows one record with GET /things/:id
* Updates a record with PUT /things/:id
* Deletes a record with DELETE /things/:id


## CRUD?

* CREATE => POST route
* READ => GET route
* UPDATE => PUT route
* DELETE => DELETE route
