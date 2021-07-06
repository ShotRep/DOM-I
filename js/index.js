const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img")
logo.setAttribute("src", siteContent["nav"]["img-src"])

let navbar = document.querySelector("nav")
let navChildren = navbar.children
navChildren[0].innerText = "Services"
navChildren[1].innerText = "Product"
navChildren[2].innerText = "Vision"
navChildren[3].innerText = "Features"
navChildren[4].innerText = "About"
navChildren[5].innerText = "Contact"

let heading = document.querySelector("h1")
heading.innerHTML = "DOM </br> Is </br> Awesome"

let button = document.querySelector("button")
button.innerText = "Get Started"

let hLogo = document.getElementById("cta-img")
hLogo.setAttribute("src", siteContent["cta"]["img-src"])

let h4 = document.querySelectorAll("h4")
h4[0].innerText = "Features"
h4[1].innerText = "About"
h4[2].innerText = "Services"
h4[3].innerText = "Product"
h4[4].innerText = "Vision"

let topParagraphs = document.querySelectorAll(".top-content p")
topParagraphs[0].innerText =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu              ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

topParagraphs[1].innerText =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let midLogo = document.getElementById("middle-img")
midLogo.setAttribute("src", "./img/mid-page-accent.jpg")

let bottomParagraphs = document.querySelectorAll(".bottom-content p")
bottomParagraphs[0].innerText =
  "Services content elementum magna eros, ac posuere elvit tempus et.              Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bottomParagraphs[1].innerText =
  "Product content elementum magna eros, ac posuere elvit tempus et.              Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bottomParagraphs[2].innerText =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contactLabel = document.querySelector(".contact h4")
contactLabel.innerText = "Contact"

let contact = document.querySelectorAll(".contact p")
contact[0].innerHTML = "123 Way 456 Street<br /> Somewhere, USA"
contact[1].innerHTML = "1 (888) 888-8888"
contact[2].innerHTML = "sales@greatidea.io"

let footer = document.querySelector("footer p")
footer.innerText = "Copyright Great Idea! 2018"
