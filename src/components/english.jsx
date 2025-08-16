import { useState, useEffect } from "react";
import banner from "../assets/banner.png";
import logo from "../assets/Screenshot_2025-08-13_133729-removebg-preview.png";
import { FaGlobe } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { TbMessageDots } from "react-icons/tb";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import certificate from "../certificates/certificate.jpg"
import certificate2 from "../certificates/certificate2.jpg"
import { GrLanguage } from "react-icons/gr";
import "swiper/css/pagination";
import "swiper/css/navigation";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";
import video8 from "../videos/video8.mp4";
import video9 from "../videos/video9.mov";
import langs from "../assets/language.png"
import { Autoplay, Keyboard, Pagination, Navigation, FreeMode } from "swiper/modules";
import { HashLink } from "react-router-hash-link";
import quality from "../assets/quality.png";
import truck from "../assets/truck.png";
import rightarrow from "../assets/rightarrow.png"
import arava from "../flowing images/arava.jpg"
import artel from "../flowing images/artell.png"
import dock from "../flowing images/dock.jpg"
import express from "../flowing images/express.jpg"
import global from "../flowing images/global.jpg"
import hally from "../flowing images/hally.jpg"
import itpark from "../flowing images/itpark.jpg"
import noor from "../flowing images/noor.jpg"
import taxir from "../flowing images/taxir.webp"
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RiFullscreenFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

export default function English() {
 
  
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(false)
  const [big, SetBig] = useState(false);
  const [big1, SetBig1] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  const toggleLan = () =>{
    setLanguage(prev1 => !prev1)
  }
  
  
  const small = () => {
    SetBig(true);
  };
  
  const small1 = () => {
    SetBig1(true);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // scroll threshold
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
       <div className="neww">
   <img src={logo} alt="" />
    <div className="menu-container">
      <div className="menu-icon" onMouseUp={toggleMenu}>
        ☰
      </div>

      {isOpen && (
        <div className="menu-links">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#News">News</a>
          <a href="#Facts">Facts</a>
          <a href="#Statistics">Statistics</a>
          <a href="#Partners">Partners</a>
        </div>
      )}
    </div>
    <div className="men">
    <GrLanguage onClick={toggleLan} className='lan'/>
    {language && (
        <div className="til">
           
           <NavLink to='/' className="language-option">EN</NavLink>
              <NavLink to="/uzbek" className="language-option">UZ</NavLink>
              <NavLink to="/russian" className="language-option">RU</NavLink>
        </div>
    )

    }
    </div>
   </div>
      {/* Banner */}
      <img src={banner} alt="Banner" className="banner" />
      
      {/* Navbar */}
      <header>
        <div className={`nav ${scrolled ? "scrolled" : ""}`}>
          <div className="container">
            <img src={logo} alt="Logo" className="logo" />

            {/* Smooth scroll links */}
            <HashLink smooth to="/#Home" className="btn">Home</HashLink>
            <HashLink smooth to="/#About" className="btn">About</HashLink>
            <HashLink smooth to="/#News" className="btn">News</HashLink>
            <HashLink smooth to="/#Facts" className="btn">Facts</HashLink>
            <HashLink smooth to="/#Statistics" className="btn">Statistics</HashLink>
            <HashLink smooth to="/#Partners" className="btn">Partners</HashLink>
            <button className="re">Registration</button>

            {/* Language selector */}
           
              
                
               
                
                <NavLink to='/' className="language-option">EN</NavLink>
              <NavLink to="/uzbek" className="language-option">UZ</NavLink>
              <NavLink to="/russian" className="language-option">RU</NavLink>
               

              
            
          </div>
        </div>
        
        <nav>
            
           <div className="hash">
           <HashLink smooth to="/#Home" className="link">Home</HashLink>
            <HashLink smooth to="/#About" className="link">About</HashLink>
            <HashLink smooth to="/#News" className="link">News</HashLink>
            <HashLink smooth to="/#Facts" className="link">Facts</HashLink>
            <HashLink smooth to="/#Statistics" className="link">Statistics</HashLink>
            <HashLink smooth to="/#Partners" className="link">Partners</HashLink>
            <button className="reg">Registration</button>
           </div>
            

            <div className="navlink">
            <NavLink className="language-option">EN</NavLink>
             <NavLink to="/uzbek" className="language-option">UZ</NavLink>
             <NavLink to="/russian" className="language-option">RU</NavLink>
            </div>

        </nav>
      </header>

      {/* Home Section */}
      <section id="Home" className="text-container">
        <h2>International Logistics Academy!</h2>
        <p className="long-text">
          Master an in-demand profession in 3 months! <br />
          International transport logistics with knowledge of English B2!
          <br /> 3 steps to your dream job!
        </p>
        <div className="button-container">
        <a href="tel:+998957270017">  <div className="call">
            <IoCallSharp className="call-icon" />
            <p>Call</p>
          </div></a>
          <a href="https://t.me/bigi_study" target="_blank"><div className="message">
            <TbMessageDots className="message-icon" />
              <p>message</p>
          </div></a>
        </div>
      </section>

      {/* Social icons */}
      <section className="social-container">
        <div className="al">
        <RxCross1 className="kros"/>
        </div>
        <a href="https://t.me/bigiedu_admin"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with BIGI EDU Admin"><FaTelegram className="ico one" /></a>
       <a href="https://www.instagram.com/bigiedu_uz/" target="_blank"> <FaInstagram className="ico two" /></a>
        <a href="https://www.facebook.com/bigi.study" target="_blank" className="ico three" ><FaFacebook /></a>
      </section>

      {/* About Section */}
      <main>
        <div id="About" className="About">
          <h2>About us</h2>
          <p>Have you always wanted to try yourself in the field of logistics?</p>
          <div className="chiziq"></div>
        </div>

        <div className="About-text">
          <div className="text1">
            <h4>A Journey of a Thousand Miles Involves Many Small Steps"</h4>
            <h5>- by a londor doctor</h5>
            <div className="chiziq br"></div>
            <p>
              The BIGI study team, consisting of energetic, enthusiastic and
              empowering members never thought twice about offering a trucking
              business classes and sharing their own experiences because of the
              value it can provide.The BIGI study team, consisting of energetic, enthusiastic and empowering members never thought twice about offering a trucking business classes and sharing their own experiences because of the value it can provide to other businesses by transporting goods from one location to another over and over again. Eventually, the team was able to create the best transportation logistics courses, and we would like to share with you how simple and joyful it can be to be a creative part of this industry if you have an open-minded system and clear goal in place.
            </p>
          </div>

          <div className="special">
            A course on "U.S. Trucking" , currently being held at the academy,  will be taught in 3 stages.  <br /> <br />
            Stage 1️⃣: "English for Logistics"  focuses on developing students' English language with the help of general logistical vocabularies and terms. It lasts 2 weeks. The course will enhance general understanding on logistics and put stress on improving "American accent".<br /> <br />
           Stage 2️⃣: Knowledge, insights and skills necessary for trucking specialists , such as dispatching, updating, fleet, safety, accounting, and ELD management are formed. This stage lasts for 1 month. 
 <br /> <br />
           
Stage 3️⃣: Joining free practice and trainings at our partner companies as an intern for 1 month and move to the "EARNING" stage! 
<br /><br />✅ We select students through an interview. If your English level is B2 or higher, we look forward to seeing you soon.
          </div>

          <div className="text2">
            <p>
              Transportation of goods and services has always been one of the main boosters of a country’s economy. Every country, including the Republic of Uzbekistan, relies on its logistics to ensure parties conduct their business seamlessly and improve its economy. The modes of transport support it. You have planes delivering goods, ships delivering more goods, and the railways doing their part in delivering goods in bulk as well. But the most used and active mode of transport that contributes to much of the economy’s boost are the roads and—yes, you guessed it—trucks are the ones doing their part. This is why trucking has become something that interest us because it contributes to the economic growth of a country and the BIGI study, established in 2023, would like you to be an essential part of that contribution.
            </p>
          </div>
        </div>
      </main>

      {/* News Section */}
      <div id="News" className="News">
        <div className="About new">
          <h2>News</h2>
          <p>You can stay updated with the latest news about our courses</p>
          <div className="chiziq"></div>
        </div>

        <Swiper
  spaceBetween={30}
  centeredSlides={true}
  pagination={{ clickable: true }}
  keyboard={{ enabled: true }}
  navigation={true}
  loop={true}
  
  
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper"
  onSlideChange={() => {
    // Pause all videos when changing slide
    document.querySelectorAll(".mySwiper video").forEach((video) => {
      video.pause();
      video.currentTime = 0; // Optional reset
    });
  }}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      const activeSlide = document.querySelector(".swiper-slide-active");
      const video = activeSlide?.querySelector("video");
      if (video) {
        video.play();
      }
    }
  }}
  tabIndex={0} // Makes Swiper focusable so it can receive key events
>
  <SwiperSlide className="slides">
    <div className="videos1 videos11p[">
    <div className="video1 doston">
    <video controls className="videos" src={video1}></video>
    <div className="ll"><p>A suggestion from a logistics  specialist,  Adbdurakhmanov Doston</p></div>
    </div>
      <div className="video3 video33">
        <video className="videos" src={video2} controls></video>
        <div><p className='jr'>A master class from a dispatching specialist, Rustamov Rahmatulloh</p></div>
      </div>
      <div className="video3 video333">
      <video controls className="videos" src={video3}></video>
      <div className="ll lll"><p>An insight on studying at the academy  <br /> from an HR manager, Akhmadjanov Farrukh</p></div>
      </div>
    </div>

  </SwiperSlide>

  <SwiperSlide className="slides">
  <div className="videos1 ot">
<div className="video1 push1">
<video controls className="videos" src={video8}></video>

<div className="m1">
<p>A comment from the academy graduate and Fleet specialist, Usmanov Abdukadir</p>
</div>

</div>
    <div className="video2 push2">
    <video controls className="videos" src={video4}></video>
 
   <div className="m2">   <p>BIG-I STUDY is something you are looking for to be your own professional_Nurmukhammad Rustamov_GTL Logistics Update specialist</p></div>
  
    </div>
    <div className="video3 push3">
    <div className="video2"><video controls className="videos" src={video9}></video>

      <div className="m3"><p>My journey to an earning stage at logistics_Akhrorkhanov Azizbek_ELD manager</p></div></div>
    </div>
  </div>
  </SwiperSlide>

</Swiper>


      </div>

      <main id="Facts">
      <div id="Ab" className="About">
          <h2>Facts About Our Course</h2>
          <p>Still wondering if you need to go to logistics</p>
          <div className="chiziq">

          </div>
      </div>  
      <div className="fact-container">
        <div className="fact fact1">
          <img src={langs} alt="" />
          <h4>Language upgrade</h4>
          <p>Before the main course, your English will be upgraded through American Business English Expertise!</p>
          <img className="arrow1" src={rightarrow} alt="" />
        </div>
        <div className="fact fact2">
          <img src={truck} alt="" />
          <h4>Trucking Management Mastery
          </h4>
          <p>After the main course, you get armed with all the necessary knowledge on managing trucking business, including carrying out operations through online platforms, websites and app resource kits!</p>
          <img className="arrow2" src={rightarrow} alt="" />
        </div>
        <div className="fact fact3">
          <img src={quality} alt="" />
          <h4 className="qua">Quality Logistics Education</h4>
          <p>During the main course, what you get most is quality education integrated with solid work ethics and long-term experience on transportation logistics!</p>
          <img className="arrow3" src={rightarrow} alt="" />
        </div>
      </div>
      </main>
      <div id="Statistics" className="About okay">
          <h2>GLOBAL LOGISTICS STATISTICS</h2>
          <p>Thousands of cargo shipments a day and lots of opportunities</p>
          <div className="chiziq">

          </div>
      </div> 


      <main>
        <section className="main">
          <div className="card">
            <h4>Statistics #1</h4>
            <p>The trucking industry earned close to $900 billion in revenue in 2023.</p>
            <div className="hundred">
              <div className="foiz"></div>
            </div>
          </div>
          <div className="card">
            <h4>Statistics #2</h4>
            <p>There are about 3.5 million employed truck drivers in the U.S. as of 2023.</p>
              <div className="hundred">
              <div className="foiz">

              </div>
              </div>
          </div>
        </section>
        <div className="then">
        <div className="small sm3">
            <h4>Statistics #3</h4>
            <p>There are over 1 million for-hire trucking carriers in the U.S.</p>
            <div className="hundred">
              <div className="foiz ns">
              <p className="ss">Applications 88%</p>
              </div>
              </div>
          </div>
          <div className="big">
            <h4>Statistics #4</h4>
            <p>The U.S. trucking industry generated revenue that was worth more than the Gross Domestic Product (GDP) of at least 150 countries combined in 2023</p>
            <div className="hundred">
              <div className="foiz">
                <p>Height 100%</p>
              </div>
              </div>
          </div>
          <div className="small sm2">
            <h4>Statistics #6</h4>
            <p>U.S. trucks moved over 11 billion tons of freight in the U.S.</p>
            <div className="hundred">
              <div className="foiz">
                <p>passes about 314,840 km.
                </p>
              </div>
              </div>
          </div>

        </div>
      </main>

      <div className="ng">
      <div className="later">
      <div className="sml">
            <h4>Statistics #3</h4>
            <p>There are over 1 million for-hire trucking carriers in the U.S.</p>
            <div className="hundred">
              <div className="foiz ns">
              <p className="ss">Applications 88%</p>
              </div>
              </div>
      </div>
      <div className="sml">
            <h4>Statistics #4</h4>
            <p>U.S. trucks moved over 11 billion tons of freight in the U.S.</p>
            <div className="hundred">
              <div className="foiz">
                <p>passes about 314,840 km.
                </p>
              </div>
              </div>
      </div>
      <div className="sml g">
            <h4>Statistics #5</h4>
            <p>The U.S. trucking industry generated revenue that was worth more than the Gross Domestic Product (GDP) of at least 150 countries combined in 2023.</p>
            <div className="hundred">
              <div className="foiz">
                <p>100%
                </p>
              </div>
              </div>
      </div>

      </div>
      </div>
      <div onClick={() => {
  SetBig(false);
  SetBig1(false);
}} id="Partners" className="About">
          <h2>Partners</h2>
          <p>Companies who trust us</p>
          <div className="chiziq end">

          </div>
      </div> 



      <div className="ticker">
  <div className="ticker-track">
  <a href="https://aravancargo.com/"><img src={arava} alt="" /></a>
<a href="https://artellogistics.com/"><img src={artel} alt="" /></a>
<a href="https://www.d2dtransport.org/"><img src={dock} alt="" /></a>
<a href="https://expresscargo.uz/"><img src={express} alt="" /></a>
<a href="https://www.eoglobalinc.com/"><img src={global} alt="" /></a>
<a href="https://www.linkedin.com/company/hally-express-inc"><img src={hally} alt="" /></a>
<a href="https://it-park.uz/uz/itpark/news/namangan-viloyatida-yangi-it-markaz-ochildi"><img src={itpark} alt="" /></a>
<a href="instagram.com/taxir.logistics/"><img src={taxir} alt="" /></a>
<a href="https://www.nooreldsolutions.com/Contact"><img className="noor" src={noor} alt="" /></a>

  </div>
</div>

<footer onClick={() => {
  SetBig(false);
  SetBig1(false);
}}>
  <div className="address">
    <h4>Our address</h4>
    <p>Namangan IT PARK 2nd house, Amir Temur street, Namangan city, Namangan region, Republic of Uzbekistan</p>
    <iframe
        title="My Location"
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24088.554169029252!2d71.659337!3d41.001857!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzA2LjciTiA3McKwMzknMzMuNiJF!5e0!3m2!1sen!2sus!4v1755135674384!5m2!1sen!2sus"
        width="100%"
        height="200px"
        style={{ border: 0 ,borderRadius: '15px', marginTop: '35px'}}
        allowFullScreen
        loading="lazy"
        className="brr"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  </div>
 <div className="other">
 <div className="documents">
    <h4>Documents</h4>
   <a href="https://bigi.uz/static/media/Tasdiqnoma.5d52b6f1064f55a1ac7a.pdf"><p>licence</p></a>
    <a href="https://bigi.uz/static/media/Tasdiqnoma.5d52b6f1064f55a1ac7a.pdf"><p>Certificate</p></a>
   <a href="https://bigi.uz/static/media/Affidavit.2bf6195cbde30d929bb1.pdf" ><p>Affidavit</p>  </a>
  </div>
  <div className="email ss">
      <h4>E-mail</h4>
      <a href="mailto:studybigi@gmail.com">
  <p>studybigi@gmail.com</p>
</a>

  </div>
  <div className="contact">
    <h4>Contact numbers</h4>
    <p>+998 95 727 00 17</p>
    <p>+99890 553 90 95</p>
  </div>
 </div>
 
  <p className="copy ofenglish">Copyright © 2025 ETAMIN</p>
</footer>

<div className="footer">
  <div className="manzil">
  <h4>Our address</h4>
    <p>Namangan IT PARK 2nd house, Amir Temur street, Namangan city, Namangan region, Republic of Uzbekistan</p>
    <iframe
        title="My Location"
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24088.554169029252!2d71.659337!3d41.001857!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzA2LjciTiA3McKwMzknMzMuNiJF!5e0!3m2!1sen!2sus!4v1755135674384!5m2!1sen!2sus"
        width="300px"
        height="200px"
        style={{ border: 0 ,borderRadius: '15px', marginTop: '35px'}}
        allowFullScreen
        loading="lazy"
        className="brr"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  </div>
  <div className="dokument">
  <h4>Documents</h4>
   <a href="https://bigi.uz/static/media/Tasdiqnoma.5d52b6f1064f55a1ac7a.pdf"><p>licence</p></a>
    <a href="https://bigi.uz/static/media/Tasdiqnoma.5d52b6f1064f55a1ac7a.pdf"><p>Certificate</p></a>
   <a href="https://bigi.uz/static/media/Affidavit.2bf6195cbde30d929bb1.pdf" ><p>Affidavit</p>  </a>
  </div>
  <div className="kontakt">
  <h4>Contact numbers</h4>
    <p>+998 95 727 00 17</p>
    <p>+99890 553 90 95</p>
  </div>
  <div className="eemail">
    <h4>email</h4>
    <p>studybigi@gmail.com</p>
  </div>
  <div className="dip1">
    <img src={certificate} alt="" />
  </div>
  <div className="dip2">
    <img src={certificate2} alt="" />
  </div>
  <div className="div">
  Copyright © 2025 ETAMIN
  </div>
</div>

<div className="cer">
  <div className="cer1">
    <img  onClick={small}  src={certificate} alt="" />
  
{big && (
  <div className="bigimage">
    <img src={certificate} alt="" />
    <RxCross1 
      className="exit" 
      onClick={() => SetBig(false)} // Exit bosilganda yopiladi
    />
  </div>
)}
{big1 && (
  <div className="bigimage1 bi">
   <img src={certificate2} alt="" />
    <RxCross1 
      className="exit" 
      onClick={() => SetBig1(false)} // Exit bosilganda yopiladi
    />
  </div>
)}
<p className="right">Copyright © 2024
ETAMIN</p>

  </div>
  <div className="cer2">
      <img  onClick={small1}  src={certificate2} alt="" />
     
  </div>
 </div>

    </>
  );
}
