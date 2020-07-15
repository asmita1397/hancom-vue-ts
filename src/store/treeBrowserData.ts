import { GetterTree, MutationTree, ActionTree } from 'vuex'
import treeUserFormData from '../models/treeUserFormData.json'
export const state: any = {
  treeBrowserData: treeUserFormData,
  useFormIdIndex: -1,
  controlIdIndex: -1
}


export const getters: GetterTree<any, any> = {
  getTreeBrowserData: state => state.treeBrowserData.userForms[0].userForms,
  getRoot: state => state,
  getUserFormIndex: state => state.useFormIdIndex,
  getControlIndex: state => state.controlIdIndex,
  getPrevControlIndex: state => state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controlZIndex,

  
}

export const mutations: MutationTree<any> =
{
  addtreeBrowserData: (state, userForm) => {
    state.treeBrowserData.userForms[0].userForms.push(userForm)
  },
  closeWindow: (state, userForm) => {
    const userFormIndex = state.treeBrowserData.userForms[0].userForms.findIndex((val: any) => val.id === userForm.id)
    state.treeBrowserData.userForms[0].userForms[userFormIndex].outerWindowStyle.container.display = "none";
  },
  userFormIndex: (state, userForm) => {
    state.useFormIdIndex = state.treeBrowserData.userForms[0].userForms.findIndex((val: any) => val.id === userForm.id)
  },
  controlIndex: (state, control) => {
    state.controlIdIndex = state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.findIndex((val: any) => val.id === control.id)
  },
  resizeStyle: (state, controlStyle) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.width = controlStyle.width
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.left = controlStyle.left
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.top = controlStyle.top
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.height = controlStyle.height
  },
  dragStyle: (state, controlStyle) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.left = controlStyle.left
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.top = controlStyle.top

  },
  addControl: (state, control) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls.push(control)
  },
  dragOuterWindow: (state, userForm) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].outerWindowStyle.container.top = userForm.top
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].outerWindowStyle.container.left = userForm.left

  },
  makeActive: (state, userFormZIndex) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].outerWindowStyle.container.zIndex = userFormZIndex.toString()
  },
  updatePrevControlIndex: (state) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controlZIndex += 1
  },
  updateControlIndex: (state, controlIndex) => {
    state.treeBrowserData.userForms[0].userForms[state.useFormIdIndex].controls[state.controlIdIndex].style.zIndex = controlIndex.toString()
  }


}



export const actions: ActionTree<any, any> = {


}



export const treeBrowserData = {
  state,
  getters,
  mutations,
  actions
}
