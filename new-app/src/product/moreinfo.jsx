//Show more info on click of a product card. You can use the same product card component and add a state to show/hide the additional info. The additional info can include a description, ratings, and reviews.

import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'

function MoreInfo() {
    return (
        <div className="product-card" >
                <div className="additional-info">
                    <p>Description: A variety of paan flavors to choose from.</p>
                    <p>Ratings: 4.5/5</p>
                    <p>Reviews: "Best paan in town!" - John Doe</p>
                </div>
        </div>
    );
}

export default MoreInfo;