import { r as registerInstance, h } from './chunk-1406d5f6.js';
var DsTableHeader = /** @class */ (function () {
    function DsTableHeader(hostRef) {
        registerInstance(this, hostRef);
    }
    DsTableHeader.prototype.render = function () {
        return (h("th", { class: "table-header" }, h("slot", null)));
    };
    Object.defineProperty(DsTableHeader, "style", {
        get: function () { return ".table-header{background-color:#f3f5f7;border-bottom:1px solid #e4e9ed}"; },
        enumerable: true,
        configurable: true
    });
    return DsTableHeader;
}());
export { DsTableHeader as ds_table_header };
