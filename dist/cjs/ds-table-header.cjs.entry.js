'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-cd05b502.js');

class DsTableHeader {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("th", { class: "table-header" }, __chunk_1.h("slot", null)));
    }
    static get style() { return ".table-header{background-color:#f3f5f7;border-bottom:1px solid #e4e9ed}"; }
}

exports.ds_table_header = DsTableHeader;
