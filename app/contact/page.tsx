"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CSSProperties, useState } from 'react';
import { Button, Input, Textarea } from '@mui/joy';

export default function Home() {
    const [nameInvalid, setNameInvalid] = useState(false);
    const [lastnameInvalid, setLastnameInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [messageInvalid, setMessageInvalid] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    function checkFields(what: string, input: string) {
        switch(what) {
            case 'name':
                setNameInvalid(input.length < 1);
                break;
            case 'lastname':
                setLastnameInvalid(input.length < 2);
                break;
            case 'email':
                setEmailInvalid(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input));
                break;
            case 'phone':
                setPhoneInvalid(!/^\+?\d{1,4}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(input));
                break;
            case 'message':
                setMessageInvalid(input.length < 10);
                break;
        }
    }

    function send() {
        if(
            !name ||
            !lastname ||
            !email ||
            !phone ||
            !message ||
            nameInvalid ||
            lastnameInvalid ||
            emailInvalid ||
            phoneInvalid ||
            messageInvalid
        ) {
            setEmailError('RPlease fill all fields correctly');
            return;
        }
        setEmailError(' Sending message...');
        const data = {
            name: name,
            lastname: lastname,
            email: email,
            phone: phone,
            message: message
        };
        setEmail('');
        setPhone('');
        setName('');
        setLastname('');
        setMessage('');
        fetch('/api/send-email', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    setEmailError('GYour message has been sent');
                } else {
                    setEmailError('RMessage failed to send');
                    setEmail(data.email);
                    setPhone(data.phone);
                    setName(data.name);
                    setLastname(data.lastname);
                    setMessage(data.message);
                }
            });
    }

    return (
        <>
            <Navbar activePage='contact' />
                <header className="header small-header">
                    <span className="higher">Contact Us</span>
                    <span className="lower">*Unless otherwise noted, all classes maximize interaction via role-plays, fishbowls, breakouts, and other individual and team exercises. All have options for sustainment as well as individual coaching</span>
                </header>
                <div className='page-content dual-center' style={{gap:'1.8vh', width: '60vw', margin: 'auto'}}>
                    <div className="simple-5050" style={{width: "calc(90% + 2vh)",minWidth:'200px','--gap': '1vh'} as CSSProperties}>
                        <div className="left">
                            <Input 
                                placeholder="Name" 
                                sx={{'--text': '"First name"'}} 
                                autoComplete='name'
                                value={name} 
                                onChange={(e) => {setName(e.target.value);checkFields('name', e.target.value);}}
                                color={nameInvalid ? 'danger' : 'neutral'}
                            />
                        </div>
                        <div className="right">
                            <Input 
                                placeholder="Lastname" 
                                sx={{'--text': '"Last name"'}} 
                                autoComplete='name' 
                                value={lastname} 
                                onChange={(e) => {setLastname(e.target.value);checkFields('lastname', e.target.value);}}
                                color={lastnameInvalid ? 'danger' : 'neutral'}
                            />
                        </div>
                    </div>
                    <Input 
                        placeholder="yourmail@gmail.com" 
                        sx={{width:'calc(90% + 1vh)',minWidth:'200px',marginRight:'1vh','--text': '"E-mail"'}} 
                        autoComplete='email' 
                        type={'email'} 
                        value={email} 
                        onChange={(e) => {setEmail(e.target.value);checkFields('email', e.target.value);}}
                        color={emailInvalid ? 'danger' : 'neutral'}
                    />
                    <Input 
                        placeholder="+1 (555) 000-0000" 
                        sx={{width:'calc(90% + 1vh)',minWidth:'200px',marginRight:'1vh','--text': '"Phone"'}} 
                        autoComplete='tel' 
                        type={'tel'} 
                        value={phone} 
                        onChange={(e) => {setPhone(e.target.value);checkFields('phone', e.target.value);}}
                        color={phoneInvalid ? 'danger' : 'neutral'}
                    />
                    <Textarea 
                        placeholder="Your message here..." 
                        minRows={4} 
                        sx={{width:'calc(90% + 1vh)',minWidth:'200px',marginRight:'1vh','--text': '"Message"'}} 
                        value={message} 
                        onChange={(e) => {setMessage(e.target.value);checkFields('message', e.target.value);}} 
                        color={messageInvalid ? 'danger' : 'neutral'}
                    />
                    <span style={{width:'calc(90% + 1vh)',minWidth:'200px',textAlign:'right',color:`${emailError.startsWith('R')?'red':(emailError.startsWith('G') ? 'green' : 'unset')}`}}>{emailError && emailError.substring(1)}</span>
                    <Button onClick={send} color={'success'} size="lg" sx={{alignSelf:'flex-end',marginRight:'5%'}}>Submit</Button>
                </div>
            <Footer />
        </>
    );
}