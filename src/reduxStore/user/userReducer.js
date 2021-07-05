import {NEW_USER} from './userActions'


const UserState={
name:'',
email:'',
url_image:''
}

export const userReducer=(state=UserState,action)=>{

    switch(action.type){
        case NEW_USER:
            return{
                ...state,
                name:action.payload.name,
                email:action.payload.email,
                url_image:action.payload.url_image
            }
        default:return state
    }
}