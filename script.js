export function createItem(imgSrc, title, description, altText) {
  const container = document.querySelector(".container");
  if (!container) return;

  const item = document.createElement("div");
  item.className = "github-item";
  item.innerHTML = `
    <div class="image-area"><img src="${imgSrc}" alt="${altText}"></div>
    <div class="text-area">
      <p>${title}</p>
      <p>${description}</p>
    </div>
  `;
  container.appendChild(item);
}