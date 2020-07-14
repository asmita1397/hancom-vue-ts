import { GetterTree, MutationTree, ActionTree } from 'vuex'
import userFromJson from '../models/userForm.json'
export const state: any = {
    selectedUserForm: {},
    selectedControl: "",
    prevModalZIndex: 5,
    selected: false
}


export const getters: GetterTree<any, any> = {
    selectedUserForm: state => state.selectedUserForm,
    selectedControl: state => state.selectedControl,
    prevModalZIndex: state => state.prevModalZIndex,
    selected: state => state.selected
}

export const mutations: MutationTree<any> =
{
    updatePrevModalZIndex: state => state.prevModalZIndex = state.prevModalZIndex + 1

}

export const actions: ActionTree<any, any> = {


}



export const globalProperty = {
    state,
    getters,
    mutations,
    actions
}
