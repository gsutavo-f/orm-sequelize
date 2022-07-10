'use strict';

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Classes', [
         {
            startDate: '2022-06-01',
            finalDate: '2022-08-01',
            levelId: 1,
            professorId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            startDate: '2022-05-01',
            finalDate: '2022-07-01',
            levelId: 2,
            professorId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            startDate: '2022-04-01',
            finalDate: '2022-06-01',
            levelId: 3,
            professorId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
         }
      ], {});
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Classes', null, {});
   }
};
