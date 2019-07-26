import { Component, h } from '@stencil/core';


@Component({
  tag: 'ds-table-row',
  styleUrl: 'ds-table-row.scss',
  shadow: true
})
export class DsTableRow {
  
  render() {
    return (
      <tr>
        <slot/>
      </tr>
    );
  }
}