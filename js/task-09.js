function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

<div class="widget">
  <p>
    Background color: <span class="color">-</span>
  </p>
  <button type="button" class="change-color">
    Change color
  </button>
</div>;
