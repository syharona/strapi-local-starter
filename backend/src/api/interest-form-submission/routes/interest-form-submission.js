'use strict';

/**
 * interest-form-submission router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::interest-form-submission.interest-form-submission', {
    config: {
        create: {
          middlewares: ["api::interest-form-submission.isAcquereur"],
        },
        update: {
          middlewares: ["api::interest-form-submission.isAcquereur"],
        },
        delete: {
          middlewares: ["api::interest-form-submission.isAcquereur"] ,
        },
      },
});
