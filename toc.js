// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Bienvenu! Bienvenue!</a></li><li class="chapter-item expanded "><a href="poem/0.html"><strong aria-hidden="true">1.</strong> 诗啊</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="poem/mypoem.html"><strong aria-hidden="true">1.1.</strong> 一些习作</a></li></ol></li><li class="chapter-item expanded "><a href="diary/0.html"><strong aria-hidden="true">2.</strong> 我的日记</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="diary/Festivart.html"><strong aria-hidden="true">2.1.</strong> Festiv&#39;art</a></li><li class="chapter-item expanded "><a href="diary/espagna.html"><strong aria-hidden="true">2.2.</strong> Espagna</a></li><li class="chapter-item expanded "><a href="diary/斥树.html"><strong aria-hidden="true">2.3.</strong> 斥树</a></li><li class="chapter-item expanded "><a href="diary/下雨了！.html"><strong aria-hidden="true">2.4.</strong> 下雨了！</a></li><li class="chapter-item expanded "><a href="diary/厨房墙上的瓷砖.html"><strong aria-hidden="true">2.5.</strong> 厨房墙上的瓷砖</a></li><li class="chapter-item expanded "><a href="diary/等一辆陌生的公交车.html"><strong aria-hidden="true">2.6.</strong> 等一辆陌生的公交车</a></li><li class="chapter-item expanded "><a href="diary/买了一个法拉费.html"><strong aria-hidden="true">2.7.</strong> 买了一个法拉费</a></li><li class="chapter-item expanded "><a href="diary/chevrerieDeLily.html"><strong aria-hidden="true">2.8.</strong> Chevrerie De Lily</a></li><li class="chapter-item expanded "><a href="diary/一个要上学的清晨.html"><strong aria-hidden="true">2.9.</strong> 一个要上学的清晨</a></li></ol></li><li class="chapter-item expanded "><a href="commentaire/0.html"><strong aria-hidden="true">3.</strong> 弹幕</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="commentaire/sltbyc.html"><strong aria-hidden="true">3.1.</strong> 诗里特别有禅</a></li><li class="chapter-item expanded "><a href="commentaire/yn.html"><strong aria-hidden="true">3.2.</strong> 厌女</a></li><li class="chapter-item expanded "><a href="commentaire/fjyxdxlx.html"><strong aria-hidden="true">3.3.</strong> 佛教与现代心理学</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
