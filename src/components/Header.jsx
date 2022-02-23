import logo from "../assets/Logo.svg"
function Header(props){
    
    return(
    <div className="header">
        <div className="menu">
        <img src={logo} alt="logo"/> 
        <button onClick={props.isOpenModal} className="bt-nav">Nova Trasação</button>
        </div>
    
    </div>
    )
}


export default Header