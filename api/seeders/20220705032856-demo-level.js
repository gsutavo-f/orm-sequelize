'use strict';

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Levels', [
         {
            description: 'Basic',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            description: 'Intermediate',
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            description: 'Advanced',
            createdAt: new Date(),
            updatedAt: new Date()
         }
      ], {});
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Levels', null, {});
   }
};
