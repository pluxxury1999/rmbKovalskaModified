'use strict';
 
/**
 * `landing-page-populate` middleware
 */
 
const populate = {
 
  metadata: {
      populate: {
     
        fields: ["metaTitle","metaDescription"],
     
      }
  },
  heading: {
    populate: {
      fields: ["title","subtitle","logo","header_pict"],
      logo:{
        populate: true,
        fields: ["name","url","width","height","alternativeText","caption"],
      },
      header_pict:{
        populate: true,
        fields: ["name","url","width","height","alternativeText","caption"],
      },
      menu: {
        populate: true
      }
    },
   
  },
  about:{
    populate: {
      aboutitem: {
        populate: {
           item: {
              populate: true,
              fields: ["title","value"]
          }  
        }  
      },
     
    }
  },
  documents: {
    populate: true
  },
  contacts: {
    populate: true
  },
 
};
 
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
 
    ctx.query = {
      populate,
      ...ctx.query,
    }
 
    await next();
  };
};