/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DsButton {
    'color': 'primary' | 'secondary' | 'tertiary' |
    'warning' | 'success'   | 'danger';
    'disabled': boolean;
    'shape': 'square'  | 'rounded'   | 'pill';
    'size': 'small'   | 'default'   | 'large';
    'type': 'button'  | 'reset'     | 'submit';
  }
  interface DsTableBase {}
  interface DsTableChild {}
  interface DsTableHeader {}
  interface DsTableRow {}
}

declare global {


  interface HTMLDsButtonElement extends Components.DsButton, HTMLStencilElement {}
  var HTMLDsButtonElement: {
    prototype: HTMLDsButtonElement;
    new (): HTMLDsButtonElement;
  };

  interface HTMLDsTableBaseElement extends Components.DsTableBase, HTMLStencilElement {}
  var HTMLDsTableBaseElement: {
    prototype: HTMLDsTableBaseElement;
    new (): HTMLDsTableBaseElement;
  };

  interface HTMLDsTableChildElement extends Components.DsTableChild, HTMLStencilElement {}
  var HTMLDsTableChildElement: {
    prototype: HTMLDsTableChildElement;
    new (): HTMLDsTableChildElement;
  };

  interface HTMLDsTableHeaderElement extends Components.DsTableHeader, HTMLStencilElement {}
  var HTMLDsTableHeaderElement: {
    prototype: HTMLDsTableHeaderElement;
    new (): HTMLDsTableHeaderElement;
  };

  interface HTMLDsTableRowElement extends Components.DsTableRow, HTMLStencilElement {}
  var HTMLDsTableRowElement: {
    prototype: HTMLDsTableRowElement;
    new (): HTMLDsTableRowElement;
  };
  interface HTMLElementTagNameMap {
    'ds-button': HTMLDsButtonElement;
    'ds-table-base': HTMLDsTableBaseElement;
    'ds-table-child': HTMLDsTableChildElement;
    'ds-table-header': HTMLDsTableHeaderElement;
    'ds-table-row': HTMLDsTableRowElement;
  }
}

declare namespace LocalJSX {
  interface DsButton extends JSXBase.HTMLAttributes<HTMLDsButtonElement> {
    'color'?: 'primary' | 'secondary' | 'tertiary' |
    'warning' | 'success'   | 'danger';
    'disabled'?: boolean;
    'shape'?: 'square'  | 'rounded'   | 'pill';
    'size'?: 'small'   | 'default'   | 'large';
    'type'?: 'button'  | 'reset'     | 'submit';
  }
  interface DsTableBase extends JSXBase.HTMLAttributes<HTMLDsTableBaseElement> {}
  interface DsTableChild extends JSXBase.HTMLAttributes<HTMLDsTableChildElement> {}
  interface DsTableHeader extends JSXBase.HTMLAttributes<HTMLDsTableHeaderElement> {}
  interface DsTableRow extends JSXBase.HTMLAttributes<HTMLDsTableRowElement> {}

  interface IntrinsicElements {
    'ds-button': DsButton;
    'ds-table-base': DsTableBase;
    'ds-table-child': DsTableChild;
    'ds-table-header': DsTableHeader;
    'ds-table-row': DsTableRow;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


