$(document).ready(function($){

    $.supersized({

        // Functionality
        vertical_center:0,
    	slideshow:1,
    	navigation:1,
        slide_interval     : 3000,    // Length between transitions
        transition         : 1,    // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed   : 3000,    // Speed of transition
        performance        : 1,    // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)

        // Size & Position
        min_width          : 0,    // Min width allowed (in pixels)
        min_height         : 0,    // Min height allowed (in pixels)
        vertical_center    : 1,    // Vertically center background
        horizontal_center  : 1,    // Horizontally center background
        fit_always         : 0,    // Image will never exceed browser width or height (Ignores min. dimensions)
        fit_portrait       : 1,    // Portrait images will not exceed browser height
        fit_landscape      : 0,    // Landscape images will not exceed browser width

        // Components
        slide_counter:1,
        slide_captions:1,
        slide_links        : 'blank',    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        slides             : [    // Slideshow Images
                                 /**
                                  * @author 皇甫
                                  * @change 根据window.location API获取绝对地址
                                  */                                  
                                 {image : window.location.protocol+'//'+window.location.host+'/static/images/1.jpg'},
                                 {image : window.location.protocol+'//'+window.location.host+'/static/images/2.jpg'},
                                 {image : window.location.protocol+'//'+window.location.host+'/static/images/3.jpg'},
                             ]

    });
    
    //设置supersized元素box-sizing属性
    $("#supersized").css("box-sizing", "content-box");
    //$(".connect p").eq(0).animate({"left":"0%"}, 600);
    //$(".connect p").eq(1).animate({"left":"0%"}, 400);    
});
