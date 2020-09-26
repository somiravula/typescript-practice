export function print(content, color = "") {
  if (color === "") {
    color = "black";
    if (content === "success") {
      color = "green";
    }

    if (content === "failure") {
      color = "red";
    }
  }
  const p = document.createElement("P");
  p.innerHTML = `<span style="color: ${color}">${content}</span>`;
  document.body.appendChild(p);
};