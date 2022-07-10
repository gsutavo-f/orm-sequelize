'use strict';
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.addColumn('Classes', 'finalDate', {
         allowNull: true,
         type: Sequelize.DATEONLY,
         after: 'startDate'
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.removeColumn('Classes', 'finalDate');
   }
};