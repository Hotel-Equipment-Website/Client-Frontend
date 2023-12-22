import React from 'react'
import './About.scss'
import item from '../../image/a1.jpg'

export default function About() {
  return (
    <div className='about-container'>
      <div className='about-top'>
        <h1>About Us</h1>
      </div>
      <hr />
      <div className='about-bottom'>
        <div className='bottom-left'>
          <div className="image"></div>
        </div>
        <div className='bottom-right'>
          <div className="description">
            <p style={{ color: 'red' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
              quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
              sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
              <br /> <br />
              Perspiciatis
              minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
              quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
              fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic maxime
              doloremque.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="our-product">
        <div className="name">
          <h1>Our Product</h1>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: '18rem' }}>
            <img src={item} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cutlery</h5>
              <p className="card-text">Cutlery includes any hand implement used in preparing, serving, and especially eating food in Western culture.</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="aboutfooter">
        <div className="ourVission">
          <h3>Our Vission</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
        </div>

        <div className="ourMission">
          <h3>Our Mission</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</p>
        </div>
      </div> */}
    </div>
  )
}