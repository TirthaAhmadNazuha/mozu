$(document).ready(function () {
    $('.nav .search form').submit((e) => {
        e.preventDefault()
    })
    $('.nav .inputSearch .reset').click(function () {
        $('.nav .inputSearch input').val('').focus()
        $(this).css('display', 'none')
    })
    $('.nav .inputSearch input').keyup(() => {
        if ($('.nav .inputSearch input').val() != '') {
            $('.nav .inputSearch .reset').css('display', 'block')
        } else {$('.nav .inputSearch .reset').css('display', 'none')}
    })
    $('.nav .menu').click(function () {
        $('.ulMenu').toggleClass('d-none');
        setTimeout(() => {
            $('.ulMenu').toggleClass('off')
        }, 10);
    })
    $('.tema').click(function () {
        $('.tema i').toggleClass('d-none')
        if ($('.tema .fi-rr-moon').hasClass('d-none')) {
            $(':root').css('--bg', 'var(--dark)')
            $(':root').css('--color', 'var(--colorDark)')
            $(':root').css('--body', 'var(--bgDark)')
            $('.nav .search').css('background', 'var(--body)')
        } else {
            $(':root').css('--bg', 'var(--light)')
            $(':root').css('--color', 'var(--colorLight)')
            $(':root').css('--body', 'var(--bgLight)')
            $('.nav .search').css('background', '#0001')
        }
    });
    $('.nav .menu').click(function () {
        $('.sekunderNav.side').toggleClass('off');
    });

    if ($(window).width() >= 768) {
        $('.sekunderNav').removeClass('bottom').addClass('side');
    } else $('.sekunderNav').removeClass('side').addClass('bottom') 
    $(window).on("resize", () => {
        if ($(this).width() >= 768) {
            $('.sekunderNav').removeClass('bottom').addClass('side');
        } else $('.sekunderNav').removeClass('side').addClass('bottom') 
    }).on("load", () => {
        if ($(this).width() >= 768) {
            $('.sekunderNav').removeClass('bottom').addClass('side');
        } else $('.sekunderNav').removeClass('side').addClass('bottom') 
    });
});
