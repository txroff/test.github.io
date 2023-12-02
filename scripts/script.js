//Бургер меню
$('.burger-menu').click(function(e) {
    e.preventDefault;
    $('.burger-menu span').toggleClass('active');
    $('.submenu').slideToggle(300);
});


//Смена города в навигации по клику
$('.sel-city').click(function() {
    if ($(this).text() == 'Санкт-Петербург') $(this).text('Москва');
    else $(this).text('Санкт-Петербург');
});


//Галерея
$('.mini-img').click(function() {
    $('.mini-img').removeClass('active');
    $(this).addClass('active');
    $('.full-image img').attr('src',$(this).attr('src'));
    $('.full-image').attr('data-desc',$(this).attr('data-desc'));

});

//Закрытие формы звонка
$('.close-form').click(function(e) {
    e.preventDefault();
    $('.call-div').removeClass('visible');
});


//Открытие формы звонка
$('.call-btn-mobile').click(function(e) {
    e.preventDefault();
    $('.call-div').addClass('visible');
});

$('.call-btn').click(function(e) {
    e.preventDefault();
    $('.call-div').addClass('visible');
});

$('.call-callForm').click(function(e) {
    e.preventDefault();
    $('.call-div').addClass('visible');
});


//Смена города в секции контакты
let data = [
    '+7 (495) 177-94-48',
    '+7 (495) 177-94-49',
    'OfficeCubeMSC@gmail.com',
    'https://vk.com/officecubemsc',
    'https://youtube.com/officecubemsc',
    'https://tiktok.com/officecubespb'
];

let frame = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.9593666059095!2d37.66292398845587!3d55.759208061846635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a8e8d4f2351%3A0xf03bb905ad50d44a!2sArma%20Coworking!5e0!3m2!1sru!2sru!4v1653283342062!5m2!1sru!2sru';

$('.citybutton').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')){

    } else {
        $('.citybutton').removeClass('active');
        $(this).addClass('active');

        let temp = $('.phones p:first-of-type').text();
        $('.phones p:first-of-type').text(data[0]);
        data[0] = temp;
        temp = $('.phones p:last-of-type').text();
        $('.phones p:last-of-type').text(data[1]);
        data[1] = temp;
        temp = $('.mail a').text();
        $('.mail a').text(data[2]);
        $('.mail a').attr('href','mailto:'+data[2]);
        data[2] = temp;
        temp = $('.soc a:first-of-type').text();
        $('.soc a:first-of-type').text(data[3]);
        $('.soc a:first-of-type').attr('href',data[3]);
        data[3] = temp;
        temp = $('.soc a:nth-of-type(2)').text();
        $('.soc a:nth-of-type(2)').text(data[4]);
        $('.soc a:nth-of-type(2)').attr('href',data[4]);
        data[4] = temp;
        temp = $('.soc a:last-of-type').text();
        $('.soc a:last-of-type').text(data[5]);
        $('.soc a:last-of-type').attr('href',data[5]);
        data[5] = temp;
        temp = $('.map-image iframe').attr('src');
        $('.map-image iframe').attr('src',frame);
        frame = temp;
    }
});


