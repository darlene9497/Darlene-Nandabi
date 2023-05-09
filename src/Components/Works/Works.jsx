import React from 'react'
import './Works.css'
import Fb from '../../img/fb.png'
import Ig from '../../img/ig.png'
import Git from '../../img/git.png'
import Yt from '../../img/yt.png'

export default function Works() {
  return (
    <div className="works">
       <div className="awesome">
       <span>Worked for All these</span>
       <span>Brands & Clients</span>
       <span>Lorem ispum yada ydadujuoguogveuiwgiygvwejkb
           <br/>
           hkguiguoieg7tgvqigvtuicdyivgdiu
           <br/>
           guofguowehpgiheprihihfiohigorhgiperh
           <br/>
           hgvujgvkujsbdkjvgsdjkbgvksjdghkdggjkv
       </span>
           <button className='button s-button'>Hire Me</button>
       <div className='blur s-blur1' style={{background: '#ffc0cb'}}></div>
   </div>
   {/* right side */}
   <div className="w-right">
    <div className="w-mainCircle">
        <div className="w-secCircle">
            <img src={Fb} alt='' />
        </div>
        <div className="w-secCircle">
            <img src={Ig} alt='' />
        </div>
        <div className="w-secCircle">
            <img src={Git} alt='' />
        </div>
        <div className="w-secCircle">
            <img src={Yt} alt='' />
        </div>
        {/* background circles */}
        {/* <div className='w-backCircle purpleCircle'></div>
        <div className='w-backCircle pinkCircle'></div> */}
    </div>
   </div>
   </div>
  )
}
