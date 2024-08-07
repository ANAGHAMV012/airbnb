const azure = {
    title: "Video Conferencing, Meetings, Calling | Microsoft Teams",
    nav: {
        menu: "images/menu.png",
        sear: "Search",
        searchimage:"icons/search.svg",
        searchimage:"icons/search.svg",
        logo: "images/RE1Mu3b.png",
        logoLink: "https://www.microsoft.com/en-in/",
        arrowtext: "Azure",
        arrow: "icons/down-arrow.png",
        features: [
            {
            title: "<span>Explore</span>",
            icon: "icons/arrow-down.svg"
            },
            {
            title: "<span>Products</span>",
            icon: "icons/arrow-down.svg"
            },
            {
            title: "Solutions",
            icon: "icons/arrow-down.svg"
            },
            {
            title: "Pricing",
            icon: "icons/arrow-down.svg"
            },
            {
            title: "Partners",
            icon: "icons/arrow-down.svg"
            },
            {
            title: "Resources",
            icon: "icons/arrow-down.svg"
            },
        ],
        lists: [
            {
            title: "Learn"
            },
            {
            title: "Support"
            },
            {
            title: "Contact Sales"
            },
            {
            title: "Get started with Azure"
            },
            {
            title: "Sign in"
            }
        ],
        explore: [
            {
            title: "Get to know Azure",
            link: "https://azure.microsoft.com/en-in/explore/"
            },
            {
            title: "Global infrastructure",
            link: "https://azure.microsoft.com/en-in/explore/global-infrastructure/"
            },
            {
            title: "FinOps on Azure",
            link: "https://azure.microsoft.com/en-in/solutions/finops/"
            },
            {
            title: "Azure Essentials",
            link: "https://azure.microsoft.com/en-in/solutions/azure-essentials",
            },
            {
            title: "Customer stories",
            links: "https://azure.microsoft.com/en-in/resources/customer-stories/"
            },
            {
            title: "Azure innovation insights",
            links: "https://azure.microsoft.com/en-in/explore/innovation-insights/"
            }
        ],
    },
    banner: {
        backgroundimage: "images/Mobile-bg.avif",
        backgroundImage1: "images/Mobile-hero-background@2x1.webp",
        oneO: "AZURE. LIMITLESS INNOVATION.",
        twoO: "Build what’s next",
        threeO: "Get tools to take care of the busywork and streamline developer innovation with Azure. Pay as you go or try Azure free for up to 30 days. There’s no upfront commitment—cancel anytime.",
        
        actionButton: {
            four: "Get started with Azure",
        }
    },
}
document.addEventListener('DOMContentLoaded', function(){
    function set(){
        document.title = azure.title
        const navCont = document.getElementById("nav-cont")
        const menuImg = document.getElementById("menu-img")
        menuImg.src = azure.nav.menu
        const searchTxt = document.getElementById("search-txt")
        searchTxt.innerHTML = azure.nav.sear
        const searchImg = document.getElementById("search-img")
        searchImg.src = azure.nav.searchimage
        const searchImg2 = document.getElementById("search-img2")
        searchImg2.src = azure.nav.searchimage
        const logoImg = document.getElementById("logo-img")
        logoImg.src = azure.nav.logo
        const azuTxt = document.getElementById("azu-txt")
        azuTxt.innerHTML = azure.nav.arrowtext
        const azu = document.getElementById('azutxt')
        azu.innerHTML = azure.nav.arrowtext
        const azuIco = document.getElementById("azu-ic")
        azuIco.src = azure.nav.arrow
        const menu = document.getElementById("menu")
        azure.nav.features.forEach(item => {
            const menuItem = document.createElement('li')
            menuItem.innerHTML = `
            <a id="exp">
                ${item.title}
                <img src="${item.icon}">
            </a>`
            menu.appendChild(menuItem)
        });
        const rLists = document.getElementById("rlists")
        azure.nav.lists.forEach(item => {
            const listItem = document.createElement('li')
            listItem.innerHTML = `
            <a href = "${item.link}">
                ${item.title}
            </a>`
            rLists.appendChild(listItem)
        });
        const backgroundImage = document.getElementById("background-image")
        backgroundImage.src = azure.banner.backgroundimage

        const backgroundImage1 = document.getElementById("background-image1")
        backgroundImage1.src = azure.banner.backgroundImage1
        const exp = document.getElementById("exp");
        exp.addEventListener('click', function() {
            let dropdownMenu = document.querySelector('.dropdown-menu');
            if (!dropdownMenu) {
                dropdownMenu = document.createElement('ul');
                dropdownMenu.className = 'dropdown-menu';
                azure.nav.explore.forEach(item => {
                    const exploreItem = document.createElement('li');
                    exploreItem.innerHTML = `<a href="${item.link}">${item.title}</a>`;
                    dropdownMenu.appendChild(exploreItem);
                });
                exp.parentElement.appendChild(dropdownMenu);
            }
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Hide dropdown menu if clicked outside
        document.addEventListener('click', function(event) {
            const dropdownMenu = document.querySelector('.dropdown-menu');
            if (dropdownMenu && !exp.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = 'none';
            }
        });

        

        logoImg.addEventListener('click', function () {
            const url = 'https://www.microsoft.com/en-in/'
            window.location.href = url
        })

        const firstOne= document.getElementById("one")
        firstOne.innerHTML = azure.banner.oneO

        const sec= document.getElementById("two")
        sec.innerHTML = azure.banner.twoO

        const thi= document.getElementById("three")
        thi.innerHTML = azure.banner.threeO

        const fou= document.getElementById("four")
        fou.innerHTML = azure.banner.fourO
    }
    set()
})