import "./pro.css";
export default function Modal({x,y}){
    if(x){
        return(
            <div id="modal">
             <div id="modal2">
                 <h1 style={{color:y ? "red" : "green"}}>{y !=null ? y :" تم ادخال البيانات بشكل  صحيح"}</h1>
             </div>
            </div>
             );
    }else{
        return(<></>)
    }
  
}