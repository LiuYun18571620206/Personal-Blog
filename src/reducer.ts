interface actionTypes{
    type:string,
    value?:any
}
interface stateTypes{
    dynamic:boolean
}
function reducer(state:stateTypes,action:actionTypes){
switch(action.type){
    case 'REMOVEDYNAMIC':
    return {...state,dynamic:false};
    case 'VERIFICATION_CONTACT':
    return {...state,contact:{display:true}}
    default :
    throw new Error('未匹配reducer')
}
}
export default reducer