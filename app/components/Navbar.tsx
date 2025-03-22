"use client";
import { useRouter } from "next/navigation";

export default function Navbar({activePage}: {activePage: string}) {
    const router = useRouter();
    function go(path: string) {
        return (e: any) => {
            router.push(path);
        }
    }
    return (
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
        </nav>
    );
}