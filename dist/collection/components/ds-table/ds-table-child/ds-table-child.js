import { h } from '@stencil/core';
export class DsTableChild {
    render() {
        return (h("td", null,
            h("slot", null)));
    }
    static get is() { return "ds-table-child"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["ds-table-child.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ds-table-child.css"]
    }; }
}
