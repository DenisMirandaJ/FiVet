'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Personas', [{
    nombre: 'Diego Urrutia Astorga',
    rut: '130144918',
    email: 'durrutia@ucn.cl',
    telefono: '+569 8392 0265',
    direccion: 'Angamos #0610',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
   }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Personas', null, {});
  }
};
