function scroll_to_function(page_section) {
    switch(page_section) {
        case "home":
            var view_div = document.getElementById('landing-page');
            view_div.scrollIntoView({
                behavior: 'smooth'
            });
            break;
        case "about":
            var view_div = document.getElementById('about-page');
            view_div.scrollIntoView({
                behavior: 'smooth'
            });
            break;
        case "skills-and-contact":
            var view_div = document.getElementById('skills-and-contact-page');
            view_div.scrollIntoView({
                behavior: 'smooth'
            });
            break;
    }
}