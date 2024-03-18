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
    },
    {
      id: 2,
      image: require("../images/coffee-2.png"),
      title: "Kahlua coffee",
      desc: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      price: 7
    },
    {
      id: 3,
      image: require("../images/coffee-3.png"),
      title: "Honey raf",
      desc: "Espresso with frothed milk, cream and aromatic honey",
      price: 5.5
    },
    {
      id: 4,
      image: require("../images/coffee-4.png"),
      title: "Ice cappuccino",
      desc: "Cappuccino with soft thick foam in summer version with ice",
      price: 5
    },
    {
      id: 5,
      image: require("../images/coffee-5.png"),
      title: "Espresso",
      desc: "Classic black coffee",
      price: 4.5
    },
    {
      id: 6,
      image: require("../images/coffee-6.png"),
      title: "Latte",
      desc: "Espresso coffee with the addition of steamed milk and dense milk foam",
      price: 4.5
    },
    {
      id: 7,
      image: require("../images/coffee-7.png"),
      title: "Latte macchiato",
      desc: "Espresso with frothed milk and chocolate",
      price: 4.5
    },
    {
      id: 8,
      image: require("../images/coffee-8.png"),
      title: "Coffee with cognac",
      desc: "Fragrant black coffee with cognac and whipped cream",
      price: 4.5
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
                    <div className='menu-collection-item-img-wrapper'>
                      <img className='menu-collection-item-img' src={item.image} alt='menu-item'/>
                    </div>
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