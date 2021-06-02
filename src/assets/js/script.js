$(document).ready(function() {

    //Slider

    $('.carousel__inner').slick({
        dots: false,
        speed: 300,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="./assets/images/icons/prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./assets/images/icons/next.png" alt="next"></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				dots: true,
				arrows: false
			}
		}]
      });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

    //Tabs

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modals

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn(500);
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut(500);
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn(500);
        });
    });

    //validate forms

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 1,
                    maxlength: 20
                  },
                phone: 'required',
                mail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Ошибка! Минимальное количество символов - {0}"),
                    maxlength: jQuery.validator.format("Ошибка! Максимальное количество символов - {0}")
                },
                phone: 'Пожалуйста, введите номер телефона',
                mail: {
                  required: "Пожалуйста, введите адрес элетронной почты",
                  mail: "Ошибка! Неверный адрес почты"
                }
            }
        });
    };

    validateForms('.consultation form');
    validateForms('#order form');
    validateForms('#contact-form');

    //masks

    $('input[name="phone"]').mask("+7 (999) 999-99-99");

});


