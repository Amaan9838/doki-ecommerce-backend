'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

/**
 * product controller
 */
module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    // Get sorting parameter from query
    const sort = query.sort || '';

    // Map sorting options to Strapi's format
    let sortBy = {};
    switch (sort) {
      case 'name-asc':
        sortBy = { name: 'asc' };
        break;
      case 'name-desc':
        sortBy = { name: 'desc' };
        break;
      case 'price-asc':
        sortBy = { price: 'asc' };
        break;
      case 'price-desc':
        sortBy = { price: 'desc' };
        break;
      case 'date-asc':
        sortBy = { createdAt: 'asc' };
        break;
      case 'date-desc':
        sortBy = { createdAt: 'desc' };
        break;
      default:
        sortBy = {}; // No sorting
    }

    // Get the products with sorting
    const products = await strapi.db.query('api::product.product').findMany({
      where: query.filters || {},
      populate: query.populate || '*',
      orderBy: sortBy,
    });

    return products;
  },
}));
