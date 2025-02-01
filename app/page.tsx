import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <nav className='nav'>
                <div className="logo">
                    <img className="symbol" src='/Logo-Icon.png' alt='logo1' />
                    <img className="logo-text" src='/Logo.png' alt='logo' />
                </div>
            </nav>
            <header className="header">

            </header>
        </div>
    );
}
