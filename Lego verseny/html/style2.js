const images3 = [
    "../Képek/terv3.jpg",
    "../Képek/terv4.jpg",
    "../Képek/terv5.jpg",
    "../Képek/terv6.jpg",
    "../Képek/terv7.jpg",
];
let index3 = 0;

function nextImage(imageId) {
    if (imageId === "image3") {
        index3 = (index3 + 1) % images3.length;
        document.getElementById(imageId).src = images3[index3];
    }
}
