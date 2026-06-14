function ProfileLogo(){
    return(
        <img src="./assets/logo.png" alt="My Profile Logo"/>
    )
}

function NavbarMenu(){
    return(
        <ul className="nav_menu">
            <li className="li_nav">About Me</li>
            <li className="li_nav">My Projects</li>
            <li className="li_nav">Contacts</li>
        </ul>
    )
}

function layoutNavbar(){
    return(
        <div className="flex flex-row gap-24">
        <ProfileLogo></ProfileLogo>
        <NavbarMenu></NavbarMenu>
        </div>
    )
}

export default function Navbar(){
    return layoutNavbar()
}