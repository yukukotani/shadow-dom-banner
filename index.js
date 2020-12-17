import { html, render } from "uhtml";

const root = document.getElementById("ubie-banner");

if (root.attachShadow) {
  const width = parseInt(root.dataset.width);
  const shadow = root.attachShadow({ mode: "closed" });

  const onImageLoad = () => {
    const node = html.node`
    Powered by <a href="https://ubie.life" target="_blank" rel="noopener">Ubie, inc.<a/>
    `;
    render(shadow.getElementById("corp-link"), node);
  };

  const style = `
  a, a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: black;
  }
  .wrapper {
    width: ${width}px;
    padding: 8px;
    border: 1px solid black;
  }
  .app-img {
    width: inherit;
  }
  .corp-link {
    text-align: right;
  }
  .corp-link > a {
    text-decoration: underline;
    color: #cf4a7b;
  }
  `;

  const node = html.node`
  <style>${style}</style>
  <a class="app-link" href="https://ubie.app" target="_blank" rel="noopener">
    <div class="wrapper">
      <img class="app-img" src="https://ubie.app/img/ubie-logo-ja.png" onload=${onImageLoad} />
      <div id="corp-link" class="corp-link"></div>
    </div>
  </a>
  `;

  render(shadow, node);
}
