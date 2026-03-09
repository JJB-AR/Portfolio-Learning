export function createItem(imgSrc, title, description, altText, languages = [], container = null) {
  if (!container) container = document.querySelector(".container");
  if (!container) return;

  const langBarHTML = languages.length
    ? `<div class="lang-bar">
        ${languages.map(l => `<span class="lang-bar-segment" style="width:${l.percent}%;background:${l.color};" title="${l.name} ${l.percent}%"></span>`).join("")}
       </div>
       <div class="lang-legend">
        ${languages.map(l => `<span class="lang-entry"><span class="lang-dot" style="background:${l.color};"></span>${l.name} ${l.percent}%</span>`).join("")}
       </div>`
    : "";

  const item = document.createElement("div");
  item.className = "github-item";
  item.innerHTML = `
    <div class="image-area"><img src="${imgSrc}" alt="${altText}"></div>
    <div class="text-area">
      <p>${title}</p>
      <p>${description}</p>
      ${langBarHTML}
    </div>
  `;
  container.appendChild(item);
}