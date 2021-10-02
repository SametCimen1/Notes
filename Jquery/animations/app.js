$(document).ready(()=>{
    

   const isInViewport = function(){
    
    const $top_of_element =  $('.lastOne').offset().top;
    const $bottom_of_element =  $('.lastOne').offset().top + $('.lastOne').outerHeight();
    const $bottom_of_screen = ($(window).scrollTop() + $(window).innerHeight())-200;
    const $top_of_screen = $(window).scrollTop();

    
    console.log($top_of_element)
    console.log($bottom_of_element)
    console.log($bottom_of_screen)
    console.log($top_of_screen)
    
    if($top_of_element === 0){
        return false;
    }
    if (($bottom_of_screen > $top_of_element) && ($bottom_of_element > $top_of_screen)){
        // the element is visible, do something
       return true;
        } else {
        // the element is not visible, do something else
        return false;
        }  
}

const $elem = $('.lastOne')
   $(window).on('scroll', function() {
    // if ($('.hello').isInViewport()) {
    //     console.log("in screen")
    // } else {
    //     console.log("not in screen")
    // }
    
    if(isInViewport( )){
        console.log("true")
        $('.lastOne').css({
            visibility: 'visible'
        })
        $('.lastOne').addClass('animate__jackInTheBox')
    }
    else{
        console.log("false")

    }
});
  
})