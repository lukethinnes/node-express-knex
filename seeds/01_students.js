
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Sam', phase: 6 },
        {name: 'Arielle', phase: 6},
        {name: 'Nate', phase: 6}
      ]);
    });
};
