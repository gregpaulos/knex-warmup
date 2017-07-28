var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

// Validations

// Keep bad data out of our database

// Check that input exists
// Check that input is the correct type
// Check that input is formatted properly

function validUser(user) {
  let validName = typeof user.name == 'string' && user.name.trim() != '';
  let validEmail = typeof user.email == 'string' && user.email.match(/([@])/g) != null;
  let validPassword = typeof user.password == 'string' && user.password.trim() != '' && user.password.length > 5;

  return validName && validEmail && validPassword;
}

function validId(req, res, next) {
  let id = req.params.id;

  if(!isNaN(id)) {
    return next();
  } else {
    res.json({message: 'Invalid ID paramater.'})
  }
}

router.get('/', function(req, res) {
  knex('user')
    .then(users => {
      res.json(users)
    });
});

router.get('/:id', validId, (req, res) => {
  let id = req.params.id;

  knex('user')
    .where('id', id).first()
    .then(user => {
      res.json(user);
    });
});

router.post('/', (req, res) => {
  let post = req.body;

  if (validUser(post)) {
    knex('user').insert(post)
      .returning('*')
      .then(user => {
        res.json(user);
      });
  } else {
    res.json({message: 'Invalid user input.'});
  }

});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let edit = req.body;

  knex('user').where('id', id)
    .update(edit)
    .returning('*')
    .then(edited => {
      res.json(edited);
    });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;

  knex('user')
    .where('id', id).del()
    .then(deleted => {
      res.json({
        message: 'Record Deleted!!',
        deleted: deleted
      });
    });
});





function validUser(user) {
  const hasName = typeof user.name == 'string' && user.name.trim() != '';
  const hasEmail = typeof user.email == 'string' && user.email.match(/([@])/g) != null;
  const hasPassword = typeof user.password == 'string' && user.password.trim() != '';
  return hasName && hasEmail && hasPassword;
}
//
// function validId(req, res, next) {
//   let id = req.params.id;
//
//   if(!isNaN(id)) {
//     return next();
//   } else {
//     res.json({message: 'Invalid ID'});
//   }
// }

module.exports = router;
