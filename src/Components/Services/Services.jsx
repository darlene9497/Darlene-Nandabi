import React from 'react'
import './Services.css'
import Volt from '../../img/high-voltage.png'
import Heart from '../../img/heart.jpeg'
import Card from '../Card/Card'
import Art from '../../img/art.jpeg'
import Resume from './resume.pdf'

export default function Services() {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ispum yada ydadujuoguogveuiwgiygvwejkb
                <br/>
                hkguiguoieg7tgvqigvtuicdyivgdiu
            </span>
            <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background: '#ffc0cb'}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left:'14rem'}}>
                <Card
                emoji={Heart}
                heading={'Design'}
                detail={'Figma design, Sketch'}
                />
            </div>
            <div style={{left:'-4rem', top:'12rem'}}>
                <Card
                emoji={Volt}
                heading={'Developer'}
                detail={'HTML, CSS, JavaScript, React'}
                />
            </div>
            <div style={{left:'12rem', top:'19rem'}}>
                <Card
                emoji={Art}
                heading={'UI/UX'}
                detail={'lorem ipsum hlhilvhweiuvihwvlkdh'}
                />
            </div>
            <div className='blur s-blur2' style={{background:'var(-purple'}}></div>
        </div>
    </div>
  )
}
