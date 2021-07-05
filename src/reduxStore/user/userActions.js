export const NEW_USER='NEW_USER'



export const AddingNewUser=(data)=>{
const payload={
    name:data.name,
    email:data.email,
    url_image:data.url_image
}
    return{
        type:NEW_USER,
        payload
    }
}