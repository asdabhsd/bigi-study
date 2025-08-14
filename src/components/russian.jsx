import { useState, useEffect } from "react";
import banner from "../assets/banner.png";
import logo from "../assets/Screenshot_2025-08-13_133729-removebg-preview.png";

import { IoCallSharp } from "react-icons/io5";
import { TbMessageDots } from "react-icons/tb";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";
import video8 from "../videos/video8.mp4";
import video9 from "../videos/video9.mov";
import { Autoplay,  Pagination, Navigation, } from "swiper/modules";
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
import { NavLink } from "react-router-dom";

export default function Russian() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  
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
    <div className="rus">
    <div className="all">
    <img src={banner} alt="Banner" className="banner" />

{/* Navbar */}
<header>
  <div className={`nav sss ${scrolled ? "scrolled" : ""}`}>
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />

      {/* Smooth scroll links */}
      <HashLink smooth to="/russian#Home" className="btn">Главная</HashLink>
      <HashLink smooth to="/russian#About" className="btn">О нас</HashLink>
      <HashLink smooth to="/russian#News" className="btn">Новости</HashLink>
      <HashLink smooth to="/russian#Facts" className="btn">Факты</HashLink>
      <HashLink smooth to="/russian#Statistics" className="btn">Статистика</HashLink>
      <HashLink smooth to="/russian#Partners" className="btn">Партнеры</HashLink>
      <button className="re">Регистрация</button>

      {/* Language selector */}
     
        
      <NavLink to='/' className="language-option">EN</NavLink>
        <NavLink to="/uzbek" className="language-option">UZ</NavLink>
        <NavLink to="/russian" className="language-option">RU</NavLink>
      
    </div>
  </div>
</header>

{/* Home Section */}
<section id="Home" className="text-container">
  <h2>Международная Академия Логистики!</h2>
  <p className="long-text">
    Освойте востребованную профессию за 3 месяца! <br />
    Международная транспортная логистика с английским уровнем B2! <br />
    3 шага к вашей работе мечты!
  </p>
  <div className="button-container">
    <div className="call">
      <IoCallSharp className="call-icon" />
      <p>Позвонить</p>
    </div>
    <div className="message">
      <TbMessageDots className="message-icon" />
      <p>Сообщение</p>
    </div>
  </div>
</section>

{/* Social icons */}
<section className="social-container">
  <a href="https://t.me/bigiedu_admin"
    target="_blank"
    rel="noopener noreferrer"
    title="Чат с администратором BIGI EDU"><FaTelegram className="ico one" /></a>
  <a href="https://www.instagram.com/bigiedu_uz/" target="_blank"> <FaInstagram className="ico two" /></a>
  <a href="https://www.facebook.com/bigi.study" target="_blank" className="ico three" ><FaFacebook /></a>
</section>

{/* About Section */}
<main>
  <div id="About" className="About">
    <h2>О нас</h2>
    <p>Вы всегда хотели попробовать себя в сфере логистики?</p>
    <div className="chiziq"></div>
  </div>

  <div className="About-text">
    <div className="text1">
      <h4>"Путешествие в тысячу миль начинается с множества маленьких шагов"</h4>
      <h5>- Лондонский доктор</h5>
      <div className="chiziq br"></div>
      <p>
        Команда BIGI Study, состоящая из энергичных, увлечённых и вдохновляющих участников, никогда не сомневалась в том, чтобы предложить курсы по грузоперевозкам и поделиться собственным опытом, так как это может принести пользу другим компаниям. В результате команда смогла создать лучшие курсы транспортной логистики, и мы хотим показать вам, как просто и приятно быть творческой частью этой индустрии при открытом мышлении и ясной цели.
      </p>
    </div>

    <div className="special">
      Курс "Грузоперевозки в США", который сейчас проводится в академии, будет проходить в 3 этапа. <br /><br />
      1️⃣ Этап: "Английский для логистики" — направлен на развитие английского студентов с использованием общего логистического словаря и терминов. Продолжительность: 2 недели. Курс улучшает понимание логистики и акцентирует внимание на американском акценте.<br /><br />
      2️⃣ Этап: Формирование знаний, понимания и навыков, необходимых специалистам по грузоперевозкам: диспетчеризация, обновления, управление парком, безопасность, бухгалтерия и управление ELD. Продолжительность: 1 месяц.<br /><br />
      3️⃣ Этап: Бесплатная практика и стажировка в компаниях-партнерах в течение 1 месяца с переходом к этапу "ЗАРАБОТОК"!<br /><br />
      ✅ Студентов выбираем через собеседование. Если ваш уровень английского B2 или выше, ждем вас в ближайшее время.
    </div>

    <div className="text2">
      <p>
        Транспортировка товаров и услуг всегда была одним из основных стимулов экономики страны. Каждая страна, включая Республику Узбекистан, полагается на логистику для беспроблемного ведения бизнеса и улучшения экономики. Средства транспорта поддерживают это: самолеты доставляют товары, корабли – еще больше, железные дороги – оптом. Но самый популярный и активный вид транспорта, который вносит значительный вклад в экономический рост, — это дороги и, да, вы правильно догадались, грузовики. Поэтому грузоперевозки нас заинтересовали, так как они способствуют экономическому росту страны, и BIGI Study, основанная в 2023 году, хочет, чтобы вы стали важной частью этого процесса.
      </p>
    </div>
  </div>
</main>
{/* News Section */}
<div id="News" className="News">
  <div className="About new">
    <h2>Новости</h2>
    <p>Вы можете быть в курсе последних новостей о наших курсах</p>
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
      <p>Совет специалиста по логистике, Абдурахманов Достон</p>
    </SwiperSlide>
    <SwiperSlide className="slides">
      <video controls className="videos" src={video2}></video>
      <p>Мастер-класс от специалиста по диспетчеризации, Рустамов Рахматулло</p>
    </SwiperSlide>
    <SwiperSlide className="slides">
      <video controls className="videos" src={video3}></video>
      <p>Мнение HR-менеджера о обучении в академии, Ахмаджанов Фаррух</p>
    </SwiperSlide>
    <SwiperSlide className="slides">
      <video controls className="videos" src={video4}></video>
      <p>BIG-I STUDY — это то, что вы ищете, чтобы стать профессионалом, Нурмухаммад Рустамов, специалист по обновлениям GTL Logistics</p>
    </SwiperSlide>
    <SwiperSlide className="slides">
      <video controls className="videos" src={video8}></video>
      <p>Комментарий выпускника академии и специалиста по парку машин, Усманов Абдукадир</p>
    </SwiperSlide>
    <SwiperSlide className="slides">
      <video controls className="videos" src={video9}></video>
      <p>Мой путь к этапу заработка в логистике, Ахрорхан Аязбек, менеджер ELD</p>
    </SwiperSlide>
  </Swiper>
</div>

{/* Facts Section */}
<main id="Facts" className='some'>
  <div id="Ab" className="About">
    <h2>Факты о нашем курсе</h2>
    <p>Все еще думаете, нужно ли идти в логистику?</p>
    <div className="chiziq"></div>
  </div>  

  <div className="fact-container">
    <div className="fact">
      <img src={language} alt="" />
      <h4>Улучшение языка</h4>
      <p>До основного курса ваш английский будет улучшен с помощью американского бизнес-английского!</p>
      <img className="arrow1" src={rightarrow} alt="" />
    </div>
    <div className="fact">
      <img src={truck} alt="" />
      <h4>Мастерство управления грузоперевозками</h4>
      <p>После основного курса вы получите все необходимые знания по управлению бизнесом грузоперевозок, включая работу через онлайн-платформы, сайты и приложения!</p>
      <img className="arrow2" src={rightarrow} alt="" />
    </div>
    <div className="fact">
      <img src={quality} alt="" />
      <h4 className="qua">Качественное логистическое образование</h4>
      <p>Во время основного курса вы получаете качественное образование, интегрированное с этикой работы и долгосрочным опытом в транспортной логистике!</p>
      <img className="arrow3" src={rightarrow} alt="" />
    </div>
  </div>
</main>
<div id="Ab" className="About okay">
  <h2>ГЛОБАЛЬНАЯ СТАТИСТИКА ЛОГИСТИКИ</h2>
  <p>Тысячи грузовых перевозок ежедневно и множество возможностей</p>
  <div className="chiziq"></div>
</div> 

<main id="Statistics">
  <section className="main">
    <div className="card">
      <h4>Статистика #1</h4>
      <p>В 2023 году отрасль грузоперевозок заработала около 900 миллиардов долларов.</p>
      <div className="hundred">
        <div className="foiz"></div>
      </div>
    </div>
    <div className="card">
      <h4>Статистика #2</h4>
      <p>По состоянию на 2023 год в США работает около 3,5 миллиона водителей грузовиков.</p>
      <div className="hundred">
        <div className="foiz"></div>
      </div>
    </div>
  </section>
  <div className="then">
    <div className="small">
      <h4>Статистика #3</h4>
      <p>В США более 1 миллиона компаний, предоставляющих грузовые услуги.</p>
      <div className="hundred">
        <div className="foiz ns">
          <p className="ss">Заявки 88%</p>
        </div>
      </div>
    </div>
    <div className="big">
      <h4>Статистика #4</h4>
      <p>В 2023 году отрасль грузоперевозок США принесла доход, превышающий ВВП как минимум 150 стран вместе взятых.</p>
      <div className="hundred">
        <div className="foiz">
          <p>Высота 100%</p>
        </div>
      </div>
    </div>
    <div className="small">
      <h4>Статистика #6</h4>
      <p>Грузовики США перевезли более 11 миллиардов тонн грузов по стране.</p>
      <div className="hundred">
        <div className="foiz">
          <p>Пройдено примерно 314,840 км</p>
        </div>
      </div>
    </div>
  </div>
</main>

{/* Partners Section */}
<div id="Partners" className="About">
  <h2>Партнеры</h2>
  <p>Компании, которые нам доверяют</p>
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
    <h4>Наш адрес</h4>
    <p>Namangan IT PARK, 2-й дом, улица Амир Темур, город Наманган, Наманганская область, Республика Узбекистан</p>
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
    <h4>Документы</h4>
    <p>Лицензия</p>
    <p>Сертификат</p>
    <p>Аффидевит</p>
  </div>
  <div className="email">
    <h4>E-mail</h4>
    <p>studybigi@gmail.com</p>
  </div>
  <div className="contact">
    <h4>Контактные номера</h4>
    <p>+998 95 727 00 17</p>
    <p>+998 99 320 00 17</p>
  </div>
  <p className="copy ofrussian">Авторские права © 2025 ETAMIN</p>
</footer>
    </div>
    </div>
    </>
  );
}
