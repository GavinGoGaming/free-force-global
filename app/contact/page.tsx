"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CSSProperties } from 'react';
import { Button, Input, Textarea } from '@mui/joy';

export default function Home() {
    return (
        <>
            <Navbar />
                <header className="header small-header">
                    <span className="higher">Contact Us</span>
                    <span className="lower">*Unless otherwise noted, all classes maximize interaction via role-plays, fishbowls, breakouts, and other individual and team exercises. All have options for sustainment as well as individual coaching</span>
                </header>
                <div className='page-content dual-center' style={{gap:'1.8vh', width: '60vw', margin: 'auto'}}>
                    <div className="simple-5050" style={{width: "calc(90% + 2vh)",'--gap': '1vh'} as CSSProperties}>
                        <div className="left">
                            <Input placeholder="Name" sx={{'--text': '"First name"'}} autoComplete='name' />
                        </div>
                        <div className="right">
                            <Input placeholder="Lastname" sx={{'--text': '"Last name"'}} autoComplete='name' />
                        </div>
                    </div>
                    <Input placeholder="yourmail@gmail.com" sx={{width:'calc(90% + 1vh)',marginRight:'1vh','--text': '"E-mail"'}} autoComplete='email' type={'email'} />
                    <Input placeholder="+1 (555) 000-0000" sx={{width:'calc(90% + 1vh)',marginRight:'1vh','--text': '"Phone"'}} autoComplete='tel' type={'tel'} />
                    <Textarea placeholder="Your message here..." minRows={4} sx={{width:'calc(90% + 1vh)',marginRight:'1vh','--text': '"Message"'}} />
                    <Button color={'success'} size="lg" sx={{alignSelf:'flex-end',marginRight:'5%'}}>Submit</Button>
                </div>
            <Footer />
        </>
    );
}