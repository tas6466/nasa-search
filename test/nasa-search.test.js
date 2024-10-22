import { html, fixture, expect } from '@open-wc/testing';
import "../nasa-search.js";

describe("nasaSearch test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <nasa-search
        title="title"
      ></nasa-search>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
