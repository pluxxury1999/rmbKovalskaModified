"use strict";

const populate = {
  document: {
    populate: true,
  },
  category: {
    populate: true,
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In document-populate middleware.");

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
