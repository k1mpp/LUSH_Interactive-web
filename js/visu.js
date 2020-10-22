$(document).ready(function(){

//     변수
    const visu_slide = $('.visual_wrap>li');
    const visu_btm_List =$('.visu_btm_wrap>li.visu_btm_List');//하단 버튼
    const visu_right =$('.visu_arrow.right');//오른쪽버튼
    const visu_left =$('.visu_arrow.left');//왼쪽버튼

    const play_Btn = $('.visu_btm_wrap li.controls_wrap .control.start');//play btn
    const stop_Btn = $('.visu_btm_wrap li.controls_wrap .control.stop');//stop btn

    //  play btn영역
    let slider_play = setInterval(auto,6000);
    let slider_stop; 

    //첫번째 함수 호출
    window.addEventListener('onload',first);

    first();

    // TurnOn 함수
    function first(){
        visu_slide.eq(0).addClass('On');

        slide_Event();    
    }


    // Event
    function slide_Event(){

        const on_slide = $('.visual_wrap>li.On');//활성화된 슬라이드 저장
        const idx = on_slide.index();//활성화된 슬라이드의 순서값 저장
        const veil = on_slide.children('.visu_veil');//활성화된 슬라이드 자식 veil
        const txt_wrap = on_slide.children('.visu_txt_wrap');

        veil.animate({
            'width':'44%',
            'opacity':'1'
        },1000)

        txt_wrap.delay(1000).animate({
          
            'opacity':'1'
        },1000)
        // bottom btn

        visu_btm_List.eq(idx).addClass('Act');


    }

    // RightBtn 호출
    visu_right.click(right);


    // RightBtn
    function right(){
        const idx = $('.visual_wrap>li.On').index()//현재의 순서값 저장
        // 기본값 설정
        reset();

        if(idx < 3){
            visu_slide.eq(idx+1).addClass('On');
        }
        else if(idx == 3){
            visu_slide.eq(0).addClass('On');
        }
        slide_Event();
    }

    // Reset
    function reset(){
        visu_slide.removeClass('On');
        visu_btm_List.removeClass('Act');
        visu_slide.children('.visu_veil').animate({
            'width':'0%',
            'opacity':'0'
        },0)
        visu_slide.children('.visu_txt_wrap').animate({
                 'opacity':'0'
        },0)
    }



    // LeftBtn Click Event
    visu_left.click(left);

    // Left
    function left (){
        const idx = $('.visual_wrap>li.On').index()//현재의 순서값 저장
        // 기본값 설정
        reset();

        if(idx>0){
            visu_slide.eq(idx-1).addClass('On');
            
        }
        else if(idx==0){
            visu_slide.eq(3).addClass('On');

        }




        slide_Event();
    }

    // LowBtn
    visu_btm_List.click(bottom)

    function bottom(e){
        e.preventDefault();
        const idx = $(this).index();
        reset();
        visu_slide.eq(idx).addClass('On');


        slide_Event();
    }


    // AutoBtn 
    function auto(){
        visu_right.trigger('click');
    }



    // StopBtn
    stop_Btn.click(stop)
    
    function stop(){
        stop_Btn.fadeOut(0);
        play_Btn.fadeIn(0);
        slider_stop= clearInterval(slider_play);
        
    }
    //  PlayBtn click
    play_Btn.click(function(){
        stop_Btn.fadeIn(0);
        play_Btn.fadeOut(0);

        slider_play = setInterval(auto,6000);

    })

});
