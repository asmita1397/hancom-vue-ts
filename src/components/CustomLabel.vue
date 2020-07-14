<template>
  <div>
    <label
      v-if="control"
      :id="control.id"
      :key="control.id"
      :title="control.title"
      :tabindex="control.tabindex"
      :style="control.style"
      @mousedown="customInputClick($event)"
      :v-model="control.caption"
      :value="control.caption"
      :disabled="!control.enabled"
      @keyup.enter="trigger"
    >{{control.caption}}</label>
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