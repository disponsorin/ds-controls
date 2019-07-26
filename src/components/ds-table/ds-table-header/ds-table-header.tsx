import { Component, h } from '@stencil/core';


@Component({
  tag: 'ds-table-header',
  styleUrl: 'ds-table-header.scss',
  shadow: true
})
export class DsTableHeader {
  
  render() {
    return (
      <th class="table-header">
        <slot/>
      </th>
    );
  }
}