import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/insta.jpg";
// import Vector from '../../img/vector.png'
import Me from '../../img/darlene.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Emoji from '../../img/emoji.png'
// import ThumbUp from '../../img/thumbup.jpg'
// import Table from '../../img/table.avif'

export default function Intro() {
  return (
    <div className='intro'>
        <div className="i-left">
        <div className="i-name">
            <span>Hey! I Am</span>
            <span>Darlene Nandabi</span>
            <span>A Junior Web Developer. Lorem ipsum valender browangs. Yada
              yYada yada. lmao
            </span>
        </div>
        <button className='button i-button'>Hire me</button>
        <div className="i-icons">
          <img src={LinkedIn} alt="" />
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
        </div>
        </div>
        <div className="i-right">
          {/* <img src={Vector} alt="" /> */}
          <img src={Me} alt="" />
          {/* <img src={Table} alt="" /> */}
          <div style={{top: '-4%', left: '38%'}}>
            <FloatingDiv image={Emoji} txt1='Web' txt2='Developer' />
          </div>
          {/* <div style={{top: '18rem', left: '0rem'}}>
            <FloatingDiv image={ThumbUp} txt1='Best' txt2='Service' />
          </div> */}
          <div className='blur' style={{background: 'rgb(238 210 255'}}></div>
          <div className='blur' style={{background: '#ffc0cb' ,top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
        </div>
    </div>
  )
}