/*
 //dynamic date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
//toggle nav
const btn = document.querySelector(".nav_toggle");
const linksContainer = document.querySelector(".links_container");
const links = document.querySelector(".links");

btn.addEventListener("click",()=>{
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(linksContainerHeight === 0){
     linksContainer.style.height = `${linksHeight}px`
    }else{
     linksContainer.style.height = 0;
    }
 })
 //fixed nav , backToTOp btn
 const navBar = document.getElementById("nav");
 const backToTop = document.querySelector(".back_to_top");
 window.addEventListener("scroll",()=>{
    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;

    if(scrollHeight > navHeight){
        navBar.classList.add("fixed_nav");
    }else{
        navBar.classList.remove("fixed_nav");
    }
    if(scrollHeight > 500){
        backToTop.classList.add("show_link")
    }else{
        backToTop.classList.remove("show_link")

    }
 })
 const scrollLinks = document.querySelectorAll(".link")
 scrollLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = document.querySelector(".fixed_nav");
        let position = element.offsetTop - navHeight;
        console.log(position)
        if(!fixedNav){
            position = position + 20;
        }
        if(navHeight > 200){
            position = position + linksContainerHeight;
        }
        window.scrollTo({
            top:position,
            left:0,
        })
        linksContainer.style.height = 0;
    })
 })*/
 const navToggle = document.querySelector(".nav_toggle");
 const linksContainer = document.querySelector(".links_container")
 const links = document.querySelector(".links")
 navToggle.addEventListener("click",()=>{
    //linksContainer.classList.toggle("show_links");
    const linksContainerHeigth = linksContainer.getBoundingClientRect().height;
    const linksHeigth = links.getBoundingClientRect().height;
    if(linksContainerHeigth === 0){
        linksContainer.style.height = `${linksHeigth}px`;
    }else{
        linksContainer.style.height = 0;
    }
 })

 const nav = document.getElementById("nav");
 window.addEventListener("scroll",()=>{
    const navHeight = nav.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset ;
    if(scrollHeight > navHeight){
        nav.classList.add("fixed_nav")
    }else{
        nav.classList.remove("fixed_nav")
    }
 })

 const scrollLinks = document.querySelectorAll(".link")
 scrollLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
       e.preventDefault();
       const id = e.currentTarget.getAttribute('href').slice(1);
       const element = document.getElementById(id)
       const navHeight = nav.getBoundingClientRect().height;
       const linksContainerHeigth = linksContainer.getBoundingClientRect().height;
       const fixedNav = document.querySelector(".fixed_nav");
       let position = element.offsetTop - navHeight;
       if(linksContainerHeigth > 100){
        position = position + linksContainerHeigth;
       }
       if(!fixedNav){
        position = position + 20;
       }
        window.scrollTo({
            top:position,
            left:0,
        })
        linksContainer.style.height = 0;
    })
 })