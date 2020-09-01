const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Add cta text on h1
const cta_text_h1 = document.querySelector('.cta-text h1');
const addBR = string => string.split(" ").join("<br> ");
cta_text_h1.innerHTML = addBR(siteContent.cta.h1);

// Add cta text on button
const cta_text_button = document.querySelector('.cta-text button');
cta_text_button.textContent = siteContent.cta.button;

// Add cta image
const cta_text_img = document.getElementById('cta-img');
cta_text_img.src = siteContent.cta["img-src"];

// Add text and color green in nav elements
const navBarElements = document.querySelectorAll('.container header nav a');
for(let i = 0; i < navBarElements.length; i++) {
  navBarElements[i].textContent = siteContent.nav[`nav-item-${i+1}`]
}

// Add new item in nav bar
const navBar = document.querySelector('nav');
const addElement = document.createElement('a');
const addElement2 = document.createElement('a');
addElement.textContent = 'Lambda';
addElement.href = '#';
addElement2.textContent = 'Company';
addElement2.href = '#';
navBar.prepend(addElement2);
navBar.appendChild(addElement);

const navElements = document.querySelectorAll('nav a');

//Change nav elements color to green 
for(let i = 0; i < navElements.length; i++) {
  navElements[i].style.color = 'green';
}


// Change color clicking button
const cta_button = document.querySelector('.cta .cta-text button');
const cta_h1 = document.querySelector('.cta .cta-text h1');
function changeColor(){
  cta_h1.style.color = 'green';
}
cta_button.addEventListener('click', changeColor);

// Add text in class text-content
const text_content_h4 = document.querySelectorAll('.text-content h4');
text_content_h4[0].textContent = siteContent["main-content"]["features-h4"];
text_content_h4[1].textContent = siteContent["main-content"]["about-h4"];
text_content_h4[2].textContent = siteContent["main-content"]["services-h4"];
text_content_h4[3].textContent = siteContent["main-content"]["product-h4"];
text_content_h4[4].textContent = siteContent["main-content"]["vision-h4"];

const text_content_p = document.querySelectorAll('.text-content p');
text_content_p[0].textContent = siteContent["main-content"]["features-content"];
text_content_p[1].textContent = siteContent["main-content"]["about-content"];
text_content_p[2].textContent = siteContent["main-content"]["services-content"];
text_content_p[3].textContent = siteContent["main-content"]["product-content"];
text_content_p[4].textContent = siteContent["main-content"]["vision-content"];

// Add logo in the middle of the page
const logo_middle = document.getElementById('middle-img');
logo_middle.src = siteContent["main-content"]["middle-img-src"];

// Add contact info
const contact_title = document.querySelector('.contact h4');
contact_title.textContent = siteContent.contact["contact-h4"];
const contact_p = document.querySelectorAll('.contact p');

const createArr = (string) => string.split(' ')
const arr = createArr(siteContent.contact.address);
arr.splice(3, 0, '<br>');

for(let i = 0; i < arr.length; i++) {
  contact_p[0].innerHTML += `${arr[i]} `;
}
contact_p[1].textContent = siteContent.contact.phone;
contact_p[2].textContent = siteContent.contact.email;

//footer copyright
const copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer.copyright;
