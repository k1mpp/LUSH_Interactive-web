$(document).ready(function () {


    /*
        const 변수의 문제점  한번 선언한 후에 또 선언해도 에러 없이 출력됨. 
        
        
        const name = 'bathingape'
            console.log(name) // bathingape
        
        const name = 'javascript'
            console.log(name) // javascript
            
        ES6 이후, 이를 보완하기 위해 추가 된 변수 선언 방식이 let 과 const 이다.
        let : 변수에 재 할당 가능
        const : 변수에 값이 고정인것에 사용

    */
    //1 header search
    const open_Search = $('.header_links a.h_open_search');
    const search_Container = $('.header .search-container');
    const search_Close = $('.sch-close')
    const search_bg = $('.top_search_bg')



    //2. header right language
    const select_Language = $('.select_language');
    const select_Language_btn = $('.select_language>.t_lang');


    //3. pc_menu
    const gnb_menu_list = $('.nav_d1.d1_Over');
    const sub_menu = $('.sub_menu');
    const sub_menu_list = $('.sub_menu>ul>li');
    const gnb = $('.gnb');


    // mob_nav click
    const mob_btn = $('.mob_nav_btn');
    const mob_nav = $('.mob_nav');
    const m_bg =$('.m_nav_bg');
    const m_list_tit =$('.m_nav_list_tit');

    m_list_tit.click(function(){
        $(this).toggleClass('On');
        $(this).next('dl').slideToggle();
    })


    mob_btn.click(function(){
        mob_nav.addClass('left_Move');
    })
    m_bg.click(function(){
         mob_nav.removeClass('left_Move');
    })

    





    //1-1 search open
    open_Search.click(function () {
        search_Container.addClass('show');
    });
    //1-2 search close
    search_Close.click(function () {
        search_Container.removeClass('show');

    });

    search_bg.click(function(){
        search_Container.removeClass('show');
    })


    // 2.select_Language
    select_Language_btn.click(function (e) {
        e.preventDefault()
        select_Language.toggleClass('show');
    })




    //3-1 pc_menu over
    gnb_menu_list.mouseenter(function (e) {

        const idx = $(this).index();

        sub_menu_list.removeClass('Over');

        sub_menu.addClass('On');
        sub_menu_list.eq(idx).addClass('Over');
        gnb.addClass('is_Active');


    })
    // 3-2.pc_menu out
    sub_menu_list.mouseleave(function () {

        setTimeout(pc_menu_Reset, 1000)

    })

    function pc_menu_Reset() {
        sub_menu_list.removeClass('Over');
        sub_menu.removeClass('On');
        gnb.removeClass('is_Active');
    }



    //scroll시 나타나는 문제점 보완

    $(window).scroll(function () {
        pc_menu_Reset();
    })



});