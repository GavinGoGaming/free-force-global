"use client";
import { useRouter } from "next/navigation";

function SocialButton({icon, link}: {icon: string, link: string}) {
    return (
        <a href={link} target="_blank" style={{height: '30px', width: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#ffffff25'}}>
            <i className={`${icon}`}></i>
        </a>
    );
}

export default function Footer() {
    const router = useRouter();
    function go(path: string) {
        return (e: any) => {
            router.push(path);
        }
    }
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/FFGlogo-2white.png"/>
                <div className="info">
                    <span>Copyright &#169; 2025 Free Force Global ltd.</span>
                    <span>All rights reserved</span>
                </div>
                <div className="socials">
                    <SocialButton icon="fab fa-facebook-f" link="https://www.facebook.com/"/>
                    <SocialButton icon="fab fa-instagram" link="https://www.instagram.com/"/>
                </div>
            </div>
            <div className="footer-right">
                <b>Company</b>
                <span onClick={go('/about')}>About us</span>
                <span onClick={go('/team')}>Team</span>
                <span onClick={go('/contact')}>Contact us</span>
                <span onClick={go('/courses')}>Courses</span>
            </div>
        </footer>
    );
}