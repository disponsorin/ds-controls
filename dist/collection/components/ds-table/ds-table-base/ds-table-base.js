import { h } from '@stencil/core';
export class DsTableBase {
    componentDidLoad() {
        // console.log(this.slot)
    }
    render() {
        return (h("table", { class: "table-base" },
            h("slot", null)));
    }
    static get is() { return "ds-table-base"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["ds-table-base.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ds-table-base.css"]
    }; }
}
