const linksInterno = document.querySelectorAll(' a[href^="#"');


function scrollToSection(event){
  event.preventDefault();
  const href=event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)


  section.scrollIntoView({
      behavior:'smooth',
      block:'start'
  });
}

linksInterno.forEach((link)=>{
    link.addEventListener('click',scrollToSection)
})



const sections = document.querySelectorAll('.js-scroll');
const windowMetade=window.innerHeight*0.7


function animaScroll(){
  sections.forEach((section)=>{
    const sectionTop = section.getBoundingClientRect().top-windowMetade;
    if(sectionTop<0){
      section.classList.add('ativo');
    }
  })
}
animaScroll();
window.addEventListener('scroll',animaScroll)
