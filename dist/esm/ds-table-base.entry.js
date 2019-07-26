import { r as registerInstance, h } from './chunk-1406d5f6.js';

class DsTableBase {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        // console.log(this.slot)
    }
    render() {
        return (h("table", { class: "table-base" }, h("slot", null)));
    }
    static get style() { return ".table-base{display:table;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}"; }
}

export { DsTableBase as ds_table_base };
