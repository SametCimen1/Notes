$(document).ready(()=>{
    $('.hello').on('click', () =>{
        // $('.secret').toggle();
        $('.secret').fadeToggle(400);
        $('.img2').fadeToggle();
        $('.img').fadeToggle(2000);
    })
})