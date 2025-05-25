
import Lantan from './images/lantan.png';
import Seat from './images/seat.png';
import Cupandfuk from './images/cupandfuk.png';
import FlowerPlate from './images/flowerPlate.png';
import plates from './images/plates.png';
import eatingTools from './images/eatingTools.png';
import jugandplates from './images/jugandplates.png';
import glassCupPlates from './images/glassCupPlates.png';
import cupNDspoon from './images/cupNDspoon.png';
import TVconsole from './images/TVconsole.png';

// THIRD SECTION
import Easywin from './icons/easywin.png';
import Concrete from './icons/concrete.png';
import Hackgroth from './icons/hackgrowth.png';

// FORTH SECTION
import Calendar from './icons/clock.png';
import Gallery from './icons/Gallery.png';
import Rightangle from './icons/Rightangle.png';

//FIFTH SECTION
import User from './images/user.png';
import Fillstar from './icons/fillStar.png';
import Emptystar from './icons/emptyStar.png';
import FifthItem1 from './images/item1.png';
import FifthItem2 from './images/item2.png';
import FifthItem3 from './images/item3.png';
import FifthItem4 from './images/item4.png';
import FifthItem5 from './images/item5.png';
import FifthItem6 from './images/item6.png';
import FifthItem7 from './images/item7.png';
import FifthItem8 from './images/item8.png';
import FifthItem9 from './images/item9.png';

//SIXTH SECTION
import Facebook from './icons/facebook2.png';
import instagram from './icons/instagram2.png';
import twitter from './icons/twitter2.png';




import { useState } from 'react'
import Header from './header';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />

        {/* FIRST SECTION */}
        <div className="firstSection">
          <div className="leftGrid">
            <div className="coconutDiv grid1">
            <div className="coconutChild">
              <p className="itemCount green">5 Items</p>
              <h3 className="furniture1">FURNITURE</h3>
              <button className="readMore">Read More</button>
            </div>
          </div>
          </div>

          <div className="gridRight">
            <div className="flowerDiv grid2">
            <div className="coconutChild">
              <p className="itemCount green">5 Items</p>
              <h3 className="furniture1">FURNITURE</h3>
              <button className="readMore">Read More</button>
            </div>
            </div>

            <div className="rightBottom">
              <div className="bellDiv grid3">
                <div className="coconutChild">
                  <p className="itemCount green">5 Items</p>
                  <h3 className="furniture1">FURNITURE</h3>
                  <button className="readMore">Read More</button>
                </div>
              </div>

              <div className="potsDiv grid4">
                <div className="coconutChild">
                  <p className="itemCount green">5 Items</p>
                  <h3 className="furniture1">FURNITURE</h3>
                  <button className="readMore">Read More</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="secondSection">
          <div className="sectionTXT">
            <p className="featured">Featured products</p>
            <h2 className="bestSeller">BESTSELLER PRODUCTS</h2>
            <p className="promels">Problems trying to resolve the conflict between </p>
          </div>

          <div className="section2Container">
            <div className="imgDetails">
              <img src={Lantan} alt="" className="sellerIMG img1" />

              <div className="sellerDesc">
                <h3 className="sellerTitle">Graphic Design</h3>
                <p className="sellerDepartment">English Department</p>
                <p className="sellerPrice">
                  <small>$16.48 <span className="pureGreen">$6.48</span></small>
                </p>
              </div>
            </div>
            
            <div className="imgDetails">
              <img src={Seat} alt="" className="sellerIMG img1" />

              <div className="sellerDesc">
                <h3 className="sellerTitle">Graphic Design</h3>
                <p className="sellerDepartment">English Department</p>
                <p className="sellerPrice">
                  <small>$16.48</small>
                  <span className="pureGreen">$6.48</span>
                </p>
              </div>
            </div>
            
            <div className="imgDetails">
              <img src={Cupandfuk} alt="" className="sellerIMG img1" />

              <div className="sellerDesc">
                <h3 className="sellerTitle">Graphic Design</h3>
                <p className="sellerDepartment">English Department</p>
                <p className="sellerPrice">
                  <small>$16.48</small>
                  <span className="pureGreen">$6.48</span>
                </p>
              </div>
            </div>
            
            <div className="imgDetails">
              <img src={FlowerPlate} alt="" className="sellerIMG img1" />

              <div className="sellerDesc">
                <h3 className="sellerTitle">Graphic Design</h3>
                <p className="sellerDepartment">English Department</p>
                <p className="sellerPrice">
                  <small>$16.48</small>
                  <span className="pureGreen">$6.48</span>
                </p>
              </div>
            </div>
            
            <div className="imgDetails">
              <img src={plates} alt="" className="sellerIMG img1" />

              <div className="sellerDesc">
                <h3 className="sellerTitle">Graphic Design</h3>
                <p className="sellerDepartment">English Department</p>
                <p className="sellerPrice">
                  <small>$16.48</small>
                  <span className="pureGreen">$6.48</span>
                </p>
              </div>
            </div>
            
            <div className="imgDetails">
              <img src={eatingTools} alt="eatingTools" className="sellerIMG img1" />

              <div className="sellerDesc">
                <h3 className="sellerTitle">Graphic Design</h3>
                <p className="sellerDepartment">English Department</p>
                <p className="sellerPrice">
                  <small>$16.48</small>
                  <span className="pureGreen">$6.48</span>
                </p>
              </div>
            </div>
            
            <div className="imgDetails">
              <img src={jugandplates} alt="jugandplates" className="sellerIMG img1" />

              <div className="sellerDesc">
                <h3 className="sellerTitle">Graphic Design</h3>
                <p className="sellerDepartment">English Department</p>
                <p className="sellerPrice">
                  <small>$16.48</small>
                  <span className="pureGreen">$6.48</span>
                </p>
              </div>
            </div>
            
            <div className="imgDetails">
              <img src={glassCupPlates} alt="glassCupPlates" className="sellerIMG img1" />

              <div className="sellerDesc">
                <h3 className="sellerTitle">Graphic Design</h3>
                <p className="sellerDepartment">English Department</p>
                <p className="sellerPrice">
                  <small>$16.48</small>
                  <span className="pureGreen">$6.48</span>
                </p>
              </div>
            </div>
            
            <div className="imgDetails">
              <img src={cupNDspoon} alt="cupNDspoon" className="sellerIMG img1" />

              <div className="sellerDesc">
                <h3 className="sellerTitle">Graphic Design</h3>
                <p className="sellerDepartment">English Department</p>
                <p className="sellerPrice">
                  <small>$16.48</small>
                  <span className="pureGreen">$6.48</span>
                </p>
              </div>
            </div>
            
            <div className="imgDetails">
              <img src={TVconsole} alt="TVconsole" className="sellerIMG img1" />

              <div className="sellerDesc">
                <h3 className="sellerTitle">Graphic Design</h3>
                <p className="sellerDepartment">English Department</p>
                <p className="sellerPrice">
                  <small>$16.48</small>
                  <span className="pureGreen">$6.48</span>
                </p>
              </div>
            </div>

          </div>
            <button className="loadMore">LOAD MORE PRODUCTS</button>
        </div>
        
        {/* THIRD SECTION */}
        <div className="thirdSection">
          <div className="productsTXT">
            <p className="products">Featured Products</p>
            <h2 className="bestService">THE BEST SERVICES</h2>
            <p className="productDesc">Problems trying to resolve the conflict between </p>
          </div>

          <div className="thirdSectionContainer">
            <div className="easywin third">
              <img src={Easywin} alt="Easywin Icon" className="serviceIMG bestservice" />
              <h3 className="easywin">Easy win</h3>
              <p>Get your best looking smile now!</p>
            </div>
            
            <div className="Concrete third">
              <img src={Concrete} alt="Easywin Icon" className="serviceIMG bestservice" />
              <h3 className="Concrete">Concrete</h3>
              <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
            </div>
            
            <div className="Growth third">
              <img src={Hackgroth} alt="Easywin Icon" className="serviceIMG bestservice" />
              <h3 className="Growth">Hack Growth</h3>
              <p>Overcame any hurdle or any other problem.</p>
            </div>
          </div>
        </div>

        {/* FOURTH SECTION */}
        <div className="forthSection">
          <div className="forthTXT">
            <p className="practice">Practice Advice</p>
            <h2 className="posts">Featured Posts</h2>
          </div>

          <div className="forthBody">
            <div className="forthContainer">
              <div className="featuredItem item1">
                <div className="background background1">
                  <h4 className="new">NEW</h4>
                </div>

                <div className="details">
                  <div className="textArea">
                    <p className="trendingNews"><span className="green">Google</span> Trending News</p>
                    <p className="languageChange">Loudest à la Madison #1 (L'integral)</p>
                    <p className='focuse'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                  </div>

                  <div className="horizontal">
                    <div className="dateDiv">
                      <img src={Calendar} alt="Calendar" className="clock" />
                      <p className="date">22 April 2021</p>
                    </div>

                    <div className="commentDiv">
                      <img src={Gallery} alt="Gallery" className="comment" />
                      <p className="commentCount">10 Comments</p>
                    </div>
                  </div>

                  <div className="button">
                    <button className="learnMore">Learn More</button>
                    <img src={Rightangle} alt="Rightangle" className="rightangle" />
                  </div>
                </div>
              </div>

              <div className="featuredItem item2">
                <div className="background background2">
                  <h4 className="new">NEW</h4>
                </div>

                <div className="details">
                  <div className="textArea">
                    <p className="trendingNews"><span className="green">Google</span> Trending News</p>
                    <p className="languageChange">Loudest à la Madison #1 (L'integral)</p>
                    <p className='focuse'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                  </div>

                  <div className="horizontal">
                    <div className="dateDiv">
                      <img src={Calendar} alt="Calendar" className="clock" />
                      <p className="date">22 April 2021</p>
                    </div>

                    <div className="commentDiv">
                      <img src={Gallery} alt="Gallery" className="comment" />
                      <p className="commentCount">10 Comments</p>
                    </div>
                  </div>

                  <div className="button">
                    <button className="learnMore">Learn More</button>
                    <img src={Rightangle} alt="Rightangle" className="rightangle" />
                  </div>
                </div>
              </div>

              <div className="featuredItem item3">
                <div className="background background3">
                  <h4 className="new">NEW</h4>
                </div>

                <div className="details">
                  <div className="textArea">
                    <p className="trendingNews"><span className="green">Google</span> Trending News</p>
                    <p className="languageChange">Loudest à la Madison #1 (L'integral)</p>
                    <p className='focuse'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                  </div>

                  <div className="horizontal">
                    <div className="dateDiv">
                      <img src={Calendar} alt="Calendar" className="clock" />
                      <p className="date">22 April 2021</p>
                    </div>

                    <div className="commentDiv">
                      <img src={Gallery} alt="Gallery" className="comment" />
                      <p className="commentCount">10 Comments</p>
                    </div>
                  </div>

                  <div className="button">
                    <button className="learnMore">Learn More</button>
                    <img src={Rightangle} alt="Rightangle" className="rightangle" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* FIFTH SECTION */}
        <div className="fifthSection">
          <div className="fifthLeft">
            <h2 className="opinion">What they say about us</h2>

            <div className="userDiv">
              <img src={User} alt="" className="userPFP" />
              <div className="stars">
                <img src={Fillstar} alt="Fillstar" className="star star1" />
                <img src={Fillstar} alt="Fillstar" className="star star2" />
                <img src={Fillstar} alt="Fillstar" className="star star3" />
                <img src={Fillstar} alt="Fillstar" className="star star4" />
                <img src={Emptystar} alt={Emptystar} className="star star5" />
              </div>

                <div className="txts">
                  <p className="userComment">Slate helps you see how many more days you need to work to reach your financial goal.</p>
                  <div className="lowerTXT">
                    <p className="name">Regina Miles</p>
                    <p className="track">Designer</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="fifthRight">
            <img src={FifthItem1} alt="FifthItem1" className="fifthItem item1" />
            <img src={FifthItem2} alt="FifthItem2" className="fifthItem item2" />
            <img src={FifthItem3} alt="FifthItem3" className="fifthItem item3" />
            <img src={FifthItem4} alt="FifthItem4" className="fifthItem item4" />
            <img src={FifthItem5} alt="FifthItem5" className="fifthItem item5" />
            <img src={FifthItem6} alt="FifthItem6" className="fifthItem item6" />
            <img src={FifthItem7} alt="FifthItem7" className="fifthItem item7" />
            <img src={FifthItem8} alt="FifthItem8" className="fifthItem item8" />
            <img src={FifthItem9} alt="FifthItem9" className="fifthItem item9" />
          </div>
        </div>

        {/* SIXTH SECTION */}
        <div className="sixthSection">
          <div className="sixthBG">
            <div className="sixthTXTcontainer">
              <p className="green">Designing Better Experience</p>
              <h2 className="prolemResulve">Problems trying to resolve the conflict between </h2>
              <p className="tinyTXT">Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
            <h4 className="amount">$16.48</h4>

            </div>
            <button className="addCall">ADD YOUR CALL TO ACTION</button>
          </div>

          <div className="sixthHorizontal">
            <h3 className="bandage">Bandage</h3>
            <div className="sixthright">
              <img src={Facebook} alt="" className="sixthicinon" />
              <img src={instagram} alt="" className="sixthicinon" />
              <img src={twitter} alt="" className="sixthicinon" />
            </div>

          </div>
        </div>


      </div>
      
    </>
  )
}

export default App
