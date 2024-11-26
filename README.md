# Customizable Alert System

A simple guide to creating a customizable alert box using HTML, CSS, and JavaScript.

---

## Features
- Custom titles and messages.
- OK and Cancel buttons with callback functionality.
- Smooth fade-in and fade-out animations.

---

## Code Implementation

### HTML
```html
<div id="custom-alert" class="hidden">
  <div class="alert-content">
    <h2 id="alert-title">Alert Title</h2>
    <p id="alert-message">This is the message.</p>
    <div class="alert-buttons">
      <button id="alert-ok">OK</button>
      <button id="alert-cancel">Cancel</button>
    </div>
  </div>
</div>
