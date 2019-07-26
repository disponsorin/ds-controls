import { r as registerInstance, h } from './chunk-1406d5f6.js';
var DsTableRow = /** @class */ (function () {
    function DsTableRow(hostRef) {
        registerInstance(this, hostRef);
    }
    DsTableRow.prototype.render = function () {
        return (h("tr", null, h("slot", null)));
    };
    Object.defineProperty(DsTableRow, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return DsTableRow;
}());
export { DsTableRow as ds_table_row };
