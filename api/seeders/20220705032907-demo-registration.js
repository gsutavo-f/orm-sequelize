'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Registrations', [
      {
        status: 'Canceled',
        studentId: 1,
        classId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Active',
        studentId: 3,
        classId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Active',
        studentId: 1,
        classId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Active',
        studentId: 3,
        classId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Registrations', null, {});
  }
};
