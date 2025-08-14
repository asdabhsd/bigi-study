import { useState, useEffect } from "react";
import banner from "../assets/banner.png";
import logo from "../assets/Screenshot_2025-08-13_133729-removebg-preview.png";
import { IoCallSharp } from "react-icons/io5";
import { TbMessageDots } from "react-icons/tb";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import  '../components/uzbek.css'
import { NavLink } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";
import video8 from "../videos/video8.mp4";
import video9 from "../videos/video9.mov";
import { Autoplay, Pagination, Navigation,  } from "swiper/modules";
import { HashLink } from "react-router-hash-link";
import language from "../assets/language.png";
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

export default function Uzbek() {

  const [scrolled, setScrolled] = useState(false);

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
      {/* Banner */}
     <div className="uzz">
     <img src={banner} alt="Banner" className="banner" />

{/* Navbar */}
<header>
  <div className={`uz nav ${scrolled ? "scrolled" : ""}`}>
    <div className="container con-uzb">
      <img src={logo} alt="Logo" className="logo" />

      {/* Smooth scroll links */}
      <HashLink smooth to="/uzbek#Home1" className="btn">Asosiy</HashLink>
      
      <div className="s">
          <p>biz</p>
          <p>haqimizda</p>
      </div>
      
      <HashLink smooth to="/uzbek/#News1" className="btn">Yangiliklar</HashLink>
      <HashLink smooth to="/uzbek#Facts1" className="btn">Faktlar</HashLink>
      <HashLink smooth to="/uzbek#Statistics1" className="btn">Statistika</HashLink>
      <HashLink smooth to="/uzbek#Partners1" className="btn">Hamkorlar</HashLink>
      <button className="re double">Registratsiya</button>

      {/* Language selector */}
      
         
      <NavLink to="/" className="language-option">EN</NavLink>
      <NavLink to="/uzbek" className="language-option">UZ</NavLink>
      <NavLink to="/russian" className="language-option">RU</NavLink>
      
    </div>
  </div>
</header>
<HashLink smooth to="/uzbek#About1" className="ni">
<p>Biz haqimizda</p>
</HashLink>
{/* Home Section */}
<section id="Home1" className="text-container">
  <h2>Xalqaro Logistika Akademiyasi!</h2>
  <p className="long-text">
    3 oy ichida talabga ega kasb egasi bo‘ling! <br />
    Ingliz tili B2 darajasida xalqaro transport logistikasini o‘rganing! <br />
    Orzuingizdagi ishga erishish uchun 3 qadam!
  </p>
  <div className="button-container">
    <div className="call">
      <IoCallSharp className="call-icon" />
      <p>Qo‘ng‘iroq</p>
    </div>
    <div className="message">
      <TbMessageDots className="message-icon" />
      <p>Xabar</p>
    </div>
  </div>
</section>

{/* Social icons */}
<section className="social-container">
  <a href="https://t.me/bigiedu_admin"
    target="_blank"
    rel="noopener noreferrer"
    title="BIGI EDU admin bilan suhbat"><FaTelegram className="ico one" /></a>
  <a href="https://www.instagram.com/bigiedu_uz/" target="_blank"> <FaInstagram className="ico two" /></a>
  <a href="https://www.facebook.com/bigi.study" target="_blank" className="ico three" ><FaFacebook /></a>
</section>

{/* About Section */}
<main>
  <div id="About1" className="About">
    <h2>Biz haqimizda</h2>
    <p>Hech logistika sohasida o‘zingizni sinab ko‘rmoqchi bo‘lganmisiz?</p>
    <div className="chiziq"></div>
  </div>

  <div className="About-text">
    <div className="text1">
      <h4>"Ming mil sayohat ko‘plab kichik qadamlarni o‘z ichiga oladi"</h4>
      <h5>- londor shifokor tomonidan</h5>
      <div className="chiziq br"></div>
      <p>
        Energetik, ishtiyoqli va kuch beruvchi a’zolardan iborat BIGI study jamoasi, yuk tashish biznesi darslarini taklif qilish va o‘z tajribalarini bo‘lishishdan hech qachon ikkilanmagan, chunki bu boshqa bizneslarga katta foyda keltirishi mumkin. Natijada, jamoa eng yaxshi transport logistika kurslarini yaratishga muvaffaq bo‘ldi va agar siz ochiq fikrli tizim va aniq maqsadga ega bo‘lsangiz, bu sohaning ijodiy qismi bo‘lish qanday oson va quvonchli bo‘lishini siz bilan bo‘lishishni xohlaymiz.
      </p>
    </div>

    <div className="special">
      Hozir akademiyada o'tkazilayotgan "AQSh Yuk Tashish" kursi 3 bosqichda o‘tiladi.  <br /> <br />
      1️⃣ Bosqich: "Logistika uchun ingliz tili" – talabalarni ingliz tilini umumiy logistika lug‘ati va atamalar orqali rivojlantirishga qaratilgan. 2 hafta davom etadi. Kurs logistika bo‘yicha umumiy tushunchani oshiradi va "Amerika aksenti"ni rivojlantirishga e’tibor beradi.<br /> <br />
      2️⃣ Bosqich: Yuk tashish mutaxassislari uchun kerakli bilim, tushuncha va ko‘nikmalar – dispatching, yangilash, flot, xavfsizlik, buxgalteriya va ELD boshqaruvi shakllantiriladi. Bu bosqich 1 oy davom etadi.<br /> <br />
      3️⃣ Bosqich: Hamkor kompaniyalarda amaliyot va treninglarda stajyor sifatida 1 oy ishlash va "DAROMAD OLISH" bosqichiga o‘tish!<br /><br />
      ✅ Talabalarni suhbat orqali tanlaymiz. Agar sizning ingliz tilingiz B2 yoki undan yuqori bo‘lsa, sizni tez orada ko‘rishni orziqib kutamiz.
    </div>

    <div className="text2">
      <p>
        Tovar va xizmatlarni tashish har doim mamlakat iqtisodiyotining asosiy rivojlantiruvchilaridan biri bo‘lib kelgan. Har bir mamlakat, jumladan O‘zbekiston Respublikasi, partiyalar o‘z ishini muammosiz amalga oshirishi va iqtisodiyotini rivojlantirishi uchun logistikaga tayanadi. Transport vositalari bunga yordam beradi: samolyotlar tovar yetkazadi, kemalar ko‘proq tovar olib keladi, temir yo‘llar esa ulgurji tashuvni amalga oshiradi. Ammo eng ko‘p ishlatiladigan va iqtisodiy o‘sishga eng katta hissa qo‘shadigan transport turi yo‘llar va — ha, to‘g‘ri topdingiz — yuk mashinalari hisoblanadi. Shu sababli, yuk tashish bizni qiziqtiradi, chunki bu mamlakat iqtisodiy o‘sishiga hissa qo‘shadi va 2023 yilda tashkil etilgan BIGI study sizni bu hissa muhim qismi bo‘lishga taklif qiladi.
      </p>
    </div>
  </div>
</main>

{/* News Section */}
<div id="News1" className="News">
  <div className="About new">
    <h2>Yangiliklar</h2>
    <p>Kurslarimiz bo‘yicha so‘nggi yangiliklardan xabardor bo‘ling</p>
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
      document.querySelectorAll(".mySwiper video").forEach((video) => {
        video.pause();
        video.currentTime = 0;
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
    tabIndex={0}
  >
    <SwiperSlide className="slides">
      <video controls className="videos" src={video1}></video>
      <p>Logistika mutaxassisi, Abdurakhmanov Dostonning tavsiyasi</p>
    </SwiperSlide>
    <SwiperSlide className="slides">
      <video controls className="videos" src={video2}></video>
      <p>Dispatching mutaxassisi, Rustamov Rahmatullohning master klasi</p>
    </SwiperSlide>
    <SwiperSlide className="slides">
      <video controls className="videos" src={video3}></video>
      <p>Akademiyada o‘qish bo‘yicha HR menejer, Akhmadjanov Farrukh fikri</p>
    </SwiperSlide>
    <SwiperSlide className="slides">
      <video controls className="videos" src={video4}></video>
      <p>BIG-I STUDY siz qidirayotgan professional bo‘lishingiz uchun_Nurmukhammad Rustamov_GTL Logistics yangilanish mutaxassisi</p>
    </SwiperSlide>
    <SwiperSlide className="slides">
      <video controls className="videos" src={video8}></video>
      <p>Akademiya bitiruvchisi va Flot mutaxassisi, Usmanov Abdukadirning fikri</p>
    </SwiperSlide>
    <SwiperSlide className="slides">
      <video controls className="videos" src={video9}></video>
      <p>Mening logistika bo‘yicha daromad bosqichiga safarim_Akhrorkhanov Azizbek_ELD menejer</p>
    </SwiperSlide>
  </Swiper>
</div>
{/* Facts Section */}
<main id="Facts1">
  <div id="Ab" className="About">
    <h2>Kursimiz bo‘yicha faktlar</h2>
    <p>Hali logistika sohaga borish kerakligini o‘ylayapsizmi?</p>
    <div className="chiziq"></div>
  </div>  

  <div className="fact-container">
    <div className="fact">
      <img src={language} alt="" />
      <h4>Tilni rivojlantirish</h4>
      <p>Asosiy kursdan oldin sizning ingliz tilingiz Amerika biznes inglizi ekspertizasi orqali oshiriladi!</p>
      <img className="arrow1" src={rightarrow} alt="" />
    </div>
    <div className="fact">
      <img src={truck} alt="" />
      <h4>Yuk tashish boshqaruvi bo‘yicha ustalik</h4>
      <p>Asosiy kursdan so‘ng siz yuk tashish biznesini boshqarish bo‘yicha barcha zarur bilimlar bilan qurollanasiz, shu jumladan onlayn platformalar, veb-saytlar va ilova resurslarini ishlatish!</p>
      <img className="arrow2" src={rightarrow} alt="" />
    </div>
    <div className="fact">
      <img src={quality} alt="" />
      <h4 className="qua">Sifatli logistika ta’limi</h4>
      <p>Asosiy kurs davomida eng ko‘p oladigan narsangiz – bu sifatli ta’lim, mustahkam ish etikasi va transport logistikasidagi uzoq muddatli tajriba!</p>
      <img className="arrow3" src={rightarrow} alt="" />
    </div>
  </div>
</main>

{/* Statistics Section */}
<div id="Statit" className="About okay">
  <h2>GLOBAL LOGISTIKA STATISTIKASI</h2>
  <p>Har kuni minglab yuk tashishlar va ko‘plab imkoniyatlar</p>
  <div className="chiziq"></div>
</div> 

<main id="Statistics1">
  <section className="main">
    <div className="card">
      <h4>Statistika #1</h4>
      <p>2023 yilda yuk tashish sohasi taxminan 900 milliard dollar daromad keltirdi.</p>
      <div className="hundred">
        <div className="foiz"></div>
      </div>
    </div>
    <div className="card">
      <h4>Statistika #2</h4>
      <p>2023 yil holatiga ko‘ra, AQShda taxminan 3,5 million ishchi yuk mashinasi haydovchilari ishlaydi.</p>
      <div className="hundred">
        <div className="foiz"></div>
      </div>
    </div>
  </section>
  <div className="then">
    <div className="small">
      <h4>Statistika #3</h4>
      <p>AQShda 1 milliondan ortiq ijaraga yuk tashish kompaniyalari mavjud.</p>
      <div className="hundred">
        <div className="foiz ns">
          <p className="ss">Arizalar 88%</p>
        </div>
      </div>
    </div>
    <div className="big">
      <h4>Statistika #4</h4>
      <p>2023 yilda AQSh yuk tashish sohasi daromadi kamida 150 mamlakatning yalpi ichki mahsulotidan (GDP) ko‘proq edi.</p>
      <div className="hundred">
        <div className="foiz">
          <p>Balandlik 100%</p>
        </div>
      </div>
    </div>
    <div className="small">
      <h4>Statistika #6</h4>
      <p>AQSh yuk mashinalari AQSh bo‘ylab 11 milliard tonnadan ortiq yuk tashidi.</p>
      <div className="hundred">
        <div className="foiz">
          <p>Masofa taxminan 314,840 km.</p>
        </div>
      </div>
    </div>
  </div>
</main>

{/* Partners Section */}
<div id="Partners1" className="About">
  <h2>Hamkorlar</h2>
  <p>Bizga ishonadigan kompaniyalar</p>
  <div className="chiziq end"></div>
</div> 

{/* Ticker Section */}
<div className="ticker">
  <div className="ticker-track">
    <img src={arava} alt="" />
    <img src={artel} alt="" />
    <img src={dock} alt="" />
    <img src={express} alt="" />
    <img src={global} alt="" />
    <img src={hally} alt="" />
    <img src={itpark} alt="" />
    <img src={taxir} alt="" />
    <img className="noor" src={noor} alt="" /> 
  </div>
</div>

{/* Footer Section */}
<footer>
  <div className="address">
    <h4>Bizning manzil</h4>
    <p>Namangan IT PARK 2-uy, Amir Temur ko‘chasi, Namangan shahri, Namangan viloyati, O‘zbekiston Respublikasi</p>
    <iframe
      title="My Location"
      src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24088.554169029252!2d71.659337!3d41.001857!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzA2LjciTiA3McKwMzknMzMuNiJF!5e0!3m2!1sen!2sus!4v1755135674384!5m2!1sen!2sus"
      width="100%"
      height="200px"
      style={{ border: 0, borderRadius: '15px' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <div className="documents">
    <h4>Hujjatlar</h4>
    <p>Litsenziya</p>
    <p>Certifikat</p>
    <p>Ariza</p>
  </div>
  <div className="email">
    <h4>E-mail</h4>
    <p>studybigi@gmail.com</p>
  </div>
  <div className="contact">
    <h4>Aloqa raqamlari</h4>
    <p>+998 95 727 00 17</p>
    <p>+998 99 320 00 17</p>
  </div>
  <p className="copy ofuzbek">Mualliflik huquqi © 2025 ETAMIN</p>
</footer>
     </div>
    </>
  );
}
