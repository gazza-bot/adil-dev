import React from "react"

function ProfileLogo(){
    return(
        <div className="bg-amber-200 w-24 h-12"></div>
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

function LayoutNavbar(){
    return(
        <div className="px-4 py-2 flex justify-between w-full">
        <ProfileLogo></ProfileLogo>
        <NavbarMenu></NavbarMenu>
        </div>
    )
}

export default function Navbar(){
    return LayoutNavbar()
}