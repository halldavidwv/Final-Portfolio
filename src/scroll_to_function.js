function scroll_to_function(page_section) {
    switch(page_section) {
        case "home":
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            break;
        case "about":
            window.scrollTo({
                top: 600,
                behavior: 'smooth'
                
            });
            break;
        case "skills-and-contact":
            window.scrollTo({
                top: 100,
                behavior: 'smooth'
            });
            break;
    }
}