$(document).ready(()=>{
    $('.hello').on('click', () =>{
        // $('.secret').toggle();
        $('.secret').fadeToggle(400);
        $('.img').fadeToggle(200);

        $('.img2').fadeToggle(200);
    })
    $('.img2').on('click', () => {
        $('.img2').slideToggle();
    })
})