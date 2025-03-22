"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CSSProperties, ReactNode, useState } from 'react';
import { Button, Input, Textarea } from '@mui/joy';
import UserIcon from './userIcon';
import members, { Member } from './members';

import "./team.css";

const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";

function UserItem({name, title, description, short}: {name: string, title: string, short: string, description: ReactNode|string}) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`user-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
            <div className="ui-left">
                <UserIcon width={'8vh'} height={'8vh'} />
            </div>
            <div className="ui-right">
                <div className="name-title">
                    <div className="left-nametitle mobile-flex">
                        <UserIcon width='5vh' height='5vh' />
                    </div>
                    <div className="right-nametitle">
                        <span className='name'>{name}</span>
                        <span className='title'>{title}</span>
                    </div>
                </div>
                <p className='description'>{open ? <>{description}</> : <>{short}</>}
                <b> Read {open ? 'less' : 'more'}.</b></p>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
        
            <Navbar activePage='team' />
                <header className="header small-header">
                    <span className="higher">FreeForce Global a development and transformation company.</span>
                    <span className="lower">*Unless otherwise noted, all classes maximize interaction via role-plays, fishbowls, breakouts, and other individual and team exercises. All have options for sustainment as well as individual coaching</span>
                </header>
                <div className="page-content" style={{width:'100vw',padding:'8vh 40vh', margin: 'auto',background:'#dde1f1'}}>
                    <b>Mission Statement</b>
                    <span>Guided by integrity, expertise, and a commitment to excellence, we strive to be the catalyst for positive change in every person and organization we serve.</span>
                </div>
                <div className='page-content dual-center fill-on-mobile' style={{gap:'1.8vh', width: '75vw', margin: 'auto'}}>
                    <h1>Our Team</h1>
                    {members.map((member: Member, index: number) => (
                        <UserItem key={index} short={member.short} name={member.name} title={member.title} description={member.description} />
                    ))}
                </div>
            <Footer />
        </>
    );
}