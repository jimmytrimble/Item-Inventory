/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE items RESTART IDENTITY CASCADE')
  await knex('items').insert([
    {item_name: 'Basketball', price: 14.99, image: 'https://target.scene7.com/is/image/Target/GUEST_20affc7e-e0d7-4eb6-a6f3-68d13520f8be?wid=488&hei=488&fmt=pjpeg', details: 'Ball is life.', item_id: 2},
    {item_name: 'ASICS Glideride', price: 104.99, image: 'https://believeintherun.com/wp-content/uploads/2022/05/asics-glideride-3-cover.jpg', details: 'The most comfortable running shoe out.', item_id: 1},
    {item_name: 'Lululemon Yoga Mat', price: 124.00, image: 'https://images.lululemon.com/is/image/lululemon/LU9AG9S_054144_4', details: 'Start your morning in style.', item_id: 3}
  ]);
};
