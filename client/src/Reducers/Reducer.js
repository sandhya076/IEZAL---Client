const reducers = (Forms = [],action) => {
    switch(action.type){
        case "DELETE" :
             return Forms.filter(
                 (Form) => Form._id !== action.payload 
             );
        case "UPDATE" :
            return Forms.map(
                (Form) => Form._id === action.payload._id? action.payload : Form
            );
        case "FETCH_ALL" :
            return action.payload ;
        case "CREATE" :
            return [...Forms,action.payload] ;
        default :
            return Forms;
     }

     
     
}
export default reducers ;             