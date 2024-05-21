import React from 'react'
import '../Gallery/Gallery.css'
const Gallery = () => {
  return (
    <div>
        <div className="gallery-all w-100">
            <div className="gallery-photo name-info">
                <p className='font-cormor name'>Sarah Davy</p>
                <p>Administrative Assistant</p>
                <button>Contact-me</button>
            </div>
            <div className="gallery-photo  gallery-photo-text ">
                <img src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/beautiful-woman-with-long-curly-hair-enjoying-rose-fragrance-in-a-spring-garden.jpg" alt="" />
            </div>
            <div className="gallery-photo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskL0itH7SjqqnT9wMB3DThfcgYqb3s4diXA&s" alt="" /></div>
            <div className="gallery-photo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DU7auCAO16T44kEsg08L5yCzSM16Is-cDA&s" alt="" /></div>
            <div className="gallery-photo"><img src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/cropped-shot-of-woman-holding-bottle-of-perfume.jpg" alt="" /></div>
            <div className="gallery-photo x"><img src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/beautiful-girl-with-closed-eyes-and-a-flower-crown.jpg" alt="" /></div>
            <div className="gallery-photo"><img src="data:image/jpeg;base64,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" alt="" /></div>
          
            <div className="gallery-photo name-info">
                <p className='font-cormor name'>Emily Smit</p>
                <p>General Manger</p>
                <button>Contact-me</button>
            </div>
        </div>

    </div>
  )
}

export default Gallery