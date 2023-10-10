"use strict";

/**
 * `product-populate` middleware
 */

const populate = {
  metadata: {
    populate: {
      metaImage: {
        populate: true,
        fields: ["name", "alternativeText", "url"],
      },
    },
  },
  blocks: {
    populate: {
      card: {
        populate: {
          image: {
            fields: ["name", "alternativeText", "url"],
          },
          link: {
            populate: true,
          },
        },
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In product-populate middleware.");
    ctx.query = {
      populate,
      ...ctx.query,
    };
    console.log(ctx.query);
    await next();
  };
};
