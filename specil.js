const links = [
    {
        linkName: "Home",
        link: "index.html",
    },
    {
        linkName: "About",
        link: "pages/about.html",
    },
    {
        linkName: "Contact",
        link: "pages/contact.html",
    },
    {
        linkName: "Education",
        link: "pages/education.html",
    },
    {
        linkName: "About Github",
        link: "pages/how-git-works.html",
    },
    {
        linkName: "Links",
        link: "pages/links.html",
    },
    {
        linkName: "Photos",
        link: "pages/photos.html",
    },
    {
        linkName: "Places Visited",
        link: "pages/places-visited.html",
    },
    {
        linkName: "CSS Grid Refrence",
        link: "css-grid-refrence",
    },
];

const fragment = document.createDocumentFragment();

for (let i = 0; i < links.length; i++) {
    const nav = document.getElementById("nav-links");
    // Create and set attributes for a
    const a = document.createElement("a");

    const hrefs = [
        {
            href: links.link,
        },
    ];

    a.textContent = links[i].linkName;

    // Create li
    const li = document.createElement("li");

    a.href = links[i].link;

    // Append a in li
    li.appendChild(a);

    // Append li in nav
    fragment.appendChild(li);
}

const nav = document.getElementById("nav-links");
nav.appendChild(fragment);
