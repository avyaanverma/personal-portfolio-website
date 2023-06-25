// Select all images

const images = document.querySelectorAll('.images img')

// Add a scroll event to the page
window.addEventListener('scroll', () =>)  {
    /*
        Move the images to the top by adding the scrolled
        amount and convrting it to a negative 
        number


        divide bigger no to make effect 
        more subtle 
        we apply this to make fatehr objects 
        move slower and closer objects move d
        faster
    */
   images[0].style.top = "-" + (window.scrollY/1.2) + "px";
   images[1].style.top = "-" + (window.scrollY/ 3.5) + "px";
   images[2].style.top = "-" + (window.scrollY/ 6) + "px";
   images[3].style.top = "-" + (window.scrollY/ 7) + "px";

}