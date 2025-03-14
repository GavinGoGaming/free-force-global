"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
                <header className="header small-header">
                    <span className="higher">FreeForce Global a development and transformation company.</span>
                    <span className="lower">*Unless otherwise noted, all classes maximize interaction via role-plays, fishbowls, breakouts, and other individual and team exercises. All have options for sustainment as well as individual coaching</span>
                </header>
                <div className='page-content'>
                    <h1>About</h1>
                    <p>FreeForce Global is a development and transformation company. We specialize in helping individuals and organizations reach their full potential through innovative training and coaching programs.</p>
                    <p>Our team is dedicated to providing the highest quality training and coaching services to our clients.</p>
                </div>
            <Footer />
        </>
    );
}