<template>
  <div>
    <label
      v-if="control"
      :id="control.id"
      :key="control.id"
      :title="control.title"
      :tabindex="control.tabindex"
      :style="control.style"
      @mousedown.stop="customLabelClick"
      :v-model="control.caption"
      :value="control.caption"
      :disabled="!control.enabled"
      @keyup.enter="trigger"
    >{{control.caption}}</label>
  </div>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mutation, Getter } from "vuex-class";

@Component({})
export default class CustomLabel extends Vue {
  @Prop() private control!: object;
  @Prop() private modal!: object;

  @Getter getPrevControlIndex!: any;
  @Mutation userFormIndex!: Function;
  @Mutation updatePrevControlIndex!: Function;
  @Mutation controlIndex!: Function;
  @Mutation updateControlIndex!: Function



  customLabelClick() {
    console.log("clickd");
    this.userFormIndex(this.modal);
    this.controlIndex(this.control);
    this.updatePrevControlIndex();
    this.updateControlIndex(this.getPrevControlIndex);
  }
}
</script>