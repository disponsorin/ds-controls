import { r as registerInstance, h } from './chunk-1406d5f6.js';
var DsTableChild = /** @class */ (function () {
    function DsTableChild(hostRef) {
        registerInstance(this, hostRef);
    }
    DsTableChild.prototype.render = function () {
        return (h("td", null, h("slot", null)));
    };
    Object.defineProperty(DsTableChild, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return DsTableChild;
}());
export { DsTableChild as ds_table_child };
