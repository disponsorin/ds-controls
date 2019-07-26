import { h } from '@stencil/core';
export class DsTableHeader {
    render() {
        return (h("th", { class: "table-header" },
            h("slot", null)));
    }
    static get is() { return "ds-table-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["ds-table-header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ds-table-header.css"]
    }; }
}
