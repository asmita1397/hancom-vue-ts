import { GetterTree, MutationTree, ActionTree } from 'vuex'
import {userFormData} from '../models/UserFormData'
export const state: any = {
    userForms: userFormData

}


export const getters: GetterTree<any, any> = {
    getUserForm: state => state.userForms
}




export const userForms = {
    state,
    getters
}
