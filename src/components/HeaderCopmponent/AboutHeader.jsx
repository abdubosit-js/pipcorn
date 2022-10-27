import React from 'react'

export const AboutHeader = ({setOpenAbout}) => {
  return (
    <div className='about_cnt' onMouseEnter={() => setOpenAbout(true)} onMouseLeave={() => setOpenAbout(false)}>
        <div className="about_content">
            <div className="cnt_story">
                <h1>OUR STORY</h1>
                <p>It's a Famly Affair</p>
            </div>
            <div className="cnt_story">
                <h1>WHY HEIRLOOM</h1>
                <p>Our Not-So-Secret Ingredient</p>
            </div>
            <div className="cnt_story">
                <h1>PRESS</h1>
                <p>In The News</p>
            </div>
            <div className="cnt_story">
                <h1>BLOG</h1>
                <p>Black Founder Spotlights</p>
            </div>
        </div>
    </div>
  )
}
