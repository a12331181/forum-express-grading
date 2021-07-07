'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments',
      ['這道菜牛逼', '絕世美味', '難吃到爆', '普普通通', '我做得都比你好吃', '優良店家', '吃起來像屎']
        .map((item, index) =>
          ({
            id: index * 10 + 1,
            text: item,
            UserId: Math.floor(Math.random() * 2) + 1,
            RestaurantId: Math.floor(Math.random() * 50) + 1 ,
            createdAt: new Date(),
            updatedAt: new Date()
          })
        ), {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {})
  }
};
