import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <header className="header">
                <div className="header-split">
                    <div className="left">
                        <span className="higher">Global Leaders in Business Transformation and Growth</span>
                        <span className="lower">At <b>FreeForce</b>, we believe true business transformation involves more than incremental changes. It's about deep, systemic shifts that lead to nonlinear growth. We partner with companies ready to embrace innovative ways of operating.</span>
                    </div>
                    <div className="right">
                        <img src="/Illustration.png" alt="header" width={500} height={500} />
                    </div>
                </div>
            </header>
            <div className="offerings">
                <h1>Our Offerings</h1>
                <div className="cards">
                    <div className="card">
                        <img src="/HomepageIcon0.png" alt="card1" />
                        <b>Sales Transformation</b>
                        <p>Tailoring processes that elevate your sales team to high performance.</p>
                    </div>
                    <div className="card">
                        <img src="/HomepageIcon1.png" alt="card2" />
                        <b>Technology Amplification</b>
                        <p>Leveraging AI and technology to enhance your business processes.</p>
                    </div>
                    <div className="card">
                        <img src="/HomepageIcon2.png" alt="card3" />
                        <b>Effective Communication</b>
                        <p>Training and support for impactful communication throughout your organization.</p>
                    </div>
                </div>
            </div>
            <div className="section-three">
                <div className="left">
                    <img src="/5031659 2.png" alt="section3" />
                </div>
                <div className="right">
                    <h1>Build lasting coaching relationships that drive real change and amplify success.</h1>
                    <p>Unlike other companies, we build ongoing coaching relationships, reinforcing new behaviors over time to ensure lasting success. If traditional methods aren't working for you, explore our testimonials and case studies. When you're ready for real change, we're here to evolve your business and amplify your success!</p>
                    <br />
                    <button className="green-info">
                        Learn More
                    </button>
                </div>
            </div>
            {/* <div className="clients">
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div> */}
            <Footer />
        </>
    );
}
