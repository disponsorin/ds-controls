import { Component, h } from '@stencil/core';


@Component({
  tag: 'ds-table-child',
  styleUrl: 'ds-table-child.scss',
  shadow: true
})
export class DsTableChild {
  
  render() {
    return (
      <td>
        <slot/>
      </td>
    );
  }
}