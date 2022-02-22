$(document).ready(function () {

    let formDataBases = []
    const coba = [
        {nama: 'Tirtha'},
        {nama: 'Shiina'},
        {nama: 'Dia'},
        {nama: 'Muzan'}
    ]
    $.getJSON("data/items.json", (data) => {
        formDataBases = data
        formDataBases.forEach(item => {
            $('.product .productCon').append(`
                    <div class="items" data-title="${item.nama}">${item.nama}</div>
                `)
        });
    });
    $('.nav .search form').submit((e) => {
        e.preventDefault()
        const value = $('.nav .search form input').val().toLowerCase()
        $('.contenCon .product').removeClass('d-none').siblings().addClass('d-none')
        $('head title').html('Search | Mozu')
        $('.sekunderNav .search').addClass('on').siblings().removeClass('on')
        const inputSearching = formDataBases.filter((item) => {
            return item.nama.toLowerCase().indexOf(value) >= 0
        })
        let items = document.querySelectorAll('.product .productCon .items')
        items.forEach(hide => hide.style.display = 'none')
        items.forEach(filter => {
            let title = filter.getAttribute('data-title')
            if (inputSearching[0].nama == title && value.length >= 1) {
                filter.style.display = 'block'
            }
            if (value.length <= 1) {
                filter.style.display = 'block'
            }
        })
    })
    $('.nav .inputSearch .reset, .product .inputSearch .reset').click(function () {
        $('.nav .inputSearch input, .product .inputSearch input').val('').focus()
        $(this).css('display', 'none')
    })
    $('.nav .inputSearch input').keyup(() => {
        if ($('.nav .inputSearch input').val() != '') {
            $('.nav .inputSearch .reset').css('display', 'block')
        } else {$('.nav .inputSearch .reset').css('display', 'none')}
    });
    $('.tema').click(function () {
        $('.tema i').toggleClass('d-none')
        if ($('.tema .fi-rr-moon').hasClass('d-none')) {
            $(':root').css('--bg', 'var(--dark)')
            $(':root').css('--color', 'var(--colorDark)')
            $(':root').css('--body', 'var(--bgDark)')
            $(':root').css('color-scheme', 'dark')
        } else {
            $(':root').css('--bg', 'var(--light)')
            $(':root').css('--color', 'var(--colorLight)')
            $(':root').css('--body', 'var(--bgLight)')
            $(':root').css('color-scheme', 'light')
        }
    });
    $('.nav .menu').click(function () {
        $('.sekunderNav.side').toggleClass('off');
        if ($('.sekunderNav.side').hasClass('off')) {
            $('.contenCon').css('width', '100vw')
        } else {
            $('.contenCon').css('width', 'calc(100vw - calc(3vh + 4vw))')
        }
        $('.con .ulMenu').toggleClass('off')
        $('.con .ulMenu .conItems').scrollTop(0);
    });

    if ($(window).width() >= 768) {
        $('.sekunderNav').removeClass('bottom').addClass('side');
    } else {
        $('.sekunderNav').removeClass('side').addClass('bottom') 
        $('.contenCon').css('width', '100vw')
    }
    $(window).on("resize", () => {
        if ($(this).width() >= 768) {
            $('.sekunderNav').removeClass('bottom').addClass('side');
            $('.nav').removeClass('onSearch')
        } else {
            $('.sekunderNav').removeClass('side').addClass('bottom') 
            $('.contenCon').css('width', '100vw')
            $('.con .nav').css('min-height', $('.con .nav').css('height'))
        }
    }).on("load", () => {
        if ($(this).width() >= 768) {
            $('.sekunderNav').removeClass('bottom').addClass('side');
        } else {
            $('.sekunderNav').removeClass('side').addClass('bottom') 
            $('.contenCon').css('width', '100vw')
        }
    })

    $('.sekunderNav.side div').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        if ($('.sekunderNav.side .home').hasClass('on')) {
            $('.contenCon .home').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Mozu')
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.side .search').hasClass('on')) {
            $('.contenCon .product').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Search | Mozu')
            $('.con .nav').css('min-height', $('.con .nav').css('height'))
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.side .troli').hasClass('on')) {
            $('.contenCon .cart').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Troli | Mozu')
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.side .contact').hasClass('on')) {
            $('.contenCon .contact').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Contact | Mozu')
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.side .user').hasClass('on')) {
            $('.contenCon .profile').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Profile | Mozu')
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.side .tandai').hasClass('on')) {
            $('.contenCon .simpan').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Di tandai | Mozu')
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.side .blogs').hasClass('on')) {
            $('.contenCon .conBlogs').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Blogs | Mozu')
            $(window).scrollTop(0)
        }
        
        
    })
    $('.sekunderNav.bottom div').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        if ($('.sekunderNav.bottom .home').hasClass('on')) {
            $('.contenCon .home').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Mozu')
            $('.nav').removeClass('onSearch')
            $(window).scrollTop(0)
            
        }
        if ($('.sekunderNav.bottom .search').hasClass('on')) {
            $('.contenCon .product').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Search | Mozu')
            $('.nav').addClass('onSearch')
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.bottom .troli').hasClass('on')) {
            $('.contenCon .cart').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Troli | Mozu')
            $('.nav').removeClass('onSearch')
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.bottom .contact').hasClass('on')) {
            $('.contenCon .contact').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Contact | Mozu')
            $('.nav').removeClass('onSearch')
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.bottom .user').hasClass('on')) {
            $('.contenCon .profile').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Profile | Mozu')
            $('.nav').removeClass('onSearch')
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.bottom .tandai').hasClass('on')) {
            $('.contenCon .simpan').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Di tandai | Mozu')
            $('.nav').removeClass('onSearch')
            $(window).scrollTop(0)
        }
        if ($('.sekunderNav.bottom .blogs').hasClass('on')) {
            $('.contenCon .conBlogs').removeClass('d-none').siblings().addClass('d-none')
            $('head title').html('Blogs | Mozu')
            $('.nav').removeClass('onSearch')
            $(window).scrollTop(0)
        }
    })
});
