// 'use strict';

// /**
//  * main-page router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::main-page.main-page');

'use strict';
 
/**
 * page router
 */
 
// const { createCoreRouter } = require('@strapi/strapi').factories;
 
// module.exports = createCoreRouter('api::page.page');
 
 
const { createCoreRouter } = require('@strapi/strapi').factories;
 
module.exports = createCoreRouter('api::main-page.main-page', {
    config:{
       find:{
        middlewares: ['api::main-page.page-populate'],
       },
       findOne:{
        middlewares: ['api::main-page.page-populate'],
       }
    },
});