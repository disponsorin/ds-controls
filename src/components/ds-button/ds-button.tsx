import { Component, h, Prop, Host } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces'

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
  shadow: true
})
export class DsButton {
  @Prop({ reflectToAttr: true }) disabled: boolean;
  @Prop() type:   'button'  | 'reset'     | 'submit' = 'button';
  @Prop() color:  'primary' | 'secondary' | 'tertiary' | 
                  'warning' | 'success'   | 'danger' = 'primary';
  @Prop() shape:  'square'  | 'rounded'   | 'pill' = 'square';
  @Prop() size:   'small'   | 'default'   | 'large' = 'default';

  render() {
    const classMap = this.getCssClassMap();
    // const styleVar = {
    //   '--custom-accent': 'rgb(248, 157, 23)'
    // }
    // console.log(classMap)

    return (
      <Host disabled={this.disabled}>
        <button
          type={this.type}
          class={classMap}
          // style={styleVar}
          disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }

  private getCssClassMap(): CssClassMap {
    return {
      [this.color]: true,
      [this.shape]: true,
      'outlined': this.color === 'secondary' || this.color === 'tertiary' ? true : false,
      [this.size]: true
    };
  }
}