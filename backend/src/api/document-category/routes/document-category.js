'use strict';

/**
 * document-category router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::document-category.document-category', {
    config:{
        find:{
         middlewares: ['api::document-category.document-category-populate'],
        },
        findOne:{
         middlewares: ['api::document-category.document-category-populate'],
        }
     },
});
