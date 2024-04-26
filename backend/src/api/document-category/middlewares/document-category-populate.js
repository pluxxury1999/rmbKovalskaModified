"use strict";

const populate = {
  documents: {
    populate: ["document"],
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
