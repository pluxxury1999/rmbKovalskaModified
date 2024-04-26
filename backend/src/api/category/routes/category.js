'use strict';

/**
 * category router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::category.category', {
    config: {
        find: {
            middlewares: ['api::category.category-populate'],
        },
        findOne: {
            middlewares: ['api::category.category-id-populate'],
        },
    }
});
