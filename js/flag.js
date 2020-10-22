$(function () {
    const fl_slider = $('.flag_slider li');
    const fl_btm_List = $('.flag_btm_wrap li');
    const fl_left = $('.flag_side.left');
    const fl_right = $('.flag_side.right');

    first();

    function first() {
        fl_slider.eq(0).addClass('On');
        fl_btm_List.eq(0).addClass('Act');
    }



    fl_right.click(function(e){
        e.preventDefault();

        const idx = $('.flag_slider li.On').index();
        fl_slider.removeClass('On');
        fl_btm_List.removeClass('Act');

        if(idx<3){
            fl_slider.eq(idx+1).addClass('On');
            fl_btm_List.eq(idx+1).addClass('Act');
            
        }
        else if(idx==3){
            fl_slider.eq(0).addClass('On');
            fl_btm_List.eq(0).addClass('Act');

        }
    })

    fl_left.click(function(e){
        e.preventDefault();

        const idx = $('.flag_slider li.On').index();
        fl_slider.removeClass('On');
        fl_btm_List.removeClass('Act');

        if(idx>0){
            fl_slider.eq(idx-1).addClass('On');
            fl_btm_List.eq(idx-1).addClass('Act');
            
        }
        else if(idx==0){
            fl_slider.eq(3).addClass('On');
            fl_btm_List.eq(3).addClass('Act');

        }

    })
    
    
    fl_btm_List.click(function(e){
        e.preventDefault();
        var idx=$(this).index();
        
        fl_slider.removeClass('On');
        fl_btm_List.removeClass('Act');
        console.log(idx);
        $(this).addClass('Act');
        fl_slider.eq(idx).addClass('On');
    })

})