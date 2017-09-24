/**
 * Main JS file for Manila behaviours
 */
 Document.prototype.ready = function(callback) {
     if (callback && typeof callback === 'function') {
         document.addEventListener("DOMContentLoaded", function() {
             if (document.readyState === "interactive" || document.readyState === "complete") {
                 return callback();
            }
        });
    }
};

(function () {
    "use strict";

    var els = [];
    var el  = document.getElementById('posts');
    if (el !== null && el !== undefined) {
        for (var i=0; i < el.childNodes.length; i++) {
            if (el.childNodes[i].nodeName === 'DIV') {
                els.push(el.childNodes[i]);
            }
        }
    }

    function onMediaScreenThree() {
        if (els.length <= 0) return;
        var size = els.length;
        var j    = 0;
        for (; j < size; j++) {
            els[j].childNodes[1].classList.remove('has-no-bottom-border');
        }
        j = 0;
        for (; j < size; j++) {
            if ((j >= 0 && j < 3 && size < 4) ||
                (j >= 3 && j < 6 && size < 7) ||
                (j >= 6 && j < 9 && size < 10) ||
                (j >= 9 && j < 12 && size < 14)) {
                els[j].childNodes[1].classList.add('has-no-bottom-border');
            }
        }
    }

    function onMediaScreenTwo() {
        if (els.length <= 0) return;
        var size = els.length;
        var j    = 0;
        for (; j < size; j++) {
            els[j].childNodes[1].classList.remove('has-no-bottom-border');
        }
        j = 0;
        for (; j < size; j++) {
            if ((j >= 0 && j < 2 && size < 3) ||
                (j >= 2 && j < 4 && size < 5) ||
                (j >= 4 && j < 6 && size < 7) ||
                (j >= 6 && j < 8 && size < 9) ||
                (j >= 8 && j < 10 && size < 11)) {
                els[j].childNodes[1].classList.add('has-no-bottom-border');
            }
        }
    }

    function onNavbarBurger() {
        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        // Check if there are any nav burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener('click', () => {
                    // Get the target from the "data-target" attribute
                    var target  = $el.dataset.target;
                    var $target = document.getElementById(target);
                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    }

    function onNavigationNavbarItem() {
        var $source = document.getElementById('main-navbar-end');
        var $els    = Array.prototype.slice.call(document.querySelectorAll('.navigation-navbar-item'), 0);
        if ($els.length > 0) {
            $els.forEach(function($el) {
                var $target = document.createElement('a');
                $target.setAttribute('href', $el.getAttribute('href'));
                $target.classList.add('navbar-item');
                $target.textContent = $el.textContent;
                $source.appendChild($target);
            });
        }
    }

    function onCoverCarousel() {
        var elemSHCC = document.querySelector('.site-header-cover-carousel');
        if (elemSHCC) {
            var flkty = new Flickity(elemSHCC, {
                bgLazyLoad: true,
                autoPlay: true,
                prevNextButtons: false
            });
        }
    }

    function onProductsCarousel() {
        var elemP = document.querySelector('.product-carousel');
        if (elemP) {
            var flktyP = new Flickity(elemP, {
                bgLazyLoad: true,
                autoPlay: false
            });
        }
    }

    function onReadMore() {
        var elemR = document.querySelector('.product-detail-content');
        if (elemR) {
            $readMoreJS.init({
                target: '.product-detail-content',
                numofWords: 30,
                toggle: true,
                moreLink: '<span class="tag is-info">READ MORE</span>',
                lessLink: '<span class="tag is-dark">READ LESS</span>'
            });
        }
    }

    function onReady() {
        onNavbarBurger();
        onNavigationNavbarItem();

        enquire.register("screen and (min-width:946px)", {
            match: function() {
                onMediaScreenThree();
            }
        });
        enquire.register("screen and (min-width:556px) and (max-width:945px)", {
            match: function() {
                onMediaScreenTwo();
            }
        });
        enquire.register("screen and (max-width:555px)", {
            match: function() {
                if (els.length <= 0) return;
                var size = els.length;
                var j    = 0;
                for (; j < size; j++) {
                    els[j].childNodes[1].classList.remove('has-no-bottom-border');
                }
            }
        });

        onCoverCarousel();
        onProductsCarousel();
        onReadMore();
        FastClick.attach(document.body);
        document.body.style.visibility = 'visible';
    }

    onReady();
})();