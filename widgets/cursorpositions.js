/**
 * Creates 2 OL mouseposition controls, one for lat/lons and one for
 * projected coordinates.
 *
 * Screen position determined by css in html file.
 */

import MousePosition from 'https://probins.github.io/oles/dist/control/mouseposition.js';
import olcoordinate from 'https://probins.github.io/oles/dist/coordinate.js';

// import template (exported string)
import tpl from './cursorpositions.htm.js';

// can be moved to common module
  // parse html
  let div = document.createElement('div');
  div.innerHTML = tpl;

  // import template(s)
  let templates = div.querySelectorAll('template');
//

let template = document.importNode(templates[0].content, true);
// only style, so can be added to head
document.head.appendChild(template);

export default {
  // cursorposition in LatLons
  latlons: new MousePosition({
    coordinateFormat: function(coordinate) {
      // 4 decimal places for latlons
      return `${olcoordinate.toStringHDMS(coordinate, 4)} (${olcoordinate.format(coordinate, '{y}, {x}', 4)})`;
    },
    projection: 'EPSG:4326',
    className: 'llcursor'
  }),

  // ... and in projected coords
  projected: new MousePosition({
    coordinateFormat: function(coordinate) {
      // no decimal places for projected coords
      return `projected: ${olcoordinate.format(coordinate, '{x}, {y}', 0)}`;
    },
    // set class to override OL default position/style
    className: 'llcursor projcursor'
  })
};
