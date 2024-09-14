/**
* Template Name: Personal
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  
function uianimated() {
  var uianimateds = document.querySelectorAll('.uianimated');

  for (var i = 0; i < uianimateds.length; i++) {
    var windowheight = window.innerHeight;
    var uianimatedtop = uianimateds[i].getBoundingClientRect().top;
    var uianimatedpoint = 40;

    if (uianimatedtop < windowheight - uianimatedpoint) {
      uianimateds[i].classList.add('active');
    } else {
      uianimateds[i].classList.remove('active');
    }
  }
}

function onPageload() {
  uianimated();
  window.addEventListener('scroll', uianimated);
}

window.addEventListener('load', onPageload);

  $(document).ready(function () {
    const texts = [
      "Engenheiro de software",
      "Web Designer",
      "Arquiteto de software",
      "Cientista de dados",
      "Especialista em AI",
      "Desenvolvedor IoT"
    ];

    const options = {
      strings: texts,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1500,
      startDelay: 0,
      loop: true,
    };

    const typed = new Typed('#text', options);
  });

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

 

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    portfolio();
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }


  




  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()


function portfolio(){
  var portData = [
      {
        img: 'assets/img/new-portfolio/9.png',
        name: 'Vantage IoT',
        description: 'Software de IoT e inteligência artificial que mede a temperatura, carga e rotação de cada rolo em transportadores de minério. Esses rolos inteligentes permitem que os transportadores sejam operados e mantidos como ativos críticos na planta, prevenindo diversos acidentes e incêndios, além de otimizar o desempenho e facilitar a manutenção preditiva.',
        link: 'https://superior-ind.com/vantage/'
      },
      {
        img: 'assets/img/new-portfolio/10.png',
        name: 'PIPRDC',
        description: 'Software de inteligência artificial capaz de prever o desenvolvimento de diversas doenças crônicas. Utilizando dados clínicos e laboratoriais, o sistema analisa padrões e indicadores de saúde para fornecer previsões precisas, ajudando a antecipar e prevenir condições como alguns tipos de câncer, diabetes, doenças cardíacas e outras enfermidades crônicas.',
        link: 'https://periodicos.ufba.br/index.php/RFD/article/view/60077'
      },
      {
        img: 'assets/img/new-portfolio/1.png',
        name: 'Passagens e Milhas',
        description: 'Este website foi cuidadosamente projetado para oferecer uma experiência envolvente e informativa aos visitantes, representando a agência de assessoria de viagens de forma excepcional. Com um design moderno e intuitivo, o objetivo principal era atrair novos clientes ao destacar os serviços e benefícios exclusivos oferecidos pela agência.',
        link: 'https://passagensemilhas.com.br/'
      },
      {
        img: 'assets/img/new-portfolio/11.png',
        name: 'Gatefy',
        description: 'Gateway de e-mail baseado em inteligência artificial para segurança de e-mails empresariais. Capaz de processar milhões de e-mails, o sistema previne vazamentos de dados e bloqueia ataques avançados, como phishing, BEC (Business Email Compromise), DDoS, malware, ransomware e spam.',
        link: 'https://gatefy.com/pt-br/'
      },
      {
          img: 'assets/img/new-portfolio/3.png',
          name: 'HLO Therapy',
          description: 'Utilizando uma abordagem de design contemporâneo, o site foi meticulosamente projetado para cativar o público-alvo, oferecendo uma experiência de navegação intuitiva e envolvente. Com uma combinação de elementos visuais impactantes, layouts elegantes e uma paleta de cores vibrantes, o site transmite energia e vitalidade, refletindo fielmente a atmosfera estimulante da HLO Therapy.  O site conta também com um painel administrativo intuitivo para gerir os preços, horários e todo conteúdo do site',
          link: 'https://hlotherapy.com.br'
      },
      {
        img: 'assets/img/new-portfolio/8.png',
        name: 'Pereira Advocacia',
        description: 'Com design profissional e navegação simplificada, o site visa destacar a expertise da empresa e facilitar o acesso a serviços jurídicos. Além disso, apresenta um blog informativo, oferecendo insights jurídicos relevantes e atualizados. O site fortalece a presença online da Pereira Advocacia como referência no ramo jurídico, combinando conteúdo de qualidade com uma experiência de usuário envolvente.',
        link: 'https://douglaspereira.adv.br'
      },
      {
        img: 'assets/img/new-portfolio/5.png',
        name: 'Mantoan Serviços',
        description: 'O site destaca a experiência e a qualidade dos serviços oferecidos. Além disso, apresenta informações detalhadas sobre os serviços prestados e os padrões de segurança adotados. Este website reforça a reputação da Mantoan Serviços como líder no setor, oferecendo uma plataforma confiável para clientes em potencial.',
        link: 'https://mantoanservicos.com.br/'
      },
      
      {
        img: 'assets/img/new-portfolio/2.png',
        name: 'Fábrica de campeões',
        description: 'Com design dinâmico e informações claras sobre horários e programas, o site visa atrair novos alunos destacando os benefícios do judô e o ambiente acolhedor do dojô. Uma ferramenta eficaz para impulsionar o crescimento e fortalecer a reputação da academia.  O site conta também com um painel administrativo intuitivo para gerir o conteúdo do site',
        link: 'https://www.eaglestore.net.br/dojo'
      },
      
      {
        img: 'assets/img/new-portfolio/7.png',
        name: 'Santa Ostra',
        description: 'O site institucional da Santa Ostra não só oferece informações abrangentes sobre seus serviços de venda e transporte de frutos do mar, mas também se destaca por seu design bonito e moderno. Com uma interface atraente e fácil de usar, os visitantes podem explorar os serviços da empresa de forma intuitiva e agradável. A Santa Ostra combina funcionalidade e estética para proporcionar uma experiência online envolvente e satisfatória. A Santa Ostra tem se tornado uma grande parceira, estamos desenvolvendo um ERP completo para auxiliar na logística do negócio.',
        link: 'https://santaostra.com.br/'
      },
      {
        img: 'assets/img/new-portfolio/6.png',
        name: 'Eagles Store',
        description: 'A Eagles Store, agora ocupa o primeiro lugar nas pesquisas do Google na região para diversos termos relacionados. Com um catálogo diversificado e interface amigável, oferece uma experiência de compra única para os praticantes de judô locais, consolidando-se como a escolha número um para equipamentos de qualidade na área. O site conta também com um painel administrativo intuitivo para gerir os produtos e o conteúdo do site.',
        link: 'https://www.eaglestore.net.br/'
    },
      
  ];

  var portWrapper = document.getElementById('portfolio-wrapper');
  
  let colState = 0; // Inicialize o estado das colunas

for (data of portData) {
    const order1 = colState === 0 ? 'order-md-1' : 'order-md-2';
    const order2 = colState === 0 ? 'order-md-2' : 'order-md-1';

    const imageDiv = `
        <div class="col-lg-6 col-md-6 portfolio-item filter-app  uianimated delay-200 ${order1}">
            <img src="${data.img}" class="rounded" width="100%" alt="Screen">
        </div>
    `;
    const textDiv = `
        <div class="col-lg-6 p-lg-4 col-md-6 m-0 p-0 text-sm-center text-md-start uianimated delay-200 row align-items-center ${order2}">
            <div>
              <h2 class="my-2 ux-title">${data.name}</h2>
              <p class="my-2 portfolio-description">${data.description}</p>
              <a class="p-2 my-4 px-4 btn btn-dark border-success" href="${data.link}" target="blank" title="Portfolio Details"><i class="bx bx-link"></i> Visitar</a>
            </div>
        </div>
    `;

    portWrapper.innerHTML += `
        <div class="row mb-5">
            ${imageDiv}
            ${textDiv}
        </div>
    `;

    colState = 1 - colState;
}





}



