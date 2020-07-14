import { GetterTree, MutationTree, ActionTree } from 'vuex'
import userFromJson from '../models/userForm.json'
export const state: any = {
    userForms: userFromJson

}


export const getters: GetterTree<any, any> = {
    getUserForm: state => state.userForms
}

export const mutations: MutationTree<any> =
{
    addUserForm: (state,userForm) =>  state.userForms = userForm

}

export const actions: ActionTree<any, any> = {


}



export const userForms = {
    state,
    getters,
    mutations,
    actions
}
