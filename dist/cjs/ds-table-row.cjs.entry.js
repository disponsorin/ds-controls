'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-cd05b502.js');

class DsTableRow {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("tr", null, __chunk_1.h("slot", null)));
    }
    static get style() { return ""; }
}

exports.ds_table_row = DsTableRow;
