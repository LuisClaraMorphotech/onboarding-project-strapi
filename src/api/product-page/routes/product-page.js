'use strict';

/**
 * product-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product-page.product-page', {
    config: {
      find: {
        middlewares: ["api::product-page.product-populate"],
      },
      findOne: {
        middlewares: ["api::product-page.product-populate"],
      },
    },
  });
