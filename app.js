$(document).ready(function () {
    $('.bottomNav .item').click(function() {
        $(this).addClass('on').siblings().removeClass('on')
    })
    $('.homePage').on('scroll', () => {
        if ($('.homePage').scrollTop() > 30) {
            $('.homePage .nav').addClass('on')
        } else {
            $('.homePage .nav').removeClass('on')
            
        }
    })
    // let formDataBases = []
    // $.getJSON("data/items.json", (data) => {
    //     formDataBases = data
    //     formDataBases.forEach(item => {
    //         $('.product .productCon').append(`
    //                 <div class="items" thumb-id="${item.id}" data-title="${item.keyword}"><a href="#${item.id}">${item.nama}</a></div>
    //             `)
    //     });
    // });
    // $('.nav .search form').submit((e) => {
    //     e.preventDefault()
    //     const value = $('.nav .search form input').val().toLowerCase()
    //     $('.contenCon .product').removeClass('d-none').siblings().addClass('d-none')
    //     $('head title').html('Search | Mozu')
    //     $('.sekunderNav .search').addClass('on').siblings().removeClass('on')
        
    //     $('.contenCon .product .items').css('display', (value) ? 'none' : 'flex')
    //     formDataBases.forEach(item => {
    //         $(`.contenCon .product .items[thumb-id="${item.id}"]`).filter(() => {
    //             let i = false
    //             if ($(`.contenCon .product .items[thumb-id="${item.id}"]`).attr('data-title').toLowerCase().indexOf(value) > -1) i = true
    //             if (i) $(`.contenCon .product .items[thumb-id="${item.id}"]`).css('display', 'flex')
    //         })
    //     })
    // })
    // $('.nav .inputSearch .reset').click(function () {
    //     $('.nav .inputSearch input, .product .inputSearch input').val('').focus()
    //     $(this).css('display', 'none')
    // })
    // $('.nav .inputSearch input').keyup(() => {
    //     if ($('.nav .inputSearch input').val()) {
    //         $('.nav .inputSearch .reset').css('display', 'flex')
    //     } else {$('.nav .inputSearch .reset').css('display', 'none')}
    // });
    // $('.tema').click(function () {
    //     $('.tema i').toggleClass('d-none')
    //     if ($('.tema .fi-rr-moon').hasClass('d-none')) {
    //         $(':root').css('--bg', 'var(--dark)')
    //         $(':root').css('--color', 'var(--colorDark)')
    //         $(':root').css('--body', 'var(--bgDark)')
    //         $(':root').css('color-scheme', 'dark')
    //         $(':root').css('--primary', 'var(--priDark)')
    //     } else {
    //         $(':root').css('--bg', 'var(--light)')
    //         $(':root').css('--color', 'var(--colorLight)')
    //         $(':root').css('--body', 'var(--bgLight)')
    //         $(':root').css('color-scheme', 'light')
    //         $(':root').css('--primary', 'var(--priLight)')
    //     }
    // });
    // $('.nav .menu').click(function () {
    //     $('.sekunderNav.side').toggleClass('off');
    //     if ($('.sekunderNav.side').hasClass('off')) {
    //         $('.contenCon').css('width', '100vw')
    //     } else {
    //         $('.contenCon').css('width', 'calc(100vw - calc(3vh + 4vw))')
    //     }
    //     $('.con .ulMenu').toggleClass('off')
    //     $('.con .ulMenu .conItems').scrollTop(0);
    // });

    // if ($(window).width() >= 768) {
    //     $('.sekunderNav').removeClass('bottom').addClass('side');
    // } else {
    //     $('.sekunderNav').removeClass('side').addClass('bottom') 
    //     $('.contenCon').css('width', '100vw')
    // }
    // $(window).on("resize", () => {
    //     if ($(this).width() >= 768) {
    //         $('.sekunderNav').removeClass('bottom').addClass('side');
    //         $('.nav').removeClass('onSearch')
    //     } else {
    //         $('.sekunderNav').removeClass('side').addClass('bottom') 
    //         $('.contenCon').css('width', '100vw')
    //         $('.con .nav').css('min-height', $('.con .nav').css('height'))
    //     }
    // }).on("load", () => {
    //     if ($(this).width() >= 768) {
    //         $('.sekunderNav').removeClass('bottom').addClass('side');
    //     } else {
    //         $('.sekunderNav').removeClass('side').addClass('bottom') 
    //         $('.contenCon').css('width', '100vw')
    //     }
    // })
    // $('#Profile h2').on('focus', () => {
    //     const i = $('#Profile h2').text()
    //     $(window).keydown((e) => {
    //         if ($('#Profile h2').text() == i) $('#Profile h2').text('')
    //     })
    // }).focusout(() => {
    //     localStorage.setItem('nameUser', $('#Profile h2').text())
    // })
    // $('#Profile h2').html(localStorage.getItem('nameUser'))
    // if (localStorage.getItem('avatarImg') !== null) {
    //     $('#Profile .avatar #imageAvatar, .nav .subItems .user img').attr('src', localStorage.getItem('avatarImg'))
    // }
    // $('.sekunderNav.side div').click(function () {
    //     $(this).addClass('on').siblings().removeClass('on');
    //     if ($('.sekunderNav.side .home').hasClass('on')) {
    //         $('.contenCon .home').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Mozu')
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.side .search').hasClass('on')) {
    //         $('.contenCon .product').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Search | Mozu')
    //         $('.con .nav').css('min-height', $('.con .nav').css('height'))
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.side .troli').hasClass('on')) {
    //         $('.contenCon .cart').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Cart | Mozu')
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.side .contact').hasClass('on')) {
    //         $('.contenCon .contact').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Contact | Mozu')
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.side .user').hasClass('on')) {
    //         $('.contenCon .profile').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Profile | Mozu')
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.side .tandai').hasClass('on')) {
    //         $('.contenCon .simpan').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Bookmark | Mozu')
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.side .blogs').hasClass('on')) {
    //         $('.contenCon .conBlogs').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Blogs | Mozu')
    //         $(window).scrollTop(0)
    //     }
        
        
    // })
    // if ($(window).width() < 768) {
    //     let lastScroll = 0
    //     const navHeight = $('.nav').height()
    //     let navTransform = 0
    //     $(window).on('scrolldown', (e) => {
    //         console.log(e)
    //     })
    // }
    // $('.sekunderNav.bottom div').click(function () {
    //     $(this).addClass('on').siblings().removeClass('on');
    //     if ($('.sekunderNav.bottom .home').hasClass('on')) {
    //         $('.contenCon .home').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Mozu')
    //         $('.nav').removeClass('onSearch')
    //         $(window).scrollTop(0)
            
    //     }
    //     if ($('.sekunderNav.bottom .search').hasClass('on')) {
    //         $('.contenCon .product').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Search | Mozu')
    //         $('.nav').addClass('onSearch')
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.bottom .troli').hasClass('on')) {
    //         $('.contenCon .cart').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Cart | Mozu')
    //         $('.nav').removeClass('onSearch')
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.bottom .contact').hasClass('on')) {
    //         $('.contenCon .contact').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Contact | Mozu')
    //         $('.nav').removeClass('onSearch')
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.bottom .user').hasClass('on')) {
    //         $('.contenCon .profile').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Profile | Mozu')
    //         $('.nav').removeClass('onSearch')
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.bottom .tandai').hasClass('on')) {
    //         $('.contenCon .simpan').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Bookmark | Mozu')
    //         $('.nav').removeClass('onSearch')
    //         $(window).scrollTop(0)
    //     }
    //     if ($('.sekunderNav.bottom .blogs').hasClass('on')) {
    //         $('.contenCon .conBlogs').removeClass('d-none').siblings().addClass('d-none')
    //         $('head title').html('Blogs | Mozu')
    //         $('.nav').removeClass('onSearch')
    //         $(window).scrollTop(0)
    //     }
    // })
});
