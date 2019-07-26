export declare class DsButton {
    disabled: boolean;
    type: 'button' | 'reset' | 'submit';
    color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'success' | 'danger';
    shape: 'square' | 'rounded' | 'pill';
    size: 'small' | 'default' | 'large';
    render(): any;
    private getCssClassMap;
}
