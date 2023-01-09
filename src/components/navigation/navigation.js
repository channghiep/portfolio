import React, { useEffect, useState } from "react"
// import "./navigation.css"
// Import library
import {Link} from "react-scroll"

const Navigation = () => {
    const [isActivated, setActive] = useState(false);
    const [scrolledDown, setScrollDown] = useState(false)
    const [atTop, setAtTop] = useState(true)

    //This will toggle burger button onClick
    const activateBurger = () => {
        setActive(!isActivated)
    }

    useEffect(()=>{
        let prevPos = window.scrollY; 
        
        function handleScroll(){
            const currentPos = window.scrollY
            if(currentPos > prevPos){
                setScrollDown(true)
            }else{
                setScrollDown(false)
            }
            prevPos = currentPos
            if(prevPos !== 0){
                setAtTop(false)
            }else{
    
                console.log(prevPos)
                setAtTop(true)
            }
        }
        window.addEventListener('scroll', handleScroll)
    },[])
    // console.log(scrolledDown)
    console.log(atTop)
    return(
        <div className="">
            <div className={`grid grid-cols-12 items-center w-full h-14  transition ease-out duration-500 fixed ${scrolledDown ? "-top-14" : `${atTop ? "" : "shadow-md bg-slate-900/90"}` }`}>
                <div className="col-span-11 md:col-span-9 ml-5">
                    <a className="text-textcolor" href="#">Brian</a>
                </div>
                <div className="">
                    <div className="md:hidden" onClick={activateBurger}>
                            <div className={`h-[1px] w-[20px] bg-textcolor2 transition ease-in duration-200 transform-gpu ${isActivated ? "steering-down" : "mb-[1.5px]"}`} ></div>
                            <div className={`h-[1px] w-[20px] bg-textcolor transition ease-in duration-200 transform-gpu ${isActivated ? "steering-up" : "mt-[1.5px]"}`}></div>
                    </div>
                    <ul className="hidden md:flex text-textcolor">
                        <li className="mx-2"><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                        <li className="mx-2"><Link to="menu" spy={true} smooth={true}>Menu</Link></li>
                        <li className="mx-2"><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                    </ul>
                    
                </div>
                
            </div>
            {/* <ul className={`nav-ul ${isActivated ? "nav-ul-opened" : "nav-ul-closed"}`}>
                        <li><Link onClick={activateBurger} activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                        <li><Link onClick={activateBurger} to="menu" spy={true} smooth={true}>Menu</Link></li>
                        <li><Link onClick={activateBurger} to="contact" spy={true} smooth={true}>Contact</Link></li>
            </ul> */}
        </div>
    )
}
export default Navigation