let db = [
    {imagem: "img/mini01.jpg", titulo: ""},
    {imagem: "img/mini02.jpg", titulo: ""},
    {imagem: "img/mini03.jpg", titulo: ""},
    {imagem: "img/mini04.jpg", titulo: ""},
    {imagem: "img/mini05.jpg", titulo: ""},
    {imagem: "img/mini06.jpg", titulo: ""},
    {imagem: "img/mini07.jpg", titulo: ""},
    {imagem: "img/mini08.jpg", titulo: ""},
    {imagem: "img/mini09.jpg", titulo: ""},
    {imagem: "img/mini10.jpg", titulo: ""},
    {imagem: "img/mini11.jpg", titulo: ""},
    {imagem: "img/mini12.jpg", titulo: ""},
    {imagem: "img/mini13.jpg", titulo: ""},
    {imagem: "img/mini14.jpg", titulo: ""},
    {imagem: "img/mini15.jpg", titulo: ""},
    {imagem: "img/mini16.jpg", titulo: ""},
    {imagem: "img/mini17.jpg", titulo: ""},
    {imagem: "img/mini18.jpg", titulo: ""},
    {imagem: "img/mini19.jpg", titulo: ""},
    {imagem: "img/mini20.jpg", titulo: ""},
];


for(var i = 0; i < db.length; i++) {

    let bloco = `
        <div class="item">
            <img class="box-filme" src="${db[i].imagem}" alt="" srcset="">
        </div>
    `;

    $('#carousel-box').append(bloco);
}


// ----------- CAROUSEL

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// function abrirPopUpPlay(){
//     document.getElementById('pop-up').style.display = 'block';
//     document.getElementById('videoBox').innerHTML = `
//         <object id="videosBox" >
//             <param name="movie" value="http://www.youtube.com/v/KYKpcWuZDYs" />
//             <embed class="videoBox" src="http://www.youtube.com/v/KYKpcWuZDYs" type="application/x-shockwave-flash" />
//         </object>
//     `
// }

// function fecharPopUpPlay(){
//     document.getElementById('pop-up').style.display = 'none';
//     document.getElementById('videoBox').innerHTML = `
//         <object id="videoBox"></object>
//     `
// }
