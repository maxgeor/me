const colors = [
  { bg: '#555380', text: '#f0f0ff', dark: '#cccde9' },
  { bg: '#497874', text: '#f0fffd', dark: '#c6dcda' },
];

function toRgb(color) {
  var rgbHex = color.match(/.{1,2}/g);
  var rgb = [
    parseInt(rgbHex[0], 16),
    parseInt(rgbHex[1], 16),
    parseInt(rgbHex[2], 16)
  ];
  return rgb;
}

function setColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const [r, g, b] = toRgb(color.text);
  const underlineColor = `rgba(${r}, ${g}, ${b}, 0.5)`;

  const body = document.querySelector("body");
  body.style.backgroundColor = color.bg;
  body.style.color = color.text;
  body.style.textDecorationColor = underlineColor;
}

setColor();