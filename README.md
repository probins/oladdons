### Modules extending OL code

A library/registry of addon modules for OL. Consists of:
* `ext`: external software as ES module: a full build of proj4js
* `projections`: standardised way of using proj4js in OL as a module rather than a global
* `sources`: tile-server and other sources, both global in scope and local, organised by country code; local ones generally use a local projection. These export a class.
* `widgets`: additional widgets/components which can be added as needed. These export one or more instances. Pending agreement on HTML Imports, any associated html file is wrapped in an export literal and stored in `*.htm.js`, so it can be imported as code.

`ext/proj4` is available both minified and unminified; the others are at present unminified. 

#### Use
Can be imported into your apps using `rawgit.com`. See https://github.com/probins/olexamples for some usage examples. ATM, this is experimental and there are no releases and so no CDN files. Once this library is more stable, a specific version of modules can be imported from `cdn.rawgit.com`.