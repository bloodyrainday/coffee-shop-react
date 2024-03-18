import React from 'react';
import '../css/menu.css'

function Menu() {
  const coffee = [
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
      price: 5.5
    },
    {
      id: 7,
      image: require("../images/coffee-7.png"),
      title: "Latte macchiato",
      desc: "Espresso with frothed milk and chocolate",
      price: 5.5
    },
    {
      id: 8,
      image: require("../images/coffee-8.png"),
      title: "Coffee with cognac",
      desc: "Fragrant black coffee with cognac and whipped cream",
      price: 6.5
    }
  ]
  const tea = [
    {
      id: 1,
      image: require("../images/tea-1.png"),
      title: "Moroccan",
      desc: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: 4.5
    },
    {
      id: 2,
      image: require("../images/tea-2.png"),
      title: "Ginger",
      desc: "Original black tea with fresh ginger, lemon and honey",
      price: 5
    },
    {
      id: 3,
      image: require("../images/tea-3.png"),
      title: "Cranberry",
      desc: "Invigorating black tea with cranberry and honey",
      price: 5
    },
    {
      id: 4,
      image: require("../images/tea-4.png"),
      title: "Sea buckthorn",
      desc: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      price: 5.5
    }
  ]
  const dessert = [
    {
      id: 1,
      image: require("../images/dessert-1.png"),
      title: "Marble cheesecake",
      desc: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      price: 3.5
    },
    {
      id: 2,
      image: require("../images/dessert-2.png"),
      title: "Red velvet",
      desc: "Layer cake with cream cheese frosting",
      price: 4
    },
    {
      id: 3,
      image: require("../images/dessert-3.png"),
      title: "Cheesecakes",
      desc: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: 4.5
    },
    {
      id: 4,
      image: require("../images/dessert-4.png"),
      title: "Creme brulee",
      desc: "Delicate creamy dessert in a caramel basket with wild berries",
      price: 4
    },
    {
      id: 5,
      image: require("../images/dessert-5.png"),
      title: "Pancakes",
      desc: "Tender pancakes with strawberry jam and fresh strawberries",
      price: 4.5
    },
    {
      id: 6,
      image: require("../images/dessert-6.png"),
      title: "Honey cake",
      desc: "Classic honey cake with delicate custard",
      price: 4.5
    },
    {
      id: 7,
      image: require("../images/dessert-7.png"),
      title: "Chocolate cake",
      desc: "Cake with hot chocolate filling and nuts with dried apricots",
      price: 5.5
    },
    {
      id: 8,
      image: require("../images/dessert-8.png"),
      title: "Black forest",
      desc: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      price: 6.5
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
            
              {
                clicked === 0 && (
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
                )
              }

              {
                clicked === 1 && (
                  tea.map((item, index) => (
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
                )
              }

              {
                clicked === 2 && (
                  dessert.map((item, index) => (
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
                )
              }
            
          </div>

        </div>
      </main>
    
  )
}

export default Menu