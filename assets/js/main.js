/**
* Template Name: Personal
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

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
        img: 'assets/img/portfolio/passagens.png',
        name: 'Passagens e Milhas',
        description: 'Landing Page para agência de assessoria de viagem a fim de atrair novos clientes',
        link: 'https://passagensemilhas.com.br/'
      },
      {
          img: 'assets/img/portfolio/hlo.png',
          name: 'HLO Therapy',
          description: 'Web site moderno e responsivo para atrair novos alunos para o centro de treinamento',
          link: 'https://hlotherapy.com.br'
      },
      
      {
          img: 'assets/img/portfolio/prestes.png',
          name: 'Construtora Prestes',
          description: 'Web Site para venda de apartamentos na planta pela construtora Prestes e controle interno.',
          link: 'https://www.prestes.com/'
      },
      {
        img: 'assets/img/portfolio/campeoes.png',
        name: 'Fábrica de campeões',
        description: 'Web site moderno e responsivo para atrair novos alunos para o dojô',
        link: 'https://www.eaglestore.net.br/dojo'
      },
      {
          img: 'assets/img/portfolio/eagles.png',
          name: 'Eagles Store',
          description: 'Exposição de produtos com foco em SEO se tornando o head do google para venda de artigos de judô na cidade',
          link: 'https://www.eaglestore.net.br/'
      },
      {
          img: 'assets/img/portfolio/gatefy.png',
          name: 'Gatefy',
          description: 'Sistema com Inteligência artificial de segurança de email para empresas',
          link: 'https://gatefy.com/pt-br/'
      },
      {
          img: 'assets/img/portfolio/mk.png',
          name: 'MKBank',
          description: 'Banco digital completo com tecnologias de ponta como blockchain.',
          link: 'https://www.mkbank.com.br/mk-pt/'
      },
      {
          img: 'assets/img/portfolio/vantage.png',
          name: 'Vantage IoT',
          description: 'Monitoramento de transportadores de minério evitando incêndios florestais catastróficos salvando muitas vidas.',
          link: 'https://superior-ind.com/vantage/'
      },
      
      {
        img: 'assets/img/portfolio/pousadacma.png',
        name: 'Pousada CMA',
        description: 'Landing Page para pousada em São Paulo para atrair novos hóspedes',
        link: 'https://pousadacma.com.br/'
      },
      {
        img: 'assets/img/portfolio/santaostra.png',
        name: 'Santa Ostra',
        description: 'Landing Page para empresa de venda e transporte de frutos do mar para atrair novos clientes',
        link: 'https://santaostra.com.br/'
      },
  ];

  var portWrapper = document.getElementById('portfolio-wrapper');

  for (data of portData) {
    portWrapper.innerHTML += `

        <div class="col-lg-6 col-md-6 portfolio-item filter-app" style="cursor: context-menu;">
          <div class="portfolio-wrap">
            <img src="${data.img}" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>${data.name}</h4>
              <p class="m-lg-4 m-2">${data.description}</p>
              <div class="portfolio-links">
                <a style="font-size: 15px;" class="mt-2 p-2 btn btn-transparent border" href="${data.link}" target="blank" title="Portfolio Details"><i class="bx bx-link"></i> Visitar</a>
              </div>
            </div>
          </div>
        </div>
    
      
    
    `;
  }




}

