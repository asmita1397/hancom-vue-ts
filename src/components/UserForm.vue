<template>
  <div>
    <div v-bind:key="index" v-for="(modal,index) in getTreeBrowserData">
      <div
        :style="modal.outerWindowStyle.container"
        ref="outerWindowContainerRef"
        @mousedown="make(modal)"
        v-resize
      >
        <div :style="modal.outerWindowStyle.top" @mousedown="dragMouseDown($event,modal.id)">
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
            @mouseup="handleMouseUp(modal.name)"
            :style="modal.innerWindowStyle.innerContainer"
            @click="createTool($event,modal)"
          >
            <drag-selector
              class="drag-selector"
              :ref="'dragselector'.concat(modal.name)"
            >
              <UserFormControl :modal="modal" :ref="modal.name"  />
            </drag-selector>
          </div>
        </div>
      </div>
    </div>
  <!--   <Dragable ref="child" /> -->
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {State,Getter} from 'vuex-class';
import  UserFormControl  from "./UserFormControl.vue";
import OuterWindowButton from './OuterWindowButton.vue'
@Component({
  components: {
    UserFormControl,
    OuterWindowButton
  },
})
export default class UserForm extends Vue {
   @Getter getTreeBrowserData!: Function
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