let reducer = (state, action)=>{
    
    switch (action.type) {
        case 'SETDATA':
            
            return {...state, data:action.payload, loading:'false'}
            
    
        default:
            return state;
    }
}
export {reducer}