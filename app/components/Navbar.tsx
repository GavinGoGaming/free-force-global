"use client";
import { Button, IconButton } from "@mui/joy";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar({activePage}: {activePage: string}) {
    const router = useRouter();
    function go(path: string) {
        return (e: any) => {
            router.push(path);
        }
    }

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <nav className='nav'>
            <div className="logo">
                <img className="symbol" src='/Logo-Icon.png' alt='logo1' />
                <img className="logo-text" src='/Logo.png' alt='logo' />
            </div>

            <div className="nav-items">
                <div onClick={go('/')} className={`nav-item ${activePage=='home'?'active':''}`}>Home</div>
                <div onClick={go('/courses')} className={`nav-item ${activePage=='courses'?'active':''}`}>Courses</div>
                <div onClick={go('/team')} className={`nav-item ${activePage=='team'?'active':''}`}>Team</div>
                <div onClick={go('/contact')} className={`nav-item ${activePage=='contact'?'active':''}`}>Contact</div>
            </div>
            <div className="mobile-flex">
                <IconButton onClick={()=>{setMenuOpen(!menuOpen)}} color="neutral" sx={{color: menuOpen?'black':'white',background:menuOpen?'#7171ec':'#4d4da0',right:'15px',position:'absolute',top:'15px'}} className="menu-btn">
                    <i className="fa-solid fa-bars"></i>
                </IconButton>
            </div>
        </nav>

        {menuOpen && 
            <div className="overlay-mobile-menu"></div>
        }

        {menuOpen && <div className="mobile-menu">
            <div onClick={go('/')} className={`nav-item ${activePage=='home'?'active':''}`}> <i className="fa-solid fa-home"></i> Home</div>
            <div onClick={go('/courses')} className={`nav-item ${activePage=='courses'?'active':''}`}><i className="fa-solid fa-scroll"></i> Courses</div>
            <div onClick={go('/team')} className={`nav-item ${activePage=='team'?'active':''}`}><i className="fa-solid fa-people-group"></i> Team</div>
            <div onClick={go('/contact')} className={`nav-item ${activePage=='contact'?'active':''}`}><i className="fa-solid fa-envelope"></i> Contact</div>
        </div>}
        </>
    );
}