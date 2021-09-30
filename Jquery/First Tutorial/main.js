$(document).ready(()=>{

    const $txt = $('.txt');
    // console.log($txt)
    // $txt[0].outerText = "yar"
    $txt.on('click', ()=>{
        $('.scrt').toggle();
    })
    $txt.on('mouseenter', ()=>{
        $('.scrt').toggle();
    })
})