jQuery(document).ready(function($){
    // HEADER SUBMENU
    $('.dropbtn').on({
        'click': function () {
            $('.dropdown_wrapper').css('display', 'flex');
            $('.header_wrapper').css('background-color', 'rgba(23,23,23,1)')

        }
    });

    // Header dropdown hide
    $(function ($) {
        $(document).mouseup(function (e) {
            let div = $('.dropdown_wrapper');
            let header = $('.header_wrapper');
            if (!div.is(e.target) && div.has(e.target).length === 0 ){
                div.hide();
                header.css('background-color', 'transparent')
            }
        })
    });

    $(function () {
        $(".menu_category ul li").click(function (e) {
            e.preventDefault();
            $(".menu_category ul li").removeClass('active');
            $(this).addClass('active');
        })
    });

    // Active menu
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
    });
    // Blog buttons
    $(".s_m").click(function () {
        let $button1 = $(this);
        let $cont1 = $button1.siblings('.more_posts');
        $cont1.toggleClass('visible_g').toggleClass('hidden_g');
        // $button.text($button.text() === "Показать больше" ? "Закрыть": "Показать больше");
    });

    // Category/image switcher
    $('.menu_category_bnt1').on({
        'click': function(){
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
});
