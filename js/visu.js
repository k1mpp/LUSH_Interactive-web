$(document).ready(function(){

    //  0 변수의 정의
    const visu_slide = $('.visual_wrap>li');
    const visu_btm_List =$('.visu_btm_wrap>li.visu_btm_List');//하단 버튼
    const visu_right =$('.visu_arrow.right');//오른쪽버튼
    const visu_left =$('.visu_arrow.left');//왼쪽버튼

    const play_Btn = $('.visu_btm_wrap li.controls_wrap .control.start');//play btn
    const stop_Btn = $('.visu_btm_wrap li.controls_wrap .control.stop');//stop btn

    // 10 play btn영역  6초에 한번씩 실행하는 내용을 변수에 저장 
    let slider_play = setInterval(auto,6000);
    let slider_stop; 

    //1-0 첫번째 함수 호출
    window.addEventListener('onload',first);

    first();

    // 1 첫번째 불이 켜지는 함수 만들기
    function first(){
        visu_slide.eq(0).addClass('On');

        slide_Event();    
    }


    // 2.이벤트 함수 만들기
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

    // 3.오는쪽 버튼 클릭 이벤트
    visu_right.click(right);


    // 3-1 right 함수 만들기
    function right(){
        const idx = $('.visual_wrap>li.On').index()//현재의 순서값 저장
        // 기본값 설정
        reset();

        if(idx < 3){//현재 순서값이 2보다 작다면
            //하나씩 더해준다
            visu_slide.eq(idx+1).addClass('On');
        }
        else if(idx == 3){//현재 순서값이 2와 같다면
            //0이된다
            visu_slide.eq(0).addClass('On');
        }
        slide_Event();
    }

    // 4.reset 함수 만들기
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



    // 5 left btn click event
    visu_left.click(left);

    // 6.left 함수
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

    // 7.하단 버튼 클릭
    visu_btm_List.click(bottom)

    // 8.하단 버튼 함수
    function bottom(e){
        e.preventDefault();
        const idx = $(this).index();
        reset();
        visu_slide.eq(idx).addClass('On');


        slide_Event();
    }


    //9 자동 play 함수 
    function auto(){
        visu_right.trigger('click');
    }



    // 11 stop btn click
    stop_Btn.click(stop)
    
    function stop(){
        stop_Btn.fadeOut(0);
        play_Btn.fadeIn(0);
        slider_stop= clearInterval(slider_play);
        
    }
    // 12. play_Btn click
    play_Btn.click(function(){
        stop_Btn.fadeIn(0);
        play_Btn.fadeOut(0);

        slider_play = setInterval(auto,6000);

    })

});
