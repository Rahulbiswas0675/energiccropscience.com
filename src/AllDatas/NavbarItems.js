

export const NavbarItems = [
    {
        item_id: 1,
        item_name: "Home",
        item_icon: "home",
        item_link: "/"
    },
    {
        item_id: 2,
        item_name: "About",
        item_icon: "about",
        item_link: "/about"
    },
    {
        item_id: 3,
        item_name: "Products",
        item_icon: "products",
        item_link: "/products",
        products: [
            {
                name: "Insecticide",
                link: "/products",
            },
            {
                name: "Fungicide",
                link: "/products",
            },
            {
                name: "Herbicide",
                link: "/products",
            },
            {
                name: "Pgr",
                link: "/products",
            }
        ]
    },
    {
        item_id: 4,
        item_name: "Certificates",
        item_icon: "certificates",
        item_link: "/certificates"
    }
]