'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-cd05b502.js');

class DsTableBase {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        // console.log(this.slot)
    }
    render() {
        return (__chunk_1.h("table", { class: "table-base" }, __chunk_1.h("slot", null)));
    }
    static get style() { return ".table-base{display:table;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}"; }
}

exports.ds_table_base = DsTableBase;
