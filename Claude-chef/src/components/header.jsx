import chef from "./chef.png"

function Header(){
    return(
        <div className="chef-main">
            <img src={chef} alt="chef-icon" className="chef-image" />
      <p className="chef">Chef Claude</p>
    </div>
    )
}

export default Header