import {GetterTree, MutationTree, ActionTree} from 'vuex'
import treeUserFormData from '../models/treeUserFormData.json'
export const state: any = {
    treeBrowserData: treeUserFormData

}


export const getters: GetterTree<any,any>={
    getTreeBrowserData : state => state.treeBrowserData.userForms[0].userForms,
    getRoot : state => state
}

export const mutations: MutationTree<any>=
{
    addtreeBrowserData :(state,userForm)=>
      {
        state.treeBrowserData.userForms[0].userForms.push(userForm)
      },
      closeWindow: (state,userForm) =>
      {
        const userFormIndex = state.treeBrowserData.userForms[0].userForms.findIndex((val: any)=>val.id===userForm.id)
        state.treeBrowserData.userForms[0].userForms[userFormIndex].outerWindowStyle.container.display = "none";
      }
}



export const  actions: ActionTree<any,any> ={
  
 
}



export const treeBrowserData ={
    state,
    getters,
    mutations,
    actions
}
