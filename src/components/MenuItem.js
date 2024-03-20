import React from 'react'

export default function MenuItem({ showCard, setCardClicked}) {
  // let sum = Number(showCard.price).toFixed(2);
  // const [sum, setSum] = React.useState(Number(showCard.price));
  // const calculateSum = () => {
  //   if (chosenItem === 1) {
  //     setSum(sum + 0.5)
  //   } else if (chosenItem === 2)
  //   setSum(sum + 0.75);
  // }
  // const [totalSum, setTotalSum] = React.useState(Number(showCard.price).toFixed(2));
  // const calculateTotalSum = (price) => {
  //   setTotalSum(totalSum + price);
  //   console.log(totalSum)
  // }
  const [chosenItem, setChosenItem] = React.useState(0);
  const choose = (index) => {
    setChosenItem(index)
  }
  const [addSugar, setAddSugar] = React.useState(false);
  const [addCinnamon, setAddCinnamon] = React.useState(false);
  const [addSyrup, setAddSyrup] = React.useState(false);
  if (addSugar === true) {
    (Number(showCard.price) + 0.5).toFixed(2)
  }
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
            <h4 className="menu-item-content-column2-text-title">{showCard.title}</h4>
            <p className="menu-item-content-column2-text-subtitle">{showCard.desc}</p>
          </div>

          <div className="menu-item-content-column2-size">
            <p className="menu-item-content-column2-size-text">Size</p>
            <div className="menu-item-content-column2-size-buttons">
                <button className={`menu-item-content-column2-size-buttons-btn ${chosenItem === 0 ? 'chosen' : ''}`} onClick={() => choose(0)}><span>S</span>200 ml</button>
                <button className={`menu-item-content-column2-size-buttons-btn ${chosenItem === 1 ? 'chosen' : ''}`} onClick={() => choose(1)}><span>M</span>300 ml</button>
                <button className={`menu-item-content-column2-size-buttons-btn ${chosenItem === 2 ? 'chosen' : ''}`} onClick={() => choose(2)}><span>L</span>400 ml</button>
            </div>
          </div>

          <div className="menu-item-content-column2-add">
            <p className="menu-item-content-column2-add-text">Additives</p>
            <div className="menu-item-content-column2-add-buttons">
                <button className={`menu-item-content-column2-add-buttons-btn ${addSugar ? 'chosen' : ''}`} onClick={() => setAddSugar(!addSugar)}><span>1</span>Sugar</button>
                <button className={`menu-item-content-column2-add-buttons-btn ${addCinnamon ? 'chosen' : ''}`} onClick={() => setAddCinnamon(!addCinnamon)}><span>2</span>Cinnamon</button>
                <button className={`menu-item-content-column2-add-buttons-btn ${addSyrup ? 'chosen' : ''}`} onClick={() => setAddSyrup(!addSyrup)}><span>3</span>Syrup</button>
            </div>
          </div>

          <div className="menu-item-content-column2-total">
              <p className="menu-item-content-column2-total-text">Total:</p>
              <p className="menu-item-content-column2-total-price">{`$ ${((chosenItem === 1 ? (Number(showCard.price) + 0.5) :
                                                                          chosenItem === 2 ? (Number(showCard.price) + 0.75) :
                                                                          Number(showCard.price)) +
                                                                          ((addSugar &&  addCinnamon && addSyrup) ? 1.5 :
                                                                          (addSugar &&  addCinnamon) || (addSyrup &&  addSugar) || (addCinnamon && addSyrup) ? 1 :
                                                                          addSugar ||  addCinnamon || addSyrup ? 0.5 : 0)).toFixed(2)
                                                                          }`}</p>
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
