import { r as registerInstance, h, H as Host } from './chunk-1406d5f6.js';

class DsButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { disabled: this.disabled }, h("button", { type: this.type, class: classMap,
            // style={styleVar}
            disabled: this.disabled }, h("slot", null))));
    }
    getCssClassMap() {
        return {
            [this.color]: true,
            [this.shape]: true,
            'outlined': this.color === 'secondary' || this.color === 'tertiary' ? true : false,
            [this.size]: true
        };
    }
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host([disabled]){pointer-events:none}button{background-color:#4527a0;border:none;cursor:pointer;color:#fff;font-family:Open Sans,Helvetica Neue,Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;padding:4px 12px;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;-webkit-transition:background-color .1s ease-in-out,-webkit-box-shadow .1s ease-in-out;transition:background-color .1s ease-in-out,-webkit-box-shadow .1s ease-in-out;transition:box-shadow .1s ease-in-out,background-color .1s ease-in-out;transition:box-shadow .1s ease-in-out,background-color .1s ease-in-out,-webkit-box-shadow .1s ease-in-out}button:hover{background-color:#7e57c2;-webkit-box-shadow:0 9px 15px -8px rgba(0,0,0,.35);box-shadow:0 9px 15px -8px rgba(0,0,0,.35)}button:active{background-color:#7e57c2;-webkit-box-shadow:0 6px 20px -3px rgba(0,0,0,.35);box-shadow:0 6px 20px -3px rgba(0,0,0,.35)}button:disabled{opacity:.4}button:focus{outline:none}button.rounded{border-radius:5px}button.pill{border-radius:50px}button.outlined{-webkit-transition:border .1s ease-in-out,color .1s ease-in-out,background-color .1s ease-in,-webkit-box-shadow .1s ease-in-out;transition:border .1s ease-in-out,color .1s ease-in-out,background-color .1s ease-in,-webkit-box-shadow .1s ease-in-out;transition:border .1s ease-in-out,box-shadow .1s ease-in-out,color .1s ease-in-out,background-color .1s ease-in;transition:border .1s ease-in-out,box-shadow .1s ease-in-out,color .1s ease-in-out,background-color .1s ease-in,-webkit-box-shadow .1s ease-in-out}button.outlined:hover{color:#fff;background-color:#7e57c2;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;border:1px solid #7e57c2}button.outlined:active{color:#fff;background-color:#7e57c2;-webkit-box-shadow:0 6px 20px -3px rgba(0,0,0,.35);box-shadow:0 6px 20px -3px rgba(0,0,0,.35)}button.secondary{border:1px solid #4527a0}button.secondary,button.tertiary{background-color:transparent;color:#4527a0}button.tertiary{border:1px solid transparent}button.warning{background-color:#fdc505;color:rgba(0,0,0,.8)}button.warning:hover{background-color:#ffd600}button.warning:active{background-color:#ffea00}button.success{background-color:#17c894;color:#fff}button.small{padding:2px 8px;font-size:12px}button.large{padding:10px 20px;font-size:1.125rem}"; }
}

export { DsButton as ds_button };
