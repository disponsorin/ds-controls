# ds-master-controls

Welcome! This is the official repository for Disponsorin Master Controls. After you've been granted access, you can pull this repository to modify and revise its content, or you may pull it as an NPM project using `npm install --save` or `yarn add`.


### Structure
---

Every component should:
1. Be built using **ONLY**  Web Components and is using StencilJS TS Convention,
2. Be put under the `/src/components/` directory
3. Has the suffix `ds-` on their registered component's name and folder name,
4. Contains **ONLY** one `TSX` file as their main source,
5. Is using `SCSS` as their styling stylesheet(s).


### Convention
---

This is a typical code structure of a Web Component-based components using StencilJS:

```jsx
import { Component, h } from '@stencil/core';

/*
* This is the @Component decorator, it functions as a shortcut to
* window.customElements.define() function, which in turn helps
* us register our customElement to the global window object.
*/

@Component({
  tag: 'ds-my-component', // Our component name
  styleUrl: 'ds-my-component.scss', // Cour component stylesheet
  shadow: true  // This is for ShadowRoot, which encapsulate our style.
})
export class DsMyComponent {

  render() {
    return (
      <Host>
        <div class="main-div">Hello world!</div>
      </Host>
    );
  }
}
```

In our SCSS file, we now can use: 

```css
:host {
  /* This is our ShadowRoot main style.*/

}

.main-div {
  /* This is the main-div style. Since this is a SASS file, you can just stack this inside the :host block.*/
}

```

For more information, you can browse these resources:
- https://stenciljs.com
- https://www.webcomponents.org