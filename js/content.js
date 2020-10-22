$(document).ready(function(){

    const btn_tab = $('.recomm_tab .btn_tab');
    const recomm_list = $('.recomm_list');


    btn_tab.click(recomm)
    
    function recomm(e){
        e.preventDefault();
        const idx = $(this).index();
    
    
        btn_tab.removeClass('On');
        recomm_list.removeClass('On');
        
        $(this).addClass('On');
        recomm_list.eq(idx).addClass('On');

    }



    $('.with_list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1190,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
   
        ]
      });



});
