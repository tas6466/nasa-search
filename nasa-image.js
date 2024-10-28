import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.alt = '';
    this.owner = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        alt: { type: String },
        owner: { type: String }
    };
  }

  static get styles() {
    return [css`
    :host {
      display: inline-flex;
      height: 240px;
      width: 240px;
      margin: 8px;
      font-family: var(--ddd-font-primary);
      background-color: var(--ddd-theme-default-beaverBlue);
      font-weight: bold;
    }

    .image:hover{
      background-color: var(--ddd-theme-default-beaverBlue);
      opacity: 50%;
    }
    
    .image {
      display: inline-block;
    }

    .image div {
      max-width: 200px;
      font-size: 16px;
      font-weight: bold;
    }

    .image img {
      display: block;
      width: 200px;
      height: 200px;
    }
  `];
  }

  render() {
    return html`
    <div class="image">
        <img src="${this.source}"/>
        <div>${this.title}</div>
        <div>${this.owner}</div>
    </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);