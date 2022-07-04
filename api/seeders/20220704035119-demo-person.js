'use strict';

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('People', [
         {
            name: 'John Doe',
            active: true,
            email: 'john@john.com',
            role: 'student',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            name: 'Mary Doe',
            active: true,
            email: 'mary@mary.com',
            role: 'teacher',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            name: 'Brenda Gomes',
            active: false,
            email: 'brenda@brenda.com',
            role: 'student',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            name: 'Pedro Soraia',
            active: true,
            email: 'soraia@soraia.com',
            role: 'principal',
            createdAt: new Date(),
            updatedAt: new Date()
         }
      ], {});
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('People', null, {});
   }
};
