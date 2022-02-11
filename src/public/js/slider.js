var sections = new Array(5);
        sections[0] = "home";
        sections[1] = "aboutme";
        sections[2] = "skills";
        sections[3] = "portafolio";
        sections[4] = "blog";

        alertSize();

        function alertSize() {
            var width = 0,
                height = 0;
            if (typeof(window.innerWidth) == 'number') {  //No-IE
                width = window.innerWidth;
                height = window.innerHeight;
            } else if (document.documentElement  && (document.documentElement.clientWidth ||  document.documentElement.clientHeight)) {  //IE 6+
                width = document.documentElement.clientWidth;
                height = document.documentElement.clientHeight;
            } else if (document.body && (document.body.clientWidth ||  document.body.clientHeight)) { //IE 4 compatible
                width = document.body.clientWidth;
                height = document.body.clientHeight;
            }

            var display;
            var menu = document.getElementById("cardMenu")
            display = menu.style.display;

            if (width < 767) {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }

        function displayMenu() {
            var display;
            var menu = document.getElementById("cardMenu")
            display = menu.style.display;

            if (display == "none") {
                menu.style.display = "block";
            } else {
                menu.style.display = "none";
            }
        }

        function setColor(i) {
            var search;
            var bkgr_menu;

            if (sections[i] == "home") {
                bkgr_menu = "#233D58";
            } else {
                bkgr_menu = "#29abe2";
            }
            search = document.getElementById(sections[i]);
            var menu = document.getElementsByTagName("header")[0];
            menu.style.background = bkgr_menu;
        }

        function navSection(nav) {
            var search;
            var show;

            for (var i = 0; i < 5; i++) {
                search = document.getElementById(sections[i]);
                search.style.display = "none";

                if (sections[i] == nav) {
                    search.style.display = "block";
                    setColor(i);
                }
            }
        }

        function displaySection(nav) {
            var search;
            var show;

            for (var i = 0; i < 5; i++) {
                search = document.getElementById(sections[i]);
                show = search.style.display;

                if (show == "block") {
                    search.style.display = "none"
                    if (nav == "next") {
                        i++;
                        if (i > 4) {
                            i = 0;
                        }
                    }

                    if (nav == "prev") {
                        i--;
                        if (i < 0) {
                            i = 4;
                        }
                    }
                    search = document.getElementById(sections[i]);
                    search.style.display = "block";
                    break;
                }
            }

            setColor(i);
        }

        function displayFormContact(status) {
            var form = document.getElementById("contactForm");
            form.style.display = status;
        }