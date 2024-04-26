"use strict";

/**
 * document router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::document.document", {
  config: {
    find: {
      middlewares: ["api::document.document-populate"],
    },
    findOne: {
      middlewares: ["api::document.document-populate"],
    },
  },
});
