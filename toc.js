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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Bienvenu! Bienvenue!</a></li><li class="chapter-item expanded "><a href="poem/0.html"><strong aria-hidden="true">1.</strong> 诗啊</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="poem/mypoem.html"><strong aria-hidden="true">1.1.</strong> 一些习作</a></li></ol></li><li class="chapter-item expanded "><a href="diary/0.html"><strong aria-hidden="true">2.</strong> 我的日记</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="diary/放假回家和废话产出计划.html"><strong aria-hidden="true">2.1.</strong> 放假回家和废话产出计划</a></li><li class="chapter-item expanded "><a href="diary/美丽的人、风和水煮胡萝卜.html"><strong aria-hidden="true">2.2.</strong> 美丽的人、风和水煮胡萝卜</a></li><li class="chapter-item expanded "><a href="diary/第一次见到小家伙.html"><strong aria-hidden="true">2.3.</strong> 第一次见到小家伙</a></li><li class="chapter-item expanded "><a href="diary/月嫂阿姨在做饭.html"><strong aria-hidden="true">2.4.</strong> 月嫂阿姨在做饭</a></li><li class="chapter-item expanded "><a href="diary/一些广场舞经历.html"><strong aria-hidden="true">2.5.</strong> 一些广场舞经历</a></li><li class="chapter-item expanded "><a href="diary/爸爸小时候天上有很多星星.html"><strong aria-hidden="true">2.6.</strong> 爸爸小时候天上有很多星星</a></li><li class="chapter-item expanded "><a href="diary/水库！我跳进水库！.html"><strong aria-hidden="true">2.7.</strong> 水库！我跳进水库！</a></li><li class="chapter-item expanded "><a href="diary/一些可以跨越时间的关系.html"><strong aria-hidden="true">2.8.</strong> 一些可以跨越时间的关系</a></li><li class="chapter-item expanded "><a href="diary/标签意味着长大吗.html"><strong aria-hidden="true">2.9.</strong> 标签意味着长大吗</a></li><li class="chapter-item expanded "><a href="diary/非常非常非常难过.html"><strong aria-hidden="true">2.10.</strong> 非常非常非常难过</a></li><li class="chapter-item expanded "><a href="diary/偷闲、红樱桃月饼、人和开集.html"><strong aria-hidden="true">2.11.</strong> 偷闲、红樱桃月饼、人和开集</a></li><li class="chapter-item expanded "><a href="diary/电磁学基础的浪漫——我看向远方的时候在想什么？.html"><strong aria-hidden="true">2.12.</strong> 电磁学基础的浪漫——我看向远方的时候在想什么？</a></li><li class="chapter-item expanded "><a href="diary/这首歌让我想起我也曾生活.html"><strong aria-hidden="true">2.13.</strong> 这首歌让我想起我也曾生活</a></li><li class="chapter-item expanded "><a href="diary/花钱好开心.html"><strong aria-hidden="true">2.14.</strong> 花钱好开心</a></li><li class="chapter-item expanded "><a href="diary/WEI-野蛮地生活.html"><strong aria-hidden="true">2.15.</strong> WEI-野蛮地生活</a></li><li class="chapter-item expanded "><a href="diary/和妈妈打电话好开心.html"><strong aria-hidden="true">2.16.</strong> 和妈妈打电话好开心</a></li><li class="chapter-item expanded "><a href="diary/什么戏剧旅行、什么戏剧盲盒、什么戏剧生活.html"><strong aria-hidden="true">2.17.</strong> 什么戏剧旅行、什么戏剧盲盒、什么戏剧生活</a></li><li class="chapter-item expanded "><a href="diary/活着干嘛.html"><strong aria-hidden="true">2.18.</strong> 活着干嘛</a></li><li class="chapter-item expanded "><a href="diary/窗外一只鸟飞过.html"><strong aria-hidden="true">2.19.</strong> 窗外一只鸟飞过</a></li><li class="chapter-item expanded "><a href="diary/M.BouhierEtLePterosaure.html"><strong aria-hidden="true">2.20.</strong> le ptérosaure</a></li><li class="chapter-item expanded "><a href="diary/我的屋子、我的地毯.html"><strong aria-hidden="true">2.21.</strong> 我的屋子、我的地毯</a></li><li class="chapter-item expanded "><a href="diary/在法国剁手pdd.html"><strong aria-hidden="true">2.22.</strong> 在法国剁手pdd</a></li><li class="chapter-item expanded "><a href="diary/如果哪天我去vipassana，那么这就是开端.html"><strong aria-hidden="true">2.23.</strong> 如果哪天我去vipassana，那么这就是开端</a></li><li class="chapter-item expanded "><a href="diary/parrainage.html"><strong aria-hidden="true">2.24.</strong> parrainage TODO</a></li><li class="chapter-item expanded "><a href="diary/villagefrançais.html"><strong aria-hidden="true">2.25.</strong> Village Français</a></li><li class="chapter-item expanded "><a href="diary/在泳池底看星和极光.html"><strong aria-hidden="true">2.26.</strong> 在泳池底看星和极光</a></li><li class="chapter-item expanded "><a href="diary/像anne一样幻想.html"><strong aria-hidden="true">2.27.</strong> 像anne一样幻想</a></li><li class="chapter-item expanded "><a href="diary/slavmarket.html"><strong aria-hidden="true">2.28.</strong> slavmarket</a></li><li class="chapter-item expanded "><a href="diary/beautyfilteroverthepast.html"><strong aria-hidden="true">2.29.</strong> beauty filter over the past</a></li><li class="chapter-item expanded "><a href="diary/rdvavecjoris.html"><strong aria-hidden="true">2.30.</strong> rdv avec joris</a></li><li class="chapter-item expanded "><a href="diary/Festiv'art.html"><strong aria-hidden="true">2.31.</strong> Festiv&#39;art</a></li><li class="chapter-item expanded "><a href="diary/espagna.html"><strong aria-hidden="true">2.32.</strong> Espagna</a></li><li class="chapter-item expanded "><a href="diary/斥树.html"><strong aria-hidden="true">2.33.</strong> 斥树</a></li><li class="chapter-item expanded "><a href="diary/下雨了！.html"><strong aria-hidden="true">2.34.</strong> 下雨了！</a></li><li class="chapter-item expanded "><a href="diary/厨房墙上的瓷砖.html"><strong aria-hidden="true">2.35.</strong> 厨房墙上的瓷砖</a></li><li class="chapter-item expanded "><a href="diary/等一辆陌生的公交车.html"><strong aria-hidden="true">2.36.</strong> 等一辆陌生的公交车</a></li><li class="chapter-item expanded "><a href="diary/买了一个法拉费.html"><strong aria-hidden="true">2.37.</strong> 买了一个法拉费</a></li><li class="chapter-item expanded "><a href="diary/chevrerieDeLily.html"><strong aria-hidden="true">2.38.</strong> Chevrerie De Lily</a></li><li class="chapter-item expanded "><a href="diary/一个要上学的清晨.html"><strong aria-hidden="true">2.39.</strong> 一个要上学的清晨</a></li></ol></li><li class="chapter-item expanded "><a href="commentaire/0.html"><strong aria-hidden="true">3.</strong> 弹幕</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="commentaire/sltbyc.html"><strong aria-hidden="true">3.1.</strong> 诗里特别有禅</a></li><li class="chapter-item expanded "><a href="commentaire/yn.html"><strong aria-hidden="true">3.2.</strong> 厌女</a></li><li class="chapter-item expanded "><a href="commentaire/fjyxdxlx.html"><strong aria-hidden="true">3.3.</strong> 佛教与现代心理学</a></li></ol></li></ol>';
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
