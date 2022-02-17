$(document).ready(function () {
    let ulMenuPos = {
        y: 0,
        eleBottom: 0
    }
    let dy = 0
    let ulMenuHeight = -parseInt($('.con .ulMenu').css('height'), 10);

    $('.con .ulMenu').on('touchstart', (e) => {
        $('.con .ulMenu').css('transition', 'none');
        if (parseInt($('.con .ulMenu').css('bottom'), 10) > 0) $('.con .ulMenu').css('bottom', '0')
        ulMenuPos = {
            y: e.targetTouches[0].clientY,
            eleBottom: parseInt($('.con .ulMenu').css('bottom'), 10)
        }
        $(this).bind('touchmove', (e) => {
            dy = e.targetTouches[0].clientY - ulMenuPos.y;
            $('.con .ulMenu').css('bottom', ulMenuPos.eleBottom + -dy + 'px');
            if (parseInt($('.con .ulMenu').css('bottom'), 10) > 0) $('.con .ulMenu').css('bottom', '0')

        })
        // console.log(e.targetTouches[0].clientY)
    }).on('touchend', (e) => {
        $('.con .ulMenu').css('transition', '310ms ease');
        if (parseInt($('.con .ulMenu').css('bottom'), 10) > 0) $('.con .ulMenu').css('bottom', '0')
        if (parseInt($('.con .ulMenu').css('bottom'), 10) < ulMenuHeight / 2) {
            $('.con .ulMenu').css('bottom', `calc(${ulMenuHeight + 'px'} + -10vh)`)
        } else {
            $('.con .ulMenu').css('bottom', '-1px')
        }
            
        ulMenuPos.eleBottom = parseInt($('.con .ulMenu').css('bottom'), 10)
        console.log('Sayang pasti bisa !!', parseInt($('.con .ulMenu').css('bottom'), 10))
    })

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
    });
    // $('.nav .menu').click(function () {}})
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
        $('.con .ulMenu').toggleClass('off')
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
