$(document).ready(function () {
    //bg perspectif function
    $('.contenCon .home :is(.bg, h1, p, .jumbotron, .bg div)').on('mousemove', (e) => {
        const pos = {
            x: e.clientX,
            y: e.clientY
        }
        const position = $('.contenCon .home :is(.bg, h1, p, .jumbotron)').position();
        const top = position.top;
        const left = position.left;
        
        const center = {
            x: left + $('.contenCon .home :is(.bg, h1, p, .jumbotron)').width() / 2,
            y: top + $('.contenCon .home :is(.bg, h1, p, .jumbotron)').height() / 2 
        }
        let hasil = {
            x: (pos.x - center.x) / 60,
            y: (-pos.y - -center.y) / 30
        }
        // append hasil
        $('.contenCon .home .bg').css('transform', `rotateX(${hasil.y}deg) rotateY(${hasil.x}deg)`)
    })



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
            item.id = Math.floor(100000 + Math.random() * 900000)
            $('.product .productCon').append(`
                    <div class="items" id="${item.id}" data-title="${item.keyword}">${item.nama}</div>
                `)
        });
    });
    $('.nav .search form').submit((e) => {
        e.preventDefault()
        const value = $('.nav .search form input').val().toLowerCase()
        $('.contenCon .product').removeClass('d-none').siblings().addClass('d-none')
        $('head title').html('Search | Mozu')
        $('.sekunderNav .search').addClass('on').siblings().removeClass('on')
        // const inputSearching = formDataBases.filter((item) => {
        //     return item.nama.toLowerCase().indexOf(value) >= 0
        // })
        // let items = document.querySelectorAll('.product .productCon .items')
        // items.forEach(hide => hide.style.display = 'none')
        // items.forEach(filter => {
        //     let title = filter.getAttribute('data-title')
        //     if (inputSearching[0].nama == title && value.length >= 1) {
        //         filter.style.display = 'block'
        //     }
        //     if (value.length <= 1) {
        //         filter.style.display = 'block'
        //     }
        // })
        $('.contenCon .product .items').css('display', (value) ? 'none' : 'flex')
        formDataBases.forEach(item => {
            $(`.contenCon .product .items#${item.id}`).filter(() => {
                let i = false
                if ($(`.contenCon .product .items#${item.id}`).attr('data-title').toLowerCase().indexOf(value) > -1) i = true
                console.log($(`.contenCon .product .items#${item.id}`).attr('data-title'), $(`.contenCon .product .items#${item.id}`).text())
                if (i) $(`.contenCon .product .items#${item.id}`).css('display', 'flex')
            })
        })
    })
    $('.nav .inputSearch .reset').click(function () {
        $('.nav .inputSearch input, .product .inputSearch input').val('').focus()
        $(this).css('display', 'none')
    })
    $('.nav .inputSearch input').keyup(() => {
        if ($('.nav .inputSearch input').val()) {
            $('.nav .inputSearch .reset').css('display', 'flex')
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
            $('head title').html('Cart | Mozu')
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
            $('head title').html('Bookmark | Mozu')
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
            $('head title').html('Cart | Mozu')
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
            $('head title').html('Bookmark | Mozu')
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
