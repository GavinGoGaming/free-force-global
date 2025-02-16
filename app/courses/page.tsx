"use client";
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary } from '@mui/joy';
import CourseSections from './courses';

export default function Home() {
    return (
        <div>
            <Navbar />
            <header className="header small-header">
                <span className="higher">FreeForce Global Course Offerings</span>
                <span className="lower">*Unless otherwise noted, all classes maximize interaction via role-plays, fishbowls, breakouts, and other individual and team exercises. All have options for sustainment as well as individual coaching</span>
            </header>
            <div className="section-three-courses-outer">
                <div className="section-three-courses">
                    <div className="left">
                        <div className="courses-label">
                            <strong>Sales Training</strong>
                            <br />
                            <span>
                                All aspects including relationship selling, account planning, prospecting, coaching for results, and ride along coaching for managers and team members
                                <br />
                                <br />
                            </span>
                            <strong>Leadership</strong>
                            <li>For new and existing managers as well as managers of managers</li>
                            <ul>
                                <li>The Non-Negotiable Proficiencies</li>
                                <ul>
                                    <li>The skills we have identified that are must-haves for any professional.<br />These include, but aren't limited to:</li>
                                    <ul>
                                        <li>Listening</li>
                                        <li>Energy &amp; Professional Presence (Own Your Story lives here)</li>
                                        <li>Storytelling - individual / corporate</li>
                                        <li>The ability to truly understand another person's POV</li>
                                        <li>Dealing with difficult personalities</li>
                                        <li>Understanding how Energy, Rhythm, and Flow impact - and can be harnessed - by individuals</li>
                                    </ul>
                                </ul>
                            </ul>
                            <br />
                            <strong>Recruiting and Team Development</strong>
                        </div>
                    </div>
                    <div className="right">
                        <img src="/5031659 2.png" alt="section3" />
                    </div>
                </div>
            </div>
            <div className="courses-section">
                <h1>Our Courses</h1>
                <CourseSections />
            </div>
            <Footer />
        </div>
    );
}