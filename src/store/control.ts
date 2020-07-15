import { GetterTree, MutationTree, ActionTree } from 'vuex'
import labelControl from '../models/labelControl.json'
import commandButtonControl from "../models/commandButtonControl.json";
export const state: any = {
    labelControl: labelControl,
    commandButtonControl: commandButtonControl


}


export const getters: GetterTree<any, any> = {
    getLabelControl: state => state.labelControl,
    getCommandButtonControl: state => state.commandButtonControl

}

export const mutations: MutationTree<any> =
{
    addUserForm: (state,userForm) =>  state.userForms = userForm

}

export const actions: ActionTree<any, any> = {


}



export const control = {
    state,
    getters,
    mutations,
    actions
}
