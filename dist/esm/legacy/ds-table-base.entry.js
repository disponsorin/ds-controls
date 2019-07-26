import { r as registerInstance, h } from './chunk-1406d5f6.js';
var DsTableBase = /** @class */ (function () {
    function DsTableBase(hostRef) {
        registerInstance(this, hostRef);
    }
    DsTableBase.prototype.componentDidLoad = function () {
        // console.log(this.slot)
    };
    DsTableBase.prototype.render = function () {
        return (h("table", { class: "table-base" }, h("slot", null)));
    };
    Object.defineProperty(DsTableBase, "style", {
        get: function () { return ".table-base{display:table;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}"; },
        enumerable: true,
        configurable: true
    });
    return DsTableBase;
}());
export { DsTableBase as ds_table_base };
