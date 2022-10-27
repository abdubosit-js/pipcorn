import React from 'react'
import { ReactComponent as Star } from "../../assets/starsImg.svg"

export const StarsView = () => {
  return (
    <div className='stars_viewer_wrapper'>
        <div className="title_cnt_stars">
            <p>POPCORN</p>
            <h1>SEA SALT MINI POPCORN</h1>
        </div>
        <div className='star_options'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p>278 reviews</p>
        </div>
    </div>
  )
}
