import { Component, h } from '@stencil/core';


@Component({
  tag: 'ds-table-base',
  styleUrl: 'ds-table-base.scss',
  shadow: true
})
export class DsTableBase {

  componentDidLoad() {
    // console.log(this.slot)
  }

  render() {
    return (
      <table class="table-base">
        <slot/>
      </table>
    );
  }
}