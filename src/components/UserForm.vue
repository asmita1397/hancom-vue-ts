<template>
  <div>
    <div v-bind:key="index" v-for="(modal,index) in getTreeBrowserData">
      <div
        :style="modal.outerWindowStyle.container"
        :ref="'outrWindowDrag'.concat(modal.name)"
        @mousedown="make(modal)"
        v-resize
      >
        <div :style="modal.outerWindowStyle.top" @mousedown="dragMouseDown($event,modal)">
          <span>Book1 {{modal.name}} (UserForm)</span>
          <OuterWindowButton :userForm="modal" />
        </div>

        <div :style="modal.innerWindowStyle.container" v-resize>
          <div :style="modal.innerWindowStyle.top">
            <span v-bind:class="{ rightToLeft: modal.rightToLeft}">{{modal.caption}}</span>
            <button
              :style="modal.innerWindowStyle.whatsThisButton"
              v-show="modal.whatsThisButton==='True'"
            >?</button>
            <img
              class="close"
              :style="modal.innerWindowStyle.closeButton"
              src="https://img.icons8.com/fluent/48/000000/close-window.png"
            />
          </div>
          <div
            :style="modal.innerWindowStyle.innerContainer"
            @click="createTool($event,modal)"
            @mouseup="handleMouseUp(modal.name)"
          >
            <drag-selector class="drag-selector" :ref="'dragselector'.concat(modal.name)">
              <UserFormControl :modal="modal" :ref="modal.name" />
            </drag-selector>
          </div>
        </div>
      </div>
    </div>
    <!--   <Dragable ref="child" /> -->
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation } from "vuex-class";
import UserFormControl from "./UserFormControl.vue";
import OuterWindowButton from "./OuterWindowButton.vue";
@Component({
  components: {
    UserFormControl,
    OuterWindowButton
  }
})
export default class UserForm extends Vue {
  selectedAreaStyle: any;
  modalName!: string;
  @Getter getTreeBrowserData!: Function;
  @Getter getLabelControl!: any;
  @Getter getCommandButtonControl!: any;
  @Getter selectedControl!: any;
  @Getter prevModalZIndex!: any;

  @Mutation userFormIndex!: Function;
  @Mutation addControl!: Function;
  @Mutation updateSelectedControl!: Function;
  @Mutation dragOuterWindow!: Function;
  @Mutation makeActive!: Function;
  @Mutation updatePrevModalZIndex!: any;
  positions: any = {
    clientX: "",
    clientY: "",
    movementX: 0,
    movementY: 0
  };

  mounted() {
    /* console.log(this.getLabelControl);
    console.log(this.getCommandButtonControl); */
    console.log(this.$refs);
  }
  make(modal: any): void {
    this.userFormIndex(modal);
    this.updatePrevModalZIndex()
    console.log("mak activ");

    this.makeActive(this.prevModalZIndex);
  }
  dragMouseDown(event: any, modal: any): void {
    this.userFormIndex(modal);
    console.log("dragging", modal.name);
    this.modalName = "outrWindowDrag".concat(modal.name);
    event.preventDefault();
    this.positions.clientX = event.clientX;
    this.positions.clientY = event.clientY;
    document.onmousemove = this.elementDrag;
    document.onmouseup = this.closeDragElement;
  }
  elementDrag(event: any): void {
    event.preventDefault();
    this.positions.movementX = this.positions.clientX - event.clientX;
    this.positions.movementY = this.positions.clientY - event.clientY;
    this.positions.clientX = event.clientX;
    this.positions.clientY = event.clientY;

    /*  console.log("------------------",this.$refs[this.modalName][0].offsetLeft-this.positions.movementX+"px") */
    const top =
      (this as any).$refs[this.modalName][0].offsetTop - this.positions.movementY + "px";
    const left =
       (this as any).$refs[this.modalName][0].offsetLeft -
      this.positions.movementX +
      "px";
    this.dragOuterWindow({ top: top, left: left });
  }
  closeDragElement(): void {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  createTool(e: any, modal: any) {
    this.userFormIndex(modal);
    if (this.selectedControl === "label") {
      console.log("labl");
      const tool = {
        ...this.getLabelControl,
        id: modal.controls.length + 1,
        name: "Label".concat(modal.controls.length + 1),
        caption: "Label".concat(modal.controls.length + 1),
        style: {
          ...this.getLabelControl.style,
          left:
            this.selectedAreaStyle.width === "0px"
              ? `${e.offsetX}px`
              : this.selectedAreaStyle.left,
          top:
            this.selectedAreaStyle.width === "0px"
              ? `${e.offsetY}px`
              : this.selectedAreaStyle.top,
          width:
            this.selectedAreaStyle.width === "0px"
              ? this.getLabelControl.style.width
              : this.selectedAreaStyle.width,
          height:
            this.selectedAreaStyle.height === "0px"
              ? this.getLabelControl.style.height
              : this.selectedAreaStyle.height
        }
      };

      console.log("tool", tool);
      this.addControl(tool);
    } else if (this.selectedControl === "commandbutton") {
      const tool = {
        ...this.getCommandButtonControl,
        id: modal.controls.length + 1,
        name: "CommandButton".concat(modal.controls.length + 1),
        caption: "CommandButton".concat(modal.controls.length + 1),
        style: {
          ...this.getCommandButtonControl.style,
          left:
            this.selectedAreaStyle.width === "0px"
              ? `${e.offsetX}px`
              : this.selectedAreaStyle.left,
          top:
            this.selectedAreaStyle.width === "0px"
              ? `${e.offsetY}px`
              : this.selectedAreaStyle.top,
          width:
            this.selectedAreaStyle.width === "0px"
              ? this.getCommandButtonControl.style.width
              : this.selectedAreaStyle.width,
          height:
            this.selectedAreaStyle.height === "0px"
              ? this.getCommandButtonControl.style.height
              : this.selectedAreaStyle.height
        }
      };
      console.log("tool", tool);
      this.addControl(tool);
      
    }
    this.updateSelectedControl("select");
  }
  handleMouseUp(modal: string) {
    const dragRef = "dragselector".concat(modal);
    this.selectedAreaStyle = (this as any).$refs[dragRef][0].selectAreaStyle;
   
  }
}
</script>


<style scoped>
img {
  width: 24px;
}
.rightToLeft {
  float: right;
  padding-right: 45px;
}
</style>