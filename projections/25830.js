/**
 * EPSG:25830
 * UTM zone 30 on ETRS
 */

import common from './common.js';
let projCode = common.addProjection(
  'EPSG:25830', // code
  '+proj=utm +zone=30 +ellps=GRS80 +units=m +no_defs' // def
);

export default {
  projCode: projCode
};
