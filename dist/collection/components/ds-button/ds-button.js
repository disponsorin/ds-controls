import { h, Host } from '@stencil/core';
export class DsButton {
    constructor() {
        this.type = 'button';
        this.color = 'primary';
        this.shape = 'square';
        this.size = 'default';
    }
    render() {
        const classMap = this.getCssClassMap();
        // const styleVar = {
        //   '--custom-accent': 'rgb(248, 157, 23)'
        // }
        // console.log(classMap)
        return (h(Host, { disabled: this.disabled },
            h("button", { type: this.type, class: classMap, 
                // style={styleVar}
                disabled: this.disabled },
                h("slot", null))));
    }
    getCssClassMap() {
        return {
            [this.color]: true,
            [this.shape]: true,
            'outlined': this.color === 'secondary' || this.color === 'tertiary' ? true : false,
            [this.size]: true
        };
    }
    static get is() { return "ds-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["ds-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["ds-button.css"]
    }; }
    static get properties() { return {
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": true
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'button'  | 'reset'     | 'submit'",
                "resolved": "\"button\" | \"reset\" | \"submit\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'button'"
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'primary' | 'secondary' | 'tertiary' | \n                  'warning' | 'success'   | 'danger'",
                "resolved": "\"danger\" | \"primary\" | \"secondary\" | \"success\" | \"tertiary\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'primary'"
        },
        "shape": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'square'  | 'rounded'   | 'pill'",
                "resolved": "\"pill\" | \"rounded\" | \"square\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shape",
            "reflect": false,
            "defaultValue": "'square'"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'small'   | 'default'   | 'large'",
                "resolved": "\"default\" | \"large\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "'default'"
        }
    }; }
}
