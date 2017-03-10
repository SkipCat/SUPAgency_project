window.onload = function() {
    if (screen.width < 641) {
        mediaQuery();
    }

    var FirstPic = document.getElementById('poe');
    var SecPic = document.getElementById('rey-finn');
    var ThirdPic = document.getElementById('kylo-ren');
    var FirstPicSlide = document.getElementById('first-lat');
    var SecPicSlide = document.getElementById('second-lat');
    var ThirdPicSlide = document.getElementById('third-lat');

    function showFirstPic(){
        FirstPicSlide.style.display = "flex";
        SecPicSlide.style.display = "none";
        ThirdPicSlide.style.display = "none";
    }

    function showSecPic(){
        FirstPicSlide.style.display = "none";
        SecPicSlide.style.display = "flex";
        ThirdPicSlide.style.display = "none";
    }

    function showThirdPic(){
        FirstPicSlide.style.display = "none";
        SecPicSlide.style.display = "none"; 
        ThirdPicSlide.style.display = "flex";
    }

    FirstPic.onclick=function(){
        showFirstPic();
    }

    SecPic.onclick=function() {
        showSecPic();
    }

    ThirdPic.onclick=function() {
        showThirdPic();
    }

    /* MODAL */

    $('.discover-button').click(function () {
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    })

    $('.btn_close').click(function () {
        $('html, body').css({
            'overflow': 'initial',
        });
    })

    /* MENU BURGER */

    $('.menu-header-white').click(function() {
        $('.menu-header-white').css({
            'display' : 'none',
        });
        $('.menu-dropdown').show('slow');
        $('.menu-dropdown').css({
            'display' : 'flex',
        });
        $('.page:first-child').css({
            'height' : '1750px',
        });
    });

    $('.menu-header-black').click(function() {
        $('.menu-dropdown').hide(1000);
        $('.menu-header-white').show(1000);
        $('.menu-header-white').css({
            'display' : 'flex',
        });
    });

    /* TRANSITIONS */
    
    $('#img1, #img2, #img3').on('click', function() {
        var page = $(this).attr('href');
        var speed = 750;
        for(i=0; i < $('.circle').length; i++){
            $('.circle').css('background-color', 'black')
        }
        $('#pointer-three').css('background-color', 'white');
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });

    $('.pathe-logo-fixed-two, .pathe-logo-fixed-three, .pathe-logo-fixed-four, .pathe-logo-fixed-five').on('click', function() {
        for(i=0; i < $('.circle').length; i++){
            $('.circle').css('background-color', 'black')
        }
        $('#pointer-one').css('background-color', 'white');
    });

    $('#discover-button').on('click', function() {
        var page = $(this).attr('href');
        var speed = 750;
        for(i=0; i < $('.circle').length; i++){
            $('.circle').css('background-color', 'black')
        }
        $('#pointer-two').css('background-color', 'white');
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });

    $('.circle').on('click', function() {
        var page = $(this).attr('href');
        var speed = 750;
        for(i=0; i < $('.circle').length; i++){
            $('.circle').css('background-color', 'black')
        }
        $(this).css('background-color', 'white');
        $('html, body').animate({ scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });

    /* PAGE 4 BIS */

    $('.blue-frame').click(function() {
        $('#4').slideUp(500);
        $('#page4-bis').show(500);
        $('#page4-bis').css({
            'display' : 'flex',
        });
    });

    $('#closep4').click(function() {
        $('#page4-bis').slideUp(500);
        $('#4').show(500);
    });


    /* ABOUT */

    $('#business').click(function(){
        $('#container-global').slideUp(500);
        $('.container-loader').css('display', 'flex');

        var interval = setInterval(function() {
            $('#business_page').css({
                'display' : 'block',
            });
            $('.container-loader').css('display', 'none');
            clearInterval(interval);
        }, 1500);
    });

    $('#business-mobile').click(function(){
        $('#container-global').slideUp(500);
        $('#business_page').show();
    });

    $('#go_main').click(function(){
        $('#business_page').slideUp(500);
        $('#container-global').show(500);
    });

    $('#budget_beaugrenelle').click(function(){
        $('#desc_beaugrenelle').slideDown(500);
    });
    
    $('#budget_web').click(function(){
        $('#desc_web').slideDown(500);
    });
    $("#twitter").hover(
        function() {
            $( this ).append( $( "<span><br>2 tweets sponsorisés par jour pendant 10 jours à 600&#128; par tweet.</span>" ) );
        }, function() {
            $( this ).find( "span:last" ).remove();
        }
    );

    $("#facebook").hover(
        function() {
            $( this ).append( $( "<span><br>2 posts sponsorisés par jour pendant 10 jours à 800&#128; par post,<br>Et la rémuneration de deux personnes pour le facebooklive : 300&#128; chacun.</span>" ) );
        }, function() {
            $( this ).find( "span:last" ).remove();
        }
    );

    $("#youtube").hover(
        function() {
            $( this ).append( $( "<span><br>1000&#128; par jour pendant 11 jours + réalisation vidéo 7500&#128; + guest de la vidéo : fossoyeur de films payé 1000&#128;.</span>" ) );
        }, function() {
            $( this ).find( "span:last" ).remove();
        }
    );

    /* MEDIA QUERY */

    function mediaQuery() {
        $('.pathe-logo-fixed-two, .pathe-logo-fixed-three, .pathe-logo-fixed-four, .pathe-logo-fixed-five, #nav, .background-carousel, .star-wars-text, #discover-button, nav, .carousel, .carousel-picture').css({
            'display' : 'none',
        });

        $('.menu-header, .replace-carousel').css({
            'display' : 'flex',
        });

        $('.pathe-logo').css({
            'width' : '250px',
            'height' : '210px',
        });

        $('.logo-MAA').css({
            'margin-right' : '0px',
        });

        $('.rey-picture').css({
            'width' : '700px',
            'margin-left' : '150px'
        });

        $('.anim-yellow .carousel').css({
            'margin-left' : '100px',
        });

        $('.anim-blue .carousel, .anim-red .carousel').css({
            'margin-left' : '100px',
        });

        $('main').css({
            'margin-left' : '0px',
            'flex-direction' : 'column',
        });

        $('.page:first-child').css({
            'height' : '1500px',
        });

        $('.page-carousel').css({
            'flex-direction' : 'column',
            'height' : '800px',
        });

        $('.page:nth-child(3)').css({
            'padding-top' : '150px',
            'padding-bottom' : '250px',
        });

        $('.description').css({
            'max-width' : '600px',
            'margin-top' : '150px',
        });

        $('.desc-blue, .desc-red').css({
            'height' : '400px',
        });

        $('.page:nth-child(4) p').css({
            'font-size' : '36px',
        });

        $('.text p').css({
            'font-size' : '32px',
        });

        $('.container-desc').css({
            'width' : '500px',
        })

        $('.networks').css({
            'margin-right': 'auto',
        });

        $('.animation').css({
            'margin' : '0px',
        });

        $('.popup_block').css({
            'width' : '70%',
            'font-size' : '32px',
            'padding-top' : '70px',
        });

        $('.popup_block p').css({
            'font-size' : '32px',
        });

        $('img.btn_close').css({
            'height' : '40px',
            'left' : '675px',
        });

        $('.logos-pathe-sw .pathe-logo').css({
            'display' : 'none',
        });

        $('.logos-pathe-sw .pathe-logo-new').css({
            'display' : 'block',
        });
    }

    $(window).resize(function() {
        if (screen.width < 641) {
            mediaQuery();
        }
        else {
            window.location.reload(true);
        }
    });

    /* BACKGROUND */

    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 800, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#b4b0d1"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 150, "height": 100}
            },
            "opacity": {
                "value": 0.7,
                "random": true,
                "anim": {"enable": true, "speed": 0.485975555429562, "opacity_min": 0, "sync": false}
            },
            "size": {
                "value": 2.998400639744104,
                "random": true,
                "anim": {"enable": true, "speed": 0.2, "size_min": 0, "sync": true}
            },
            "line_linked": {
                "enable": false,
                "distance": 63.974410235905665,
                "color": "#ffffff",
                "opacity": 0.6077568972411038,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "top-right",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 600}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "bubble"},
                "onclick": {"enable": true, "mode": "repulse"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3},
                "repulse": {"distance": 400, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
};