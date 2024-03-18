import React from 'react';
import '../css/menu.css'

function Menu() {
  const coffee =[
    {
      id: 1,
      image: require("../images/coffee-1.png"),
      title: "Irish coffee",
      desc: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      price: 7
    }
  ]
  const [clicked, setClicked] = React.useState(0);
  const clickedButton = (index) => {
    setClicked(index)
  }
  return (
    
      <main className='menu'>
        <div className='container'>
          <h1 className='menu-title'>Behind each of our cups hides an <i>amazing surprise</i></h1>
          
          <div className="menu-tabs">

            <div className={`menu-tabs-tab coffee ${clicked === 0 ? 'clicked' : ''}`} onClick={() => clickedButton(0)}>
                <div className="menu-tabs-tab-circle">
                    <span className="menu-tabs-tab-circle-icon coffee"></span>
                </div>
                <div className="menu-tabs-tab-text">
                    <p>Coffee</p>
                </div>
            </div>

            <div className={`menu-tabs-tab tea ${clicked === 1 ? 'clicked' : ''}`} onClick={() => clickedButton(1)}>
                <div className="menu-tabs-tab-circle">
                    <span className="menu-tabs-tab-circle-icon tea"></span>
                </div>
                <div className="menu-tabs-tab-text">
                    <p>Tea</p>
                </div>
            </div>

            <div className={`menu-tabs-tab dessert ${clicked === 2 ? 'clicked' : ''}`} onClick={() => clickedButton(2)}>
                <div className="menu-tabs-tab-circle">
                    <span className="menu-tabs-tab-circle-icon dessert"></span>
                </div>
                <div className="menu-tabs-tab-text">
                    <p>Dessert</p>
                </div>
            </div>

          </div>

          <div className='menu-collection'>
            
              {clicked === 0 && (
                coffee.map((item, index) => (
                  <div className='menu-collection-item' key={item.id}>
                    <img className='menu-collection-item-img' src={item.image} alt='menu-item'/>
                    <div className='menu-collection-item-caption'>
                      <h4 className='menu-collection-item-caption-title'>{item.title}</h4>
                      <p className='menu-collection-item-caption-desc'>{item.desc}</p>
                      <span className='menu-collection-item-caption-price'>{`$${item.price.toFixed(2)}`}</span>
                    </div>
                  </div>
                ))
              )}
            
          </div>

        </div>
      </main>
    
  )
}

export default Menu