<template>
  <div>
    <div :style="parent">
      <template>
        <vue-draggable-resizable
          :style="{zIndex:control.style.zIndex}"
          v-for="control in modal.controls"
          :key="control.id"
          :id="control.id"
          :w="parseInt(control.style.width)"
          :h="parseInt(control.style.height)"
          :x="parseInt(control.style.left)"
          :y="parseInt(control.style.top)"
          :parent="true"
          @resizing="(x,y,width,height)=>onResize(control,x,y,width,height)"
        >
          <CustomLabel v-if="control.type==='Label'" :control="control" :modal="modal" />
          <CustomButton v-if="control.type==='CommandButton'" :control="control" :modal="modal" />
        </vue-draggable-resizable>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CustomLabel from "./CustomLabel.vue";
import CustomButton from "./CustomButton.vue";
import VueDraggableResizable from "vue-draggable-resizable";

@Component({
  components: {
    CustomLabel,
    CustomButton,
    VueDraggableResizable
  }
})
export default class UserFormControl extends Vue {
  @Prop() modal!: object;
  parent: object = {
    width: "98%",
    height: "98%",
    position: "absolute",
    backgroundColor: ""
  };
 
  mounted() {
    console.log("mounted", this.modal);
  }
   onResize(control: object, x: number, y: number, width: number, height: number): void {
     console.log("jjjjjjjjjjjj")
    /*   control.style.width = `${width}px`;
      control.style.height = `${height}px`;
      control.style.left = `${x}px`;
      control.style.top = `${y}px`; */
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
