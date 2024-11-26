const btnCourse = document.getElementById('btnCourse');
const btnAbout = document.getElementById('btnAbout');
const btnContact = document.getElementById('btnContact');

btnCourse.addEventListener('click',()=>{
    window.location = "/content/course/course.html"
});

btnAbout.addEventListener('click',()=>{
    window.location = "/content/about us/aboutus.html"
});

btnContact.addEventListener('click',()=>{
    window.location = "/content/contact/contactus.html"
});
    