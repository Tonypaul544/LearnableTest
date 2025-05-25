
import './header.css';
import Call from './icons/call-icon.png';
import Mail from './icons/email-icon.png';
import Instagram from './icons/instagram.png';
import Facebook from './icons/Facebook.png';
import Youtube from './icons/Youtube.png';
import Twitter from './icons/Twitter.png';
import Avatar from './icons/Avatar.png';
import Cart from './icons/Cart.png';
import Search from './icons/Search.png';
import Favorite from './icons/Favorite.png';

export default function Header() {

  return(
    <>
      <header className="header">
        <div className="headerTXTs">
          
          <div className="leftTXT">
            <div className="phone">
              <img src={Call} alt="" className="number" />
              <p className="txt phome">(225) 555-0118</p>
            </div>
            
            <div className="phone">
              <img src={Mail} alt="" className="number" />
              <p className="txt mail">michelle.rivera@example.com</p>
            </div>
          </div>

          <div className="centerTXT">
            <p className="percentage">Follow Us  and get a chance to win 80% off</p>
          </div>

          <div className="rightIcons">
            <p className="follow">Follow Us : </p>
            <div className="navIcons">
              <img src={Instagram} alt="" className="icon IG1" />
              <img src={Youtube} alt="" className="icon IG2" />
              <img src={Facebook} alt="" className="icon IG3" />
              <img src={Twitter} alt="" className="icon IG4" />
            </div>
          </div>

        </div>

        <nav>
          <div className="lowLeft">
            <h1 className="logo">Bandage</h1>

          <div className="navBTNs">
            <button className="navBTN BTN1">Home</button>
            <select name="shop" id="">
              <label htmlFor="">
                <option>Shop</option>
                <option>Shop2</option>
                <option>Shop3</option>
                <option>Shop4</option>
              </label>
            </select>
            <button className="navBTN BTN3">About</button>
            <button className="navBTN BTN4">Blog</button>
            <button className="navBTN BTN5">Contact</button>
            <button className="navBTN BTN6">Pages</button>
          </div>
          </div>

          <div className="navAction">
            <div className="authentication">
              <img src={Avatar} alt="Authentication Avatar" className="avatar" />
              <h5 className="authTXT">Login / Register</h5>
            </div>

            <div className="actionIcons">
              <img src={Search} alt="" className="actICN ICN1" />
              <img src={Cart} alt="Cart" className="actICN ICN2" />
              <img src={Favorite} alt="Favorite" className="actICN ICN3" />
            </div>
          </div>
        </nav>

      </header>

    </>
  );
}