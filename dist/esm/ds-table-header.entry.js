import { r as registerInstance, h } from './chunk-1406d5f6.js';

class DsTableHeader {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("th", { class: "table-header" }, h("slot", null)));
    }
    static get style() { return ".table-header{background-color:#f3f5f7;border-bottom:1px solid #e4e9ed}"; }
}

export { DsTableHeader as ds_table_header };
