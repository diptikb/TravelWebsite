import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now available in 46 countries!</h3>
      <div className='grid'>
        <div>
          <img src={image1} alt='destination-1' />
          <h3>Experirnce to Bali</h3>
          <p>
            Bali is best Known for happy, kind people,white sand and black sand beaches,
            active volcanoes, spectaular sunset views and lush greenery including rain 
            forests and rice terraces.
          </p>
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>Experience Kerala</h3>
          <p>
              Kerala is a state in India known for its beautful beaches,lush green hills
              and backwaters.it us often called "Gods " own "country"  for its natural 
              and beauty and cultural heritage. 
          
          </p>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>Experience Manali</h3>
          <p>
             Manali is a town near kullu town in kullu district in the indian state of 
             Himachal Pradesh.It is siuated in the nothern end the kullu valley, the
             kullu district.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations