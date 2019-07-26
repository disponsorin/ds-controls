import { h } from '@stencil/core';
export class DsTableRow {
    render() {
        return (h("tr", null,
            h("slot", null)));
    }
    static get is() { return "ds-table-row"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["ds-table-row.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ds-table-row.css"]
    }; }
}
