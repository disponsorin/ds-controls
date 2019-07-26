'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-cd05b502.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["ds-button.cjs",[[1,"ds-button",{"disabled":[516],"type":[1],"color":[1],"shape":[1],"size":[1]}]]],["ds-table-base.cjs",[[1,"ds-table-base"]]],["ds-table-child.cjs",[[1,"ds-table-child"]]],["ds-table-header.cjs",[[1,"ds-table-header"]]],["ds-table-row.cjs",[[1,"ds-table-row"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
