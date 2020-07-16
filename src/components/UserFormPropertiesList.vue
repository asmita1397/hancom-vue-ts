<template>
  <div>
    <div>
      <div class="sideheader">
        <span class="sideheader1">
          Properties - {{this.selectedUserForm&&this.selectedUserForm.name}}
          <button
            style="float:right"
          >
            <b>X</b>
          </button>
        </span>
      </div>
    </div>
    <div class="form-group">
      <label for="userForm"></label>
      <select
        class="form-control"
        name="selectedUserForm"
        id="selectedUserForm"
        v-model="selectedOption"
        @change="handleSelectedOption(selectedUserForm,selectedOption)"
      >
        <option
          :value="selectedUserForm"
          :selected="true"
        >{{ selectedUserForm.name }} {{selectedUserForm.type}}</option>
        <option v-for="control in selectedUserForm.controls" :value="control" :key="control.id">
          <b>{{ control.name }} {{control.type}}</b>
        </option>
      </select>

      <UserFormTable v-if="selectedOption.type==='UserForm'" :selectedUserForm="selectedUserForm" />
      <!--<LabelControlTable v-if="selectedOption.type==='Label'" :selectedUserForm="selectedOption" />
      <CommandButtonControl
        v-if="selectedOption.type==='CommandButton'"
        :selectedUserForm="selectedOption"
      />-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { EventBus } from "./event-bus.js";
import UserFormTable from "./UserFormTable.vue";
@Component({
  components: { UserFormTable }
})
export default class UserFormPropertiesList extends Vue {
  @Getter selectedUserForm!: any;

  selectedOption = "";

  mounted() {
    EventBus.$on("userFormClicked", (control: object, userForm: object) => {
      /* this.selectedOption = control;
      this.selectedUserForm = userForm; */
    });
  }

  handleSelectedOption(selectedUserForm: any, selectedOption: any) {
    console.log(this.selectedOption);
    EventBus.$emit("selectedControlOption", selectedUserForm, selectedOption);
  }
}


</script>


<style scoped>
.sideheader1 {
  top: 0%;
  width: 250px;
  background-color: rgb(142, 191, 231);
  margin-bottom: 8px;
}
.sideheader {
  height: 22px;
  text-align: left;
  padding: 0pc;
  background-color: rgb(142, 191, 231);
}
.form-control {
  float: left;
  width: 280px;
  cursor: pointer;
  background-color: white;
}
</style>