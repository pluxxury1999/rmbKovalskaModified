"use strict";

const { pop } = require("../../../../config/middlewares");

/**
 * `landing-page-populate` middleware
 */

const populate = {
  header: {
    populate: ["logo", "backgroundImg", "links"],
  },
  about: {
    populate: {
      list: {
        populate: {
          list: {
            populate: true,
          },
        },
      },
    },
  },
  documents: {
    populate: {
      documents: {
        populate: {
          categoryName: {
            populate: true,
          },
          // categoryContent: {
          //   populate: ["docTitle", "document"],
          // },
        },
      },
    },
  },
  footer: {
    populate: ["textBlock"],
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
