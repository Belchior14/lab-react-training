import "./IdCard.css"

export function IdCard (props){
    return(
       <div className="mainContainer">
           <div className="ProfileImage">
            <img src={props.picture} alt={props.picture}/>
           </div>

           <div className="ProfileInfo">
               <p><b>First name:</b>{props.firstName}</p>
               <p><b>Last name:</b>{props.lastName}</p>
               <p><b>Gender:</b>{props.gender}</p>
               <p><b>Height:</b>{props.height}</p>
               <p><b>Birth:</b>{props.birth}</p>
           </div>
       </div>
    )
}