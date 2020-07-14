<template>
  <div>
    <button
      v-if="control"
      :id="control.id"
      :key="control.id"
      @mousedown="customInputClick()"
      :style="control.style"
      :title="control.title"
      :tabindex="control.tabindex"
      :v-model="control.caption"
      :value="control.caption"
      :disabled="!control.enabled"
      @keyup.enter="trigger"
    >{{control.caption}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    
  })
export default class CustomLabel extends Vue {
  @Prop() private control!: object;
  @Prop() private modal!: object;
}
</script>