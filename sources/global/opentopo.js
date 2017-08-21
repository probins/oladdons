/**
 * OpenTopoMap http://opentopomap.org
 * EPSG:3857
 */
import XYZ from 'https://probins.github.io/oles/dist/source/xyz.js';

class OpenTopo extends XYZ {
  constructor() {
    super({
      url: 'https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png',
      attributions: 'Map base © OpenStreetMap-Contributors, SRTM © <a target="_blank" href="http://opentopomap.org/">OpenTopoMap</a> (CC-BY-SA)'
    });
  }
}

export default OpenTopo;
