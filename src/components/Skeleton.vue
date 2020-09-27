<template>
  <div class="skeleton" :style="_styles"></div>
</template>

<script>
export default {
  name: "Skeleton",
  props: {
    width: { type: [String, Number], default: "100%" },
    height: { type: [String, Number], default: 10 },
    margin: { type: [String, Number], default: 5 },
    corner: { type: [String, Number], default: 1 },
    theme: { type: String, default: "light" },
  },
  computed: {
    _styles() {
      return {
        width: this._width,
        height: this._height,
        margin: this._margin,
        borderRadius: this._corner,
        background: this._background,
      };
    },
    _width() {
      return this.isNumeric(this.width) ? this.width + "px" : this.width;
    },
    _height() {
      return this.isNumeric(this.height) ? this.height + "px" : this.height;
    },
    _margin() {
      return this.isNumeric(this.margin) ? this.margin + "px" : this.margin;
    },
    _corner() {
      return this.isNumeric(this.corner) ? this.corner + "px" : this.corner;
    },
    _background() {
      return this.theme === "dark" ? "rgba(255,255,255, 0.2)" : "#dddbdd";
    },
  },
  methods: {
    isNumeric(value) {
      return /^\d+$/.test(value);
    },
  },
};
</script>

<style>
.skeleton {
  position: relative;
  overflow: hidden;
}
.skeleton::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  animation: wave 1.3s linear 0.5s infinite;
}
@keyframes wave {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  65% {
    opacity: 1;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(100%);
  }
}
</style>