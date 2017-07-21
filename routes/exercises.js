var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

router.get('/', function(req, res) {
  knex('exercise')
    .then(exercises => {
      res.json(exercises)
    });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;

  knex('exercise')
    .where('id', id).first()
    .then(exercise => {
      res.json(exercise)
    });
});

router.post('/', (req, res) => {
  let post = req.body;

  knex('exercise').insert(post)
    .returning('*')
    .then(exercise => {
      res.json(exercise);
    });
})

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let edit = req.body;

  knex('exercise').where('id', id)
    .update(edit)
    .returning('*')
    .then(edited => {
      res.json(edited);
    });
})

router.delete('/:id', (req, res) => {
  let id = req.params.id;

  knex('exercise')
    .where('id', id).del()
    .then(deleted => {
      res.json({
        message: 'Record Deleted!!',
        deleted: deleted
      });
    });
});

module.exports = router;
