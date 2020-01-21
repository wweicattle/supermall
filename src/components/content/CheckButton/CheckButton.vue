<template>
  <div>
    <div class="icon-selector" :class="{'selector-active': value}" >
      <img src="~/assets/img/cart/tick.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    
  }
};
</script>

<style scoped>
.icon-selector {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #aaa;
}

.selector-active {
  background-color: var(--color-high-text);
  border-color: #aaa;
}
</style>
