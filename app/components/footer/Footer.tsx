"use client";
import Link from "next/link";
import FooterList from "./FooterList";
import Container from "../Container";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { useRef } from "react";

const Footer = () => {


    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputRef.current?.value);
    }

    const Hline = () => {
        return (
            <div className="h-0.5 bg-slate-800 w-[20%] mb-2"/>
        )
    }

    return ( 
        <footer className="mt-16 bg-slate-900 ">
            <Container>
                <div className="flex flex-col items-center mb-6">
                <div className="flex flex-col md:flex-row mt-12">
            <FooterList>
                <h2 className="content-none">SHOP CATEGORY</h2>
                <Hline/>
                <ul className="text-slate-400">
                    <li><Link href='#'>Complete Packs</Link></li>
                    <li><Link href='#'>Widgets</Link></li>
                    <li><Link href='#'>Widgets Collection</Link></li>
                    <li><Link href='#'>Goals</Link></li>
                    <li><Link href='#'>Stream Alerts</Link></li>
                    <li><Link href='#'>Event Lists</Link></li>
                    <li><Link href='#'>Chat Overlays</Link></li>
                    <li><Link href='#'>Overlay Packs</Link></li>
                    <li><Link href='#'>Transitions</Link></li>
                    <li><Link href='#'>Webcan Frames</Link></li>
                    <li><Link href='#'>Profile Panels</Link></li>
                    <li><Link href='#'>Backgrounds</Link></li>
                    <li><Link href='#'>Intro Backgrounds</Link></li>
                </ul>
            </FooterList>
            <FooterList>
                <h2>SHOP CATEGORY</h2>
                <Hline/>
                <ul className="text-slate-400">
                    <li><Link href='#'>Contact Us</Link></li>
                    <li><Link href='#'>Returns & Exchanges</Link></li>
                    <li><Link href='#'>FAQs</Link></li>
                    <li><Link href='#'>Support</Link></li>
                </ul>
                <div className="mt-4">
                <h2>NEWSLETTER</h2>
                <Hline/>
                <p className="max-w-[300px] text-slate-400">Sign up for our newsletter to receive updates and exclusive offers</p>
                <form className="flex mt-2 gap-1">
                    <input type="email" placeholder="Email Address" ref={inputRef} className="px-2 py-1 w-48 focus:outline-indigo-600 text-slate-800"/>
                    <button onClick={handleSubscribe} className="bg-indigo-600 hover:bg-indigo-800 transition duration-500 px-4 py-1 text-white">Subscribe</button>
                </form>
                </div>
            </FooterList>
            <FooterList>
                <div>
                <h2 className="mb-2">ABOUT US</h2>
                <Hline/>
                <p className="text-slate-400 text-justify">At Scheming Animations, we are dedicated to providing the best quality and satisfaction for our customers. With a wide selection of products, we are a one stop shop to help you level up as a content creator</p>
                </div>
                <div className="mt-8">
                    <h2>Follow Us</h2>
                    <Hline/>
                    <div className="flex gap-2 text-slate-600">
                        <Link href="https://www.x.com" passHref={true} target="blank" ><AiFillTwitterCircle size={24}/></Link> 
                        <Link href="https://www.instagram.com" passHref={true} target="blank"><AiFillInstagram size={24}/></Link>
                    
                    </div>
                </div>
            </FooterList>
            <div>      
            </div>
            </div>
            <div>
            <p className="text-slate-400">&copy; { new Date().getFullYear() } Scheming Animations, All Rights Reserved</p>
            </div>
            </div>
            </Container>
        </footer>
     );
}
 
export default Footer;