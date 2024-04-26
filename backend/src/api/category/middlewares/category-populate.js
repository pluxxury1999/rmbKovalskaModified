"use strict";

const populate = {
  subCategories: {
    fields: ["id"],
  },
  parentCategory: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In home-populate middleware.");

    ctx.query = {
      populate,
      ...ctx.query,
    };

    await next();
  };
};
