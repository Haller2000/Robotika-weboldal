const images1 = ["../Képek/regi1.jpg", "../Képek/regi2.jpg", "../Képek/regi3.jpg", "../Képek/regi4.jpg", "../Képek/regi5.jpg", ];


const images2 = ["../Képek/foto1.jpg", "../Képek/foto2.jpg", "../Képek/foto3.jpg", "../Képek/foto4.jpg", "../Képek/foto5.jpg", "../Képek/foto6.jpg",];



let index1 = 0;
let index2 = 0;


function nextImage(imageId, ) {
    if (imageId === "image1") {
        index1 = (index1 + 1) % images1.length; 
        document.getElementById(imageId).src = images1[index1];

    } else if (imageId === "image2") {
        index2 = (index2 + 1) % images2.length; 
        document.getElementById(imageId).src = images2[index2];
    }
}
