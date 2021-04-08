const links = [
    {
        linkName: "Home",
        link: "index-new.html",
    },
    {
        linkName: "About",
        link: "about-new.html",
    },
    {
        linkName: "Contact",
        link: "contact-new.html",
    },
    {
        linkName: "Education",
        link: "education-new.html",
    },
    {
        linkName: "About Github",
        link: "how-git-works-new.html",
    },
    {
        linkName: "Links",
        link: "links-new.html",
    },
    {
        linkName: "Photos",
        link: "photos-new.html",
    },
    {
        linkName: "Places Visited",
        link: "places-visited-new.html",
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
