// slider-swiper

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  clickable: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    // Екран менше 600px
    600: {
      slidesPerView: 3.5, // Один слайд на екрані
      spaceBetween: 10, // Відстань між слайдами
    },
  },
});

let modalBlock = document.querySelector(".lang");
let body = document.querySelector(".body");
let landOpen = document.querySelector(".modal-open-lang");
let fotoSvg = document.querySelector(".img-svg");
document.addEventListener("click", (e) => {
  if (!modalBlock.contains(e.target) && !landOpen.contains(e.target)) {
    landOpen.classList.remove("display-block");
    modalBlock.classList.remove("color");
    fotoSvg.setAttribute("src", "./images/language.svg");
  }
});

modalBlock.addEventListener("click", () => {
  landOpen.classList.add("display-block");
  modalBlock.classList.add("color");
  fotoSvg.setAttribute("src", "./images/language-active.svg");
});
// next -block
let nextModalBlock = document.querySelector(".next-modal-window");
let officeBottom = document.querySelector(".office-buttom");

if (nextModalBlock && officeBottom) {
  document.addEventListener("click", (e) => {
    if (
      !nextModalBlock.contains(e.target) &&
      !officeBottom.contains(e.target)
    ) {
      nextModalBlock.classList.remove("display-block");
    }
  });

  officeBottom.addEventListener("click", (e) => {
    e.stopPropagation();
    nextModalBlock.classList.add("display-block");
  });
}

let modalWindowOpen = document.querySelector(".modal-window-open");
let lastModal = document.querySelector(".last-modal");

if (lastModal && modalWindowOpen) {
  document.addEventListener("click", (e) => {
    if (!lastModal.contains(e.target) && !modalWindowOpen.contains(e.target)) {
      lastModal.classList.remove("display-block");
    }
  });

  modalWindowOpen.addEventListener("click", (e) => {
    e.stopPropagation();
    lastModal.classList.add("display-block");
  });
}
document.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    lastModal.classList.remove("display-block");
  }
});

// Ініціалізація GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const containers = document.querySelectorAll(".scroll-item-container");

gsap.to(containers, {
  scale: (index, target, targets) => 1 - (targets.length - 1 - index) * 0.1,
  stagger: {
    amount: 1,
    from: "start",
  },
  scrollTrigger: {
    trigger: ".scroll-block-wrapper",
    start: "end end",
    end: "bottom center",
    scrub: true,
    markers: false,
  },
});
// Анімація для зміни фото
const firstFoto = document.querySelector(".change-foto:not(.second-foto)");
const secondFoto = document.querySelector(".second-foto");

gsap.to(firstFoto, {
  opacity: 0,
  scrollTrigger: {
    trigger: ".three",
    start: "top 50%",
    end: "top 10%",
    scrub: true,
    onEnter: () => {
      firstFoto.style.opacity = "0";
      secondFoto.style.opacity = "1";
    },
    onLeaveBack: () => {
      firstFoto.style.opacity = "1";
      secondFoto.style.opacity = "0";
    },
  },
});
// Анімація для плавного відображення блоку
gsap.fromTo(
  ".menu-wrapper",
  { opacity: 0, y: 50 }, // Початковий стан
  { opacity: 1, y: 0, duration: 2, ease: "power2.out" } // Кінцевий стан
);

// tabs

let wrapper = document.querySelector(".wrapper");
let title = document.querySelectorAll(".tab-title");
let content = document.querySelectorAll(".content");

function hiTabsContent() {
  content.forEach((item) => item.classList.add("hide"));
  title.forEach((item) => item.classList.remove("tab-active"));
}

function showContent(i = 0) {
  content[i].classList.add("show");
  content[i].classList.remove("hide");
  title[i].classList.add("tab-active");
}
hiTabsContent();
showContent();

wrapper.addEventListener("click", (event) => {
  if (event.target.classList.contains("tab-title")) {
    title.forEach((item, i) => {
      if (item === event.target) {
        hiTabsContent();
        showContent(i);
      }
    });
  }
});

let purpleSpan = document.querySelectorAll(".purple-circle");
let horizontalLine = document.querySelectorAll(".horizontal");
let block = document.querySelectorAll(".puncts");
let paragraphs = document.querySelectorAll(".puncts-paragraph");

purpleSpan.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Перевірка, чи цей пункт вже відкритий
    if (horizontalLine[index].classList.contains("transforms")) {
      // Якщо відкритий — закриваємо його
      horizontalLine[index].classList.remove("transforms");
      paragraphs[index].classList.remove("shows");
    } else {
      // Якщо не відкритий — спочатку закриваємо всі пункти
      horizontalLine.forEach((line) => line.classList.remove("transforms"));
      paragraphs.forEach((paragraph) => paragraph.classList.remove("shows"));

      // Відкриваємо поточний пункт
      horizontalLine[index].classList.add("transforms");
      paragraphs[index].classList.add("shows");
    }
  });
});
let languagesSpan = document.querySelector(".languages-span");
const allLanguages = ["ua", "en"];
let currentLanguages = "ua"; // Замінено const на let
const languagesButtons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
let currentTextObject = {};
const someObj = {
  Features: {
    ua: "Можливості",
    en: "Features",
  },
  whyUs: {
    ua: "Чому ми",
    en: "Why us",
  },
  Features1: {
    ua: "Можливості",
    en: "Features",
  },
  whyUs1: {
    ua: "Чому ми",
    en: "Why us",
  },
  openOffice: {
    ua: "Увійти в кабінет",
    en: "Log in",
  },
  mainTitle: {
    ua: "свою цінову стратегію",
    en: "your pricing strategy",
  },
  optimize: {
    ua: "Оптимізуйте",
    en: "Optimize",
  },
  mainParagraph: {
    ua: "Надійний сервіс для моніторингу цін конкурентів",
    en: "The ultimate tool for monitoring competitors' prices",
  },
  blackButton: {
    ua: "Обговорити співпрацю",
    en: "Contact sales",
  },
  openOfficenext: {
    ua: "Увійти в кабінет",
    en: "Log in",
  },
  SmallText: {
    ua: "Оберіть версію додатку",
    en: "Choose the application version",
  },
  sliderTitle: {
    ua: "Що пропонує OMPrice",
    en: "Discover what OMPrice offers",
  },
  firstSlideTitle: {
    ua: " Масове вивантаження цін",
    en: "Bulk price export",
  },
  firstSlideParagraph: {
    ua: "  Отримуйте детальний зріз цін за артикулами по всіх конкурентах у зручному форматі для обраного сегменту або категорії.",
    en: "Get a detailed report of prices by SKU across all competitors in a convenient format tailored to your selected segment or category.",
  },
  secondSlideTitle: {
    ua: "Динаміка зміни ціни",
    en: "Price change dynamics",
  },
  secondSlideParagraph: {
    ua: " Ми надаємо детальний звіт про історію змін цін на обрані товари для виявлення тенденції та прогнозування змін.",
    en: "We provide a comprehensive report on the price history of selected products, helping you identify trends and forecast changes.",
  },
  ThirdSlideTitle: {
    ua: "Цінові аларми",
    en: "Price alerts",
  },
  thirdSlideParagraph: {
    ua: " Ми сповіщаємо вас одразу, коли змінюється ціна або наявність товару, щоб ви могли миттєво реагувати.",
    en: "Receive instant notifications when a product’s price or availability changes, enabling you to react promptly.",
  },
  forchdSlideTitle: {
    ua: "Аналіз структури асортименту",
    en: "Assortment structure analysis",
  },
  forchdSlideParagraph: {
    ua: " Вивчайте розподіл товарів за ціновими сегментами за допомогою аналізу цінових третин.",
    en: "Analyze the distribution of products across price segments using price-tier analysis for better market insights.",
  },
  fiveSlideTitle: {
    ua: "Цінова різниця",
    en: "Price differentials",
  },
  fiveSlideParagraph: {
    ua: "Знаходьте відхилення між цінами ваших товарів та цін конкурентів, щоб отримати прихильність покупців.",
    en: "Identify discrepancies between your product prices and those of competitors to gain a competitive edge and attract customers.",
  },
  lastSlideTitle: {
    ua: "Порівняння цін",
    en: "Price comparison",
  },
  lastSlideParagraph: {
    ua: " Порівнюйте ціні на товар у різних точках продажу з Oh My Price та слідкуйте за ринковими тенденціями.",
    en: "Compare product prices across different points of sale with Oh My Price and stay updated on market trends.",
  },
  whyChooseUs: {
    ua: "Чому обирають нас?",
    en: "Why businesses trust OMPrice",
  },
  oneColorfullParagraph: {
    ua: "надійність, перевірена часом",
    en: "reliability you can trust",
  },
  onePrice: {
    ua: "15 років досвіду",
    en: "15 years of experience",
  },
  oneParagraph: {
    ua: "Ми навчилися передбачати ваші потреби. Не гадаємо, а точно знаємо, як забезпечити ефективність. Ваш бізнес — наш пріоритет, і кожен крок виважений досвідом.",
    en: "We’ve mastered the art of anticipating your needs. We don’t guess; we know exactly how to drive efficiency. Your business is our priority; every step we take is backed by years of expertise.",
  },
  twoColorfullParagraph: {
    ua: "повна картина ринку в одному місці",
    en: "complete market overview in one place",
  },
  twoPrice: {
    ua: "860 000 товарів у базі",
    en: "860,000 products in database",
  },
  twoParagraph: {
    ua: "OMPrice допомагає приймати обґрунтовані рішення. Ви отримуєте актуальні дані в реальному часі, щоб контролювати цінові зміни і тенденції ринку.",
    en: "OMPrice empowers you to make the right decisions—access real-time, up-to-date data to stay on top of price changes and market trends.",
  },
  threeColorfullParagraph: {
    ua: "точність і гарантована надійність",
    en: "accuracy you can rely on",
  },
  threePrice: {
    ua: "250 джерел для збору даних",
    en: "250 data sources",
  },
  threeParagraph: {
    ua: "Ви можете бути впевнені в надійності та точності даних, адже ми збираємо їх з перевірених джерел. Ми постійно додаємо нові джерела, щоб ви завжди могли діяти швидко й впевнено.",
    en: "Rest assured your data is reliable and precise. We collect information from trusted sources and continuously expand our list to ensure you can act swiftly and confidently.",
  },
  fourColorfullParagraph: {
    ua: "оперативність у кожному рішенні",
    en: "speed in every decision",
  },
  fourPrice: {
    ua: "4 350 000 цін щодня",
    en: "4,350,000 prices",
  },
  fourParagraph: {
    ua: "Ми щодня відстежуємо ціни. Завдяки постійним оновленням ви отримуєте точні дані, які допоможуть приймати рішення швидко і з максимальним результатом.",
    en: "We monitor prices daily. With constant updates, you gain accurate insights to make quick, high-impact decisions.",
  },
  onePurpleBlock: {
    ua: "Ваші цілі + OMPrice = Ви завжди на крок попереду конкурентів",
    en: "Always one step ahead of the competition",
  },
  buiding: {
    ua: "Будуйте стратегію на актуальних даних",
    en: "Build your strategy on up-to-date data",
  },
  oneTab: {
    ua: "Цінові коливання",
    en: "Price changes",
  },
  twoTab: {
    ua: "Ціноутворення",
    en: "Pricing process",
  },
  threeTab: {
    ua: "Тренди ринку",
    en: "Market trends",
  },
  oneTabTitle: {
    ua: "Швидко реагуйте на зміну ціни конкурента",
    en: "React quickly to competitor price changes",
  },
  oneTabParagraph: {
    ua: "Отримуйте актуальні дані про зміни цін конкурентів і адаптуйте свою стратегію в режимі реального часу.",
    en: "Get up-to-date data on competitor price changes and adjust your strategy in real time.",
  },
  twoTabTitle: {
    ua: "Оптимізуйте процес ціноутворення",
    en: "Optimize your pricing process",
  },
  twoTabParagraph: {
    ua: "Використовуйте точні дані та адаптовані звіти, щоб спростити та пришвидшити встановлення цін на основі актуальних ринкових показників.",
    en: "Leverage accurate data and customized reports to streamline and accelerate pricing decisions based on current market trends.",
  },
  threeTabTitle: {
    ua: "Відстежуйте тренди цін на ринку",
    en: "Track market price trends",
  },
  threeTabParagraph: {
    ua: "Отримуйте важливу інформацію про цінові коливання раніше за інших та швидко реагуйте на зміни, щоб залишатися лідером.",
    en: "Gain valuable insights into price fluctuations before others, and respond swiftly to changes to stay ahead of the competition.",
  },
  tabButton: {
    ua: "Обговорити співпрацю",
    en: "Contact sales",
  },
  tabButton1: {
    ua: "Обговорити співпрацю",
    en: "Contact sales",
  },
  tabButton2: {
    ua: "Обговорити співпрацю",
    en: "Contact sales",
  },
  tabButton3: {
    ua: "Обговорити співпрацю",
    en: "Contact sales",
  },
  smallText: {
    ua: "Інструменти для комплексного аналізу ринку",
    en: "Tools for comprehensive market analysis",
  },
  goodToDo: {
    ua: "Добре вміємо та робимо",
    en: "What we do best",
  },
  oneNumberTitle: {
    ua: "Аналіз акцій та промо-каталогів",
    en: "Promotions analysis",
  },
  oneNumberparagraph: {
    ua: "Дізнавайтеся, які пропозиції використовують конкуренти для впливу на різні категорії товарів і підвищуйте свою конкурентоспроможність.",
    en: "Discover the promotional strategies your competitors are using and gain insights to enhance your market position and competitiveness.",
  },
  twoNumberTitle: {
    ua: "Індивідуальні звіти під ваші потреби",
    en: "Custom reports tailored to your needs",
  },
  twoNumberParagraph: {
    ua: "Вибирайте ключові показники, які важливі саме для вас, і отримуйте детальний аналіз ринку у зручному форматі.",
    en: "Choose key metrics that matter most to you and receive detailed market analysis in a format that works for you.",
  },
  threeNumberTitle: {
    ua: "Використовуємо ваші артикули та номенклатуру",
    en: "Use your SKUs and naming",
  },
  threeNumberParagraph: {
    ua: "Ви можете інтегрувати власні артикули та номенклатурний довідник структури асортименту, щоб зручно та точно моніторити ціни конкурентів.",
    en: "Integrate your SKUs, articles, and barcodes to easily and accurately monitor competitor prices.",
  },
  fourNumberTitle: {
    ua: "Гнучкий моніторинг цін конкурентів",
    en: "Flexible price monitoring",
  },
  fourNumberParagraph: {
    ua: "Легко запускайте додаткові перевірки цін у будь-який час для кращого контролю ринку.",
    en: "Easily initiate additional price checks at any time for better market control.",
  },
  fiveNumberTitle: {
    ua: "Інтеграція з вашими ERP системами через API",
    en: "API integration with your ERP systems",
  },
  fiveNumberParagraph: {
    ua: "Використовуйте наше API для інтеграції з будь-якими ERP системами для більш гнучкої та оперативної роботи з даними.",
    en: "Leverage our API for seamless integration with any ERP systems, enabling more flexible and efficient data management.",
  },
  qestions: {
    ua: "Поширені Запитання",
    en: "Frequently asked questions",
  },
  qestions1: {
    ua: "Вас може зацікавити",
    en: "Things you might want to know",
  },
  oneListTitle: {
    ua: "Звідки сервіс OMPrice бере дані про ціни?",
    en: "Where does OMPrice get its price data from?",
  },
  oneListParagraph: {
    ua: "Ми використовуємо технології скрапінгу та штучний інтелект для збору і аналізу цінової інформації з різних джерел в Інтернеті, таких як вебсайти конкурентів, торговельні платформи та ринкові майданчики.",
    en: "We use automated data collection methods and artificial intelligence to monitor and analyze prices from various sources, including competitor websites and marketplaces.",
  },
  twoListTitle: {
    ua: "Як швидко оновлюються дані про ціни?",
    en: "How often is the price data updated?",
  },
  twoListParagraph: {
    ua: "Дані в нашій системі оновлюються щоденно, забезпечуючи актуальну інформацію. Частота оновлень може бути адаптована до ваших потреб та залежить від джерел даних.",
    en: "Our system updates price data daily, ensuring you have the most up-to-date information. The update frequency can be customized based on your needs and data sources.",
  },
  threeListTitle: {
    ua: "Can OMPrice integrate with other systems?",
    en: "Чи можна інтегрувати з іншими системами?",
  },
  threeListParagraph: {
    ua: "Так, OMPrice легко інтегрується з іншими платформами та системами управління. Ми надаємо API та технічну підтримку на всіх етапах, щоб інтеграція пройшла легко і без затримок.",
    en: "Yes, OMPrice easily integrates with other platforms. We provide API access and technical support at every stage to ensure seamless integration",
  },
  fourListTitle: {
    ua: "What kind of support do you offer?",
    en: "Яку підтримку ви надаєте користувачам?",
  },
  fourListParagraph: {
    ua: "Ми пропонуємо цілодобову підтримку через електронну пошту та онлайн-чат. Крім того, надаємо додаткові матеріали для максимально ефективної роботи з платформою.",
    en: "We offer 24/7 support via email and live chat. Additionally, we provide resources to help you make the most of the platform’s capabilities.",
  },
  fiveListTitle: {
    ua: "Чи гарантуєте ви безпеку даних у OMPrice?",
    en: " Do you guarantee data security in OMPrice?",
  },
  fiveListParagraph: {
    ua: "Безпека даних є нашим головним пріоритетом. Ми використовуємо передові технології шифрування та сучасні засоби захисту, щоб убезпечити ваші дані від несанкціонованого доступу або втрати.",
    en: "Data security is our top priority. We use advanced encryption technologies and modern security measures to protect your data from unauthorized access or loss.",
  },
  sixListTitle: {
    ua: "Які тарифні плани пропонує OMPrice?",
    en: "What pricing plans does OMPrice offer?",
  },
  sixListParagraph: {
    ua: "Ми пропонуємо гнучкі тарифні плани, розроблені з урахуванням потреб різних типів бізнесу.",
    en: "We offer flexible pricing plans designed to meet the needs of different types of businesses.",
  },
  haveQestions: {
    ua: " Залишились питання?",
    en: "Want to know more?",
  },
  nameInput: {
    ua: "Ім'я",
    en: "Your name",
  },
  companyInput: {
    ua: "Ваша компанія",
    en: "Company",
  },
  inputPhone: {
    ua: "Номер телефону",
    en: "Phone",
  },
  menu: {
    ua: "Меню",
    en: "Menu",
  },
  allSecurity: {
    ua: "© Всі права захищені 2024",
    en: "© All rights reserved 2024",
  },
  contacts: {
    ua: "Контакти",
    en: "Contacts",
  },
};

// Функція перевірки шляху сторінки
function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentTextObject = someObj;
      break;

    default:
      currentTextObject = someObj;
      break;
  }
}

checkPagePathName();

// Функція для зміни мови
function changeLang() {
  for (const key in currentTextObject) {
    const elem = document.querySelector(`[data-leng=${key}]`);
    if (elem) {
      // Перевіряємо, чи потрібно оновити контент заголовка з <span>
      if (key === "mainTitle") {
        const spanElement = elem.querySelector(".violet");
        if (spanElement) {
          spanElement.textContent =
            currentTextObject["optimize"][currentLanguages];
        }
        const remainingText = currentTextObject["mainTitle"][currentLanguages];
        elem.childNodes[elem.childNodes.length - 1].textContent =
          " " + remainingText;
      }
      // Перевіряємо, чи це input-поле із placeholder
      else if (elem.placeholder !== undefined) {
        elem.placeholder = currentTextObject[key][currentLanguages];
      }
      // Звичайний текстовий контент
      else {
        elem.textContent = currentTextObject[key][currentLanguages];
      }
    }
  }
}

checkPagePathName();

languagesButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    currentLanguages = event.target.dataset.btn;
    languagesSpan.textContent = btn.textContent;
    landOpen.classList.remove("display-block");
    changeLang();
  });
});
