/**
 * Common code for all projections: exports addProjection() which sets the def
 * on proj4 and then sets the transforms on ol.proj
 */

import proj from 'https://probins.github.io/oles/dist/proj.js';
import Projection from 'https://probins.github.io/oles/dist/proj/projection.js';
import proj4 from '../ext/proj4.js';

// FIXME should be optional
let projections = ['EPSG:4326', 'EPSG:3857'];

function addProjection(projCode, projDef) {
  if (projections.indexOf(projCode) === -1) {
    // add the projection to Proj4 defs
    proj4.defs(projCode, projDef);

    // add the projection object to ol.proj
    proj.addProjection(new Projection({
      code: projCode,
      units: 'm' // could be taken from proj4.defs
    }));

    projections.forEach(function(code) {
      // get transform functions from Proj4
      var proj4Transform = proj4(code, projCode);
      // ... and add to ol.proj
      proj.addCoordinateTransforms(code, projCode,
          proj4Transform.forward, proj4Transform.inverse);
    });
    projections.push(projCode);
  }
  return projCode;
}

export default {
  addProjection: addProjection
};
