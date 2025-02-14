import logo from "../../assets/img/dtech/logo.svg"
import HeaderMenus from "./header-menus"

const Header2 = () => {
    return (
        <div>
            <div className="">
                <img src={logo} alt="" />
            </div>
            <div className="">
                <HeaderMenus/>
            </div>
        </div>
    )
}

export default Header2