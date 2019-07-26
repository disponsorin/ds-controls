import { a as patchEsm, b as bootstrapLazy } from './chunk-1406d5f6.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["ds-button", [[1, "ds-button", { "disabled": [516], "type": [1], "color": [1], "shape": [1], "size": [1] }]]], ["ds-table-base", [[1, "ds-table-base"]]], ["ds-table-child", [[1, "ds-table-child"]]], ["ds-table-header", [[1, "ds-table-header"]]], ["ds-table-row", [[1, "ds-table-row"]]]], options);
    });
};
export { defineCustomElements };
