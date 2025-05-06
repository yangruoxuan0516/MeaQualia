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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Bienvenu! Bienvenue!</a></li><li class="chapter-item expanded "><a href="poem/0.html"><strong aria-hidden="true">1.</strong> 诗啊</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="poem/mypoem.html"><strong aria-hidden="true">1.1.</strong> 一些习作</a></li></ol></li><li class="chapter-item expanded "><a href="diary/0.html"><strong aria-hidden="true">2.</strong> 我的日记</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="diary/放假回家和废话产出计划.html"><strong aria-hidden="true">2.1.</strong> 放假回家和废话产出计划</a></li><li class="chapter-item expanded "><a href="diary/美丽的人风和水煮胡萝卜.html"><strong aria-hidden="true">2.2.</strong> 美丽的人、风和水煮胡萝卜</a></li><li class="chapter-item expanded "><a href="diary/第一次见到小家伙.html"><strong aria-hidden="true">2.3.</strong> 第一次见到小家伙</a></li><li class="chapter-item expanded "><a href="diary/月嫂阿姨在做饭.html"><strong aria-hidden="true">2.4.</strong> 月嫂阿姨在做饭</a></li><li class="chapter-item expanded "><a href="diary/一些广场舞经历.html"><strong aria-hidden="true">2.5.</strong> 一些广场舞经历</a></li><li class="chapter-item expanded "><a href="diary/爸爸小时候天上有很多星星.html"><strong aria-hidden="true">2.6.</strong> 爸爸小时候天上有很多星星</a></li><li class="chapter-item expanded "><a href="diary/水库我跳进水库.html"><strong aria-hidden="true">2.7.</strong> 水库！我跳进水库！</a></li><li class="chapter-item expanded "><a href="diary/标签意味着长大吗.html"><strong aria-hidden="true">2.8.</strong> 标签意味着长大吗</a></li><li class="chapter-item expanded "><a href="diary/偷闲红樱桃月饼人和开集.html"><strong aria-hidden="true">2.9.</strong> 偷闲、红樱桃月饼、人和开集</a></li><li class="chapter-item expanded "><a href="diary/电磁学基础的浪漫——我看向远方的时候在想什么.html"><strong aria-hidden="true">2.10.</strong> 电磁学基础的浪漫——我看向远方的时候在想什么？</a></li><li class="chapter-item expanded "><a href="diary/这首歌让我想起我也曾生活.html"><strong aria-hidden="true">2.11.</strong> 这首歌让我想起我也曾生活</a></li><li class="chapter-item expanded "><a href="diary/花钱好开心.html"><strong aria-hidden="true">2.12.</strong> 花钱好开心</a></li><li class="chapter-item expanded "><a href="diary/WEI-野蛮地生活.html"><strong aria-hidden="true">2.13.</strong> WEI-野蛮地生活</a></li><li class="chapter-item expanded "><a href="diary/和妈妈打电话好开心.html"><strong aria-hidden="true">2.14.</strong> 和妈妈打电话好开心</a></li><li class="chapter-item expanded "><a href="diary/窗外一只鸟飞过.html"><strong aria-hidden="true">2.15.</strong> 窗外一只鸟飞过</a></li><li class="chapter-item expanded "><a href="diary/M.BouhierEtLePterosaure.html"><strong aria-hidden="true">2.16.</strong> le ptérosaure</a></li><li class="chapter-item expanded "><a href="diary/我的屋子我的地毯.html"><strong aria-hidden="true">2.17.</strong> 我的屋子、我的地毯</a></li><li class="chapter-item expanded "><a href="diary/如果哪天我去vipassana那么这就是开端.html"><strong aria-hidden="true">2.18.</strong> 如果哪天我去vipassana，那么这就是开端</a></li><li class="chapter-item expanded "><a href="diary/在泳池底看星和极光.html"><strong aria-hidden="true">2.19.</strong> 在泳池底看星和极光</a></li><li class="chapter-item expanded "><a href="diary/像anne一样幻想.html"><strong aria-hidden="true">2.20.</strong> 像anne一样幻想</a></li><li class="chapter-item expanded "><a href="diary/slavmarket.html"><strong aria-hidden="true">2.21.</strong> slavmarket</a></li><li class="chapter-item expanded "><a href="diary/beautyfilteroverthepast.html"><strong aria-hidden="true">2.22.</strong> beauty filter over the past</a></li><li class="chapter-item expanded "><a href="diary/Festivart.html"><strong aria-hidden="true">2.23.</strong> Festiv&#39;art</a></li><li class="chapter-item expanded "><a href="diary/espagna.html"><strong aria-hidden="true">2.24.</strong> Espagna</a></li><li class="chapter-item expanded "><a href="diary/斥树.html"><strong aria-hidden="true">2.25.</strong> 斥树</a></li><li class="chapter-item expanded "><a href="diary/下雨了.html"><strong aria-hidden="true">2.26.</strong> 下雨了！</a></li><li class="chapter-item expanded "><a href="diary/厨房墙上的瓷砖.html"><strong aria-hidden="true">2.27.</strong> 厨房墙上的瓷砖</a></li><li class="chapter-item expanded "><a href="diary/买了一个法拉费.html"><strong aria-hidden="true">2.28.</strong> 买了一个法拉费</a></li><li class="chapter-item expanded "><a href="diary/chevrerieDeLily.html"><strong aria-hidden="true">2.29.</strong> Chevrerie De Lily</a></li><li class="chapter-item expanded "><a href="diary/一个要上学的清晨.html"><strong aria-hidden="true">2.30.</strong> 一个要上学的清晨</a></li><li class="chapter-item expanded "><a href="diary/在b线上隐约听到对面一家在讲话.html"><strong aria-hidden="true">2.31.</strong> 在b线上隐约听到对面一家在讲话</a></li><li class="chapter-item expanded "><a href="diary/笑醒了.html"><strong aria-hidden="true">2.32.</strong> 笑醒了</a></li><li class="chapter-item expanded "><a href="diary/在教室里在人群中.html"><strong aria-hidden="true">2.33.</strong> 在教室里、在人群中</a></li><li class="chapter-item expanded "><a href="diary/人类学家.html"><strong aria-hidden="true">2.34.</strong> 人类学家</a></li><li class="chapter-item expanded "><a href="diary/玩滑梯和摇摇木马.html"><strong aria-hidden="true">2.35.</strong> 玩滑梯和摇摇木马</a></li><li class="chapter-item expanded "><a href="diary/一些关于拓扑的怪想法.html"><strong aria-hidden="true">2.36.</strong> 一些关于拓扑的怪想法</a></li><li class="chapter-item expanded "><a href="diary/在漂浮和坐过山车之间——站9106.html"><strong aria-hidden="true">2.37.</strong> 在漂浮和坐过山车之间——站9106</a></li><li class="chapter-item expanded "><a href="diary/嚼嚼嚼元宵.html"><strong aria-hidden="true">2.38.</strong> 嚼嚼嚼元宵</a></li><li class="chapter-item expanded "><a href="diary/antibes的透明海水nice的古老pho店.html"><strong aria-hidden="true">2.39.</strong> antibes的透明海水、nice的古老pho店</a></li><li class="chapter-item expanded "><a href="diary/教堂的一点烛火.html"><strong aria-hidden="true">2.40.</strong> 教堂的一点烛火</a></li><li class="chapter-item expanded "><a href="diary/好大一座沙子山.html"><strong aria-hidden="true">2.41.</strong> 好大一座沙子山！</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
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
