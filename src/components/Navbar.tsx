import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-between align-items-center navbar">
                <div>
                    <a style={{ fontWeight: "700", fontSize: "27px" }} className='font-weight-bold text-decoration-none ps-4' href="/">
                        <span style={{ color: "#0188F3" }}>Yamak</span>
                        <span style={{ color: "#414756" }} className=''>.ai</span>
                    </a>
                </div>
                <div className='d-flex align-items-center'>
                    <ul className='list-inline mobile-navbar'>
                        <li className='pe-4'><a href="/">Home</a></li>
                        <li className='pe-4'><a href="/">Marketing</a></li>
                        <li className='pe-4'><a className='active' href="/">Social Media</a></li>
                        <li className='pe-4'><a href="/">Sales Copy</a></li>
                        <li className='pe-4'><a href="/">Blogs</a></li>
                        <li className='pe-4'><a href="/">Others</a></li>
                    </ul>
                    <div className='me-4'>
                        <span style={{ position: "relative" }}>
                            <AiOutlineReload style={{ fontSize: "26px", color: "#414756", transform: "rotate(110deg)" }} />
                            <span style={{ position: "absolute", padding: "3px", borderRadius: "50%", backgroundColor: "#7FC3F9", fontSize: "10px", right: "-8px", top: "-7px" }}>50</span>
                        </span>
                    </div>
                    <div className='me-4'>
                        <span style={{ padding: "10px", borderRadius: "90px", backgroundColor: "#7FC3F9" }}>
                            <FaUserAlt style={{ fontSize: "18px", color: "#414756" }} /></span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;