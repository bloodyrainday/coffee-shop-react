import React from 'react'

export default function MenuItem({coffee, showCard, setCardClicked}) {
  return (
    <div className='menu-item-wrapper' onClick={(e) => {
      e.target.classList.value === 'menu-item-wrapper' && document.body.classList.remove('lock');
      e.target.classList.value === 'menu-item-wrapper' && setCardClicked(false)
      }}>
      
      <div className='menu-item-content'>

        <div className='menu-item-content-column1'>
          <img src={showCard.image} alt='card'/>
        </div>

        <div className='menu-item-content-column2'>
          <div className="menu-item-content-column2-text">
            <h4 className="menu-item-content-column2-text-title">Irish coffee</h4>
            <p className="menu-item-content-column2-text-subtitle">Fragrant black coffee with Jameson Irish whiskey and whipped milk</p>
          </div>

          <div className="menu-item-content-column2-size">
            <p className="menu-item-content-column2-size-text">Size</p>
            <div className="menu-item-content-column2-size-buttons">
                <button className="menu-item-content-column2-size-buttons-btn"><span>S</span>200 ml</button>
                <button className="menu-item-content-column2-size-buttons-btn"><span>M</span>300 ml</button>
                <button className="menu-item-content-column2-size-buttons-btn"><span>L</span>400 ml</button>
            </div>
          </div>

          <div className="menu-item-content-column2-add">
            <p className="menu-item-content-column2-add-text">Additives</p>
            <div className="menu-item-content-column2-add-buttons">
                <button className="menu-item-content-column2-add-buttons-btn"><span>1</span>Sugar</button>
                <button className="menu-item-content-column2-add-buttons-btn"><span>2</span>Cinnamon</button>
                <button className="menu-item-content-column2-add-buttons-btn"><span>3</span>Syrup</button>
            </div>
          </div>

          <div className="menu-item-content-column2-total">
              <p className="menu-item-content-column2-total-text">Total:</p>
              <p className="menu-item-content-column2-total-price">$7.00</p>
          </div>

          <div className="menu-item-content-column2-warning">
              <span>i</span>
              <p className="menu-item-content-column2-warning-text">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
          </div>

          <div className="menu-item-content-column2-submit">
              <button className="menu-item-content-column2-submit-btn">Close</button>
          </div>
        </div>

      </div>
      
    </div>
  )
}
