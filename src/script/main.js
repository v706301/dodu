jQuery(document).ready(function($){

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){

            $('header').removeClass('nav-down').addClass('nav-up');
        } else {

            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
                $('.nav-down').css('background-color','#171717');
                $('.dropdown_wrapper').slideUp(500);
            }
        }

        lastScrollTop = st;
    }

    // HEADER SUBMENU
    $('.dropbtn').on({
        'click': function () {
            $('.dropdown_wrapper').slideToggle(500).css('display', 'flex');
            $('.header_wrapper').css('background-color', 'rgba(23,23,23,1)');
            $(this).toggleClass('arrowDown arrowUp');
        }
    });


    // Header dropdown hide
    // $(function ($) {
    //     $(document).mouseup(function (e) {
    //         let div = $('.dropdown_wrapper');
    //         let header = $('.header_wrapper');
    //         if (!div.is(e.target) && div.has(e.target).length === 0 ){
    //             div.hide();
    //             header.css('background-color', 'transparent')
    //         }
    //     })
    // });

    //Mobile menu + category list
    $(document).ready(function() {
        $('.dropbtn2').on('click', f_drpd);
    });

    function f_drpd(){
        $('.dropdown_container').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    }


    // $(function () {
    //     $(".menu_category ul li").click(function (e) {
    //         e.preventDefault();
    //         $(".menu_category ul li").removeClass('active');
    //         $(this).addClass('active');
    //     })
    // });

    // Active link
    $(function () {
        let location = window.location.href;
        $('.main_menu li a').toArray().forEach(function(el) {
            let link = $(el).prop('href');
            if (location === link) {
                $(el).addClass('active2');
            }

        });
    });

    // Show more button
    $(".adv_sm_btn").click(function () {
        let $button = $(this);
        let $cont = $button.siblings('.main_gallery');
        $cont.toggleClass('visible_g').toggleClass('hidden_g');
        $button.text($button.text() === "Показать больше" ? "Закрыть": "Показать больше");
        $(this).toggleClass('adv_sm_btn adv_sm_btn2');
    });
    // Blog buttons
    $(".s_m").click(function () {
        let $button1 = $(this);
        let $cont1 = $button1.siblings('.more_posts');
        $cont1.toggleClass('visible_g').toggleClass('hidden_g');
        // $button.text($button.text() === "Показать больше" ? "Закрыть": "Показать больше");
    });
    //Vacancy buttons
    $('.t_btn').click(function () {
        let $vbtn = $(this);
        let $vcont =$vbtn.siblings('.vacancy_item');
        $vcont.slideToggle(500);
    })

    // Category/image switcher
    const catList = {
        // Брендированная одежда
        btn_m: {
            src:'src/img/blue.jpg',
            links: {
                'uniform.html': 'Футболки',
                'test1': 'Сумки и рюкзаки',
                'test2': 'Униформа',
                'test3': 'Флисовые кофты',
                'test4': 'Кепки и бейсболки',
                'test5': 'Жилетки и куртки',
                'test6': 'Фартуки'
            }
        },
        // Наружная реклама
        btn_m1: {
            src:'src/img/yellow.jpg',
            links: {
                'test1': 'Объёмные буквы',
                'test2': 'Вывески',
                'test3': 'Крышные конструкции',
                'test5': 'Лайтбоксы/Световые короба',
                'test6': 'Оформление витрин',
                'test7': 'Обшивка фасада композитом',
                'test11': 'Информационные таблички',
                'test111': 'Оформление входных групп и козырьков',
                'test1111': 'Рекламные конструкции',
                'test22': 'Брендирование транспорта',
                'test222': 'Уличные флажные конструкции',
                'test2222': 'LED Дисплеи'
            }
        },
        // Широкоформатная печать
        btn_m2: {
            src:'src/img/red.jpg',
            links: {
                'test1': 'Печать на баннере',
                'test2': 'Печать на пленке',
                'test3': 'Печать на баннерной сетке',
                'test5': 'Печать на холсте',
                'test6': 'Печать на бумаге',
            }
        },
        // Оформление интерьеров
        btn_m3: {
            src:'src/img/yellow.jpg',
            links: {
                'test1': 'Системы визуальной навигации',
                'test2': 'Стойки Ресепшн',
                'test3': 'Световой логотип',
                'test5': 'Системы освещения',
                'test6': 'Изготовление фотозон',
                'test7': 'Уголки покупателя',
                'test11': 'Изготовление часов',
                'test111': 'Оформление витрин',
                'test1111': 'Оформление торгового зала',
                'test22': 'Стенды для образцов',
                'test222': 'Информационный стенд',
                'test2222': 'Буквы из пенопласта',
                'test33': 'Рекламные конструкции',
                'test3333': 'Оформление стеклянных перегородок',
            }
        },
        // Сувенирная продукция
        btn_m4: {
            src:'src/img/yellow.jpg',
            links: {
                'test1': 'Ручки',
                'test2': 'Аксессуары',
                'test3': 'Антистрессы',
                'test5': 'Брелки',
                'test6': 'Флаги и флажки',
                'test7': 'ЭКО изделия из дерева и фанеры',
                'test11': 'Воздушные шары',
                'test111': 'Пакеты и упаковка',
                'test1111': 'Чашки и посуда',
                'test22': 'Флешки и PowerBank',
                'test222': 'Ароматизаторы в автомобиль',
                'test2222': 'Магниты',
                'test33': 'Зонты',
                'test44': 'Шоколадки',
                'test444': 'Значки',
                'test55': 'Дисконтные карты/удостоверения',
                'test555': 'Ежедневники',
            }
        },
        // Полиграфия
        btn_m5: {
            src:'src/img/yellow.jpg',
            links: {
                'test1': 'Визитки',
                'test2': 'Буклеты/Лифлеты/листовки',
                'test3': 'Ежедневники',
                'test5': 'Блокноты',
                'test6': 'Каталоги и брошюры',
                'test7': 'Упаковка',
                'test11': 'Плакаты',
                'test111': 'Календари',
            }
        },
        // Корпоративный стиль
        btn_m6: {
            src:'src/img/yellow.jpg',
            links: {
                'test1': 'Разработка корпоративного стиля',
                'test2': 'Брендирование транспорта',
                'test3': 'Полиграфия',
                'test5': 'Сувенирная продукция',
                'test6': 'Брендбук',
                'test7': 'Упаковка',
                'test11': 'Оформление выставок',
            }
        },
        // Освещение
        btn_m6: {
            src:'src/img/yellow.jpg',
            links: {
                'test1': 'Люстры',
                'test2': 'Световые короба (Лайтбоксы)',
                'test3': 'Архитектурная подсветка',
                'test5': 'Освещение витрин',
            }
        },
        // POS Материалы
        btn_m7: {
            src:'src/img/yellow.jpg',
            links: {
                'test1': 'Топперы',
                'test2': 'Воблеры',
                'test3': 'Изделия из акрила и оргстекла',
                'test5': 'Подставки под товар',
                'test6': 'Шелфтокеры',
                'test7': 'Стопперы',
                'test11': 'Холдеры',
            }
        },
        // Выставочные стенды
        btn_m8: {
            src:'src/img/yellow.jpg',
            links: {
                'test1': 'Портативный стенд ROLL-UP',
                'test2': 'Портативный стенд X-BANNER (паук)',
                'test3': 'Стенд POP UP',
                'test5': 'Промостойка',
                'test6': 'Выставочный стенд',
                'test7': 'Разборной стенд для баннера',
                'test11': 'Фотозона',
                'test21': 'Штендеры',
                'test31': 'Стенды для образцов',
                'test51': 'Информационный стенд',
            }
        },
        // Эксклюзив
        btn_m9: {
            src:'src/img/yellow.jpg',
            links: {
                'test1': 'Изготовление мебели из металла и дерева',
                'test2': 'Часы и предметы интерьера',
                'test3': 'Элементы освещения',
                'test5': 'Нестандартные рекламные конструкции',
                'test6': 'Цветодинамические дисплеи',
            }
        },
        // Дополнительные услуги
        btn_m10: {
            src:'src/img/yellow.jpg',
            links: {
                'test1': 'Лазерная резка',
                'test2': 'Лазерная гравировка',
                'test3': 'Дизайн',
                'test5': 'Маркетинг',
                'test6': '3D - Печать',
                'test7': 'Плоттерная резка',
                'test11': 'Высотные работы',
                'test21': 'Изделия из фанеры',
                'test31': 'Вышивка',
                'test51': 'Шелкотрафаретная печать',
                'test151': 'Ультрафиолетовая печать',
                'test251': 'Оформление выставок',
            }
        },
    };
    const generateHtml = function generateHtml(links) {
        let keys = Object.keys(links);
        let ali = keys.map(function(link) {
            let title = links[link];
            return '<li><a href="'+link+'">' + title + '</a></li>';
        });
        return '<ul>' + ali.join('') + '</ul>';
    };
    $('.menu_category').on({
        'click': function(){
            let catName = $(this).attr('data-category');
            let data = catList[catName];
            $('.change-image').attr('src', data.src);
            $('.menu_subcategory').html(generateHtml(data.links))
        }
    });


    $('.menu_category_bnt1').on({
        'mouseover': function(){
            $('.change-image').attr('src','src/img/blue.jpg');
            $('.menu_subcategory').html('<ul><li>Футболки</li><li>Сумки и рюкзаки</li><li>Униформа</li><li>Флисовые кофты</li><li>Кепки и бейсболки</li><li>Жилетки и куртки</li><li>Фартуки</li></ul>')
        }
    });

    $('.menu_category_bnt2').on({
        'click': function(){
            $('.change-image').attr('src','src/img/yellow.jpg');
            $('.menu_subcategory').html('<ul><li>Объёмные буквы</li><li>Вывески</li><li>Крышные конструкции</li><li>Лайтбоксы/Световые короба</li><li>Оформление витрин</li><li>Обшивка фасада композитом</li><li>Информационные таблички</li><li>Оформление входных групп и козырьков</li><li>Рекламные конструкции</li><li>Брендирование транспорта</li><li>Уличные флажные конструкции</li><li>LED Дисплеи</li></ul>')
        }
    });

    $('.menu_category_bnt3').on({
        'click': function(){
            $('.change-image').attr('src','src/img/red.jpg');
            $('.menu_subcategory').html('<ul><li>Печать на баннере</li><li>Печать на пленке</li><li>Печать на баннерной сетке</li><li>Печать на холсте</li><li>Печать на бумаге</li></ul>')
        }
    });

    $('.menu_category_bnt4').on({
        'click': function(){
            $('.change-image').attr('src','src/img/black.jpg');
            $('.menu_subcategory').html('<ul><li>Системы визуальной навигации</li><li>Стойки Ресепшн</li><li>Световой логотип</li><li>Системы освещения</li><li>Изготовление фотозон</li><li>Уголки покупателя</li><li>Изготовление часов</li><li>Оформление витрин</li><li>Оформление торгового зала</li><li>Стенды для образцов</li><li>Информационный стенд</li><li>Буквы из пенопласта</li><li>Рекламные конструкции</li><li>Оформление стеклянных перегородок</li></ul>');
        }
    });

    $('.menu_category_bnt5').on({
        'click': function(){
            $('.change-image').attr('src','src/img/blue.jpg');
            $('.menu_subcategory').html('<ul><li>Ручки</li><li>Аксессуары </li><li>Антистрессы</li><li>Брелки</li><li>Флаги и флажки</li><li>ЭКО изделия из дерева и фанеры</li><li>Воздушные шары</li><li>Пакеты и упаковка</li><li>Чашки и посуда</li><li>Флешки и PowerBank</li><li>Ароматизаторы в автомобиль</li><li>Магниты</li><li>Зонты</li><li>Изготовление часов</li><li>Шоколадки</li><li>Значки</li><li>Дисконтные карты/удостоверения</li><li>Ежедневники</li></ul>');
        }
    });

    $('.menu_category_bnt6').on({
        'click': function(){
            $('.change-image').attr('src','src/img/blue.jpg');
            $('.menu_subcategory').html('<ul><li>Визитки</li><li>Буклеты/Лифлеты/листовки</li><li>Ежедневники</li><li>Блокноты</li><li>Каталоги и брошюры</li><li>Упаковка</li><li>Плакаты</li><li>Календари</li></ul>');
        }
    });

    $('.menu_category_bnt7').on({
        'click': function(){
            $('.change-image').attr('src','src/img/blue.jpg');
            $('.menu_subcategory').html('<ul><li>Разработка корпоративного стиля</li><li>Брендирование транспорта</li><li>Полиграфия</li><li>Сувенирная продукция</li><li>Брендбук</li><li>Упаковка</li><li>Оформление выставок</li></ul>');
        }
    });

    $('.menu_category_bnt8').on({
        'click': function(){
            $('.change-image').attr('src','src/img/blue.jpg');
            $('.menu_subcategory').html('<ul><li>Люстры</li><li>Световые короба (Лайтбоксы)</li><li>Архитектурная подсветка</li><li>Освещение витрин</li></ul>');
        }
    });

    $('.menu_category_bnt9').on({
        'click': function(){
            $('.change-image').attr('src','src/img/yellow.jpg');
            $('.menu_subcategory').html('<ul><li>Топперы</li><li>Воблеры</li><li>Изделия из акрила и оргстекла</li><li>Подставки под товар</li><li>Шелфтокеры</li><li>Стопперы</li><li>Холдеры</li></ul>');
        }
    });

    $('.menu_category_bnt10').on({
        'click': function(){
            $('.change-image').attr('src','src/img/blue.jpg');
            $('.menu_subcategory').html('<ul><li>Портативный стенд ROLL-UP</li><li>Портативный стенд X-BANNER (паук)</li><li>Стенд POP UP</li><li>Промостойка</li><li>Выставочный стенд</li><li>Разборной стенд для баннера</li><li>Фотозона</li><li>Штендеры</li><li>Стенды для образцов</li><li>Информационный стенд</li></ul>');
        }
    });

    $('.menu_category_bnt11').on({
        'click': function(){
            $('.change-image').attr('src','src/img/blue.jpg');
            $('.menu_subcategory').html('<ul><li>Изготовление мебели из металла и дерева</li><li>Часы и предметы интерьера</li><li>Элементы освещения</li><li>Нестандартные рекламные конструкции</li><li>Цветодинамические дисплеи</li></ul>');
        }
    });

    $('.menu_category_bnt12').on({
        'click': function(){
            $('.change-image').attr('src','src/img/blue.jpg');
            $('.menu_subcategory').html('<ul><li>Лазерная резка</li><li>Лазерная гравировка</li><li>Дизайн</li><li>Маркетинг</li><li>3D - Печать</li><li>Плоттерная резка</li><li>Высотные работы</li><li>Изделия из фанеры</li><li>Вышивка</li><li>Шелкотрафаретная печать</li><li>Ультрафиолетовая печать </li><li>Оформление выставок </li></ul>');
        }
    });

    // Img Lazyloading
    const targets = document.querySelectorAll('img');

    const lazyload = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                console.log('!!!');

                if (entry.isIntersecting) {
                    const  img = entry.target;
                    const src = img.getAttribute('data-lazy');

                    img.setAttribute('src', src);
                    img.classList.add('fade');

                    observer.disconnect();
                }
            });

        });
        io.observe(target)
    };

    targets.forEach(lazyload);

});
