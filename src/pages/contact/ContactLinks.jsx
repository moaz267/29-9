import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function ContactLinks() {
    return (
    <div className="container">
        <div className="Contact_links">
            <NavLink to={"/contactUsForm"} className={"active"}>Contact Us Form</NavLink>
            <NavLink to={"/Email"}>Email</NavLink>
            <NavLink to={"/Phone"}>Phone</NavLink>
            <NavLink to={"/Location"}>Location</NavLink>
        </div>
    </div>
    );
}
