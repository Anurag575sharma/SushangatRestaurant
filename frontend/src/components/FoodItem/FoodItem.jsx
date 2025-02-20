import {useContext} from "react";
import {assets} from "../../assets/assets.js";
import "./FoodItem.css";
import {StoreContext} from "../../context/StoreContext";
// eslint-disable-next-line react/prop-types
function FoodItem({id, name, price, description, image}) {
  const {url, cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  return (
    <div>
      <div className="food-item">
        <div className="food-item-img-container">
          <img
            src={url + "/images/" + image}
            className="food-item-image"
            alt=""
          />
          {!cartItems[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div className="food-item-counter">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>

        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">₹{price}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
