exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "exercise"; ALTER SEQUENCE exercise_id_seq RESTART WITH 7;')
    .then(function () {
      var exercises = [{
        id: 1,
        type: 'crunches',
        duration: 6,
        user_id: 1,
      }, {
        id: 2,
        type: 'squats',
        duration: 4,
        user_id: 2,
      }, {
        id: 3,
        type: 'jogging',
        duration: 20,
        user_id: 2,
      }, {
        id: 4,
        type: 'bench press',
        duration: 5,
        user_id: 1,
      }, {
        id: 5,
        type: 'pull ups',
        duration: 3,
        user_id: 2,
      }, {
        id: 6,
        type: 'sprints',
        duration: 10,
        user_id: 2,
      }, ];
      return knex('exercise').insert(exercises);
    });
};
