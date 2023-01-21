import React, { useEffect, useState } from "react"
// import "./navigation.css"
// Import library
import {Link} from "react-scroll"

const Navigation = (props) => {
    const isActivated = props.isActivated;
    const setActive = props.setActive;
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
            <div className={`grid grid-cols-12 items-center w-full h-14 transition ease-out duration-500 fixed z-20 ${scrolledDown ? "-top-14" : `${atTop ? "" : `${isActivated ? "" : "shadow-md bg-slate-900/90"}`}` }`}>
                
                <div className="col-span-11 md:col-span-8 lg:col-span-9 ml-9">
                    <a className="text-textcolor" href="#">Brian</a>
                </div>

                <div className="">
                    <div className="md:hidden" onClick={activateBurger}>
                            <div className={`h-[1px] w-[20px] bg-textcolor transition ease-in duration-200 transform-gpu ${isActivated ? "steering-down" : "mb-[1.5px]"}`} ></div>
                            <div className={`h-[1px] w-[20px] bg-textcolor transition ease-in duration-200 transform-gpu ${isActivated ? "steering-up" : "mt-[1.5px]"}`}></div>
                    </div>
                    <ul className="hidden md:flex md:justify-center text-textcolor2">
                        <li className="mx-2"><Link activeClass="active" to="about" spy={true} smooth={true}><span class="text-textcolor">01.&nbsp;</span>About</Link></li>
                        <li className="mx-2"><Link to="experience" spy={true} smooth={true}><span class="text-textcolor">02.&nbsp;</span>Experience</Link></li>
                        <li className="mx-2"><Link to="work" spy={true} smooth={true}><span class="text-textcolor">03.&nbsp;</span>Work</Link></li>
                        <li className="mx-2"><Link to="contact" spy={true} smooth={true}><span class="text-textcolor">04.&nbsp;</span>Contact</Link></li>
                    </ul>
                    
                </div>
                
            </div>
            <ul className={`text-textcolor2 text-center bg-background3 m-0 p-0 nav-ul fixed z-10 h-screen right-0 pt-[100px] ${isActivated ? "w-1/2" : "w-0 overflow-hidden"}`}>
                        <li className="my-4"><Link onClick={activateBurger} activeClass="active" to="about" spy={true} smooth={true}><span class="text-textcolor">01.&nbsp;</span>About</Link></li>
                        <li className="my-4"><Link onClick={activateBurger} to="experience" spy={true} smooth={true}><span class="text-textcolor">02.&nbsp;</span>Experience</Link></li>
                        <li className="my-4"><Link onClick={activateBurger} to="work" spy={true} smooth={true}><span class="text-textcolor">03.&nbsp;</span>Work</Link></li>
                        <li className="my-4"><Link onClick={activateBurger} to="contact" spy={true} smooth={true}><span class="text-textcolor">04.&nbsp;</span>Contact</Link></li>
            </ul>
        </div>
    )
}
export default Navigation
