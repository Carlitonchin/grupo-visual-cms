'use strict';

/**
 * home-main service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-main.home-main');
