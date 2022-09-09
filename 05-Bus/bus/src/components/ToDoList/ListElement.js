import ButtonDelete from "./ButtonDelete";

const ListElement = ({task, status, index, deleteTask}) => {
    let button;
    if(status !== "Deleted"){
        button = <ButtonDelete deleteTask={deleteTask} index={index} />;
    }    
    return(
        <li className={"list-group-item d-flex justify-content-between align-items-center " + status.toLowerCase()}>
            {task} 
            {button}
        </li>        
    );
}

export default ListElement