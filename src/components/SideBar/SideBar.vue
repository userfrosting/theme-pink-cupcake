<template>
    <aside class="uf-sidebar-left uk-light uk-visible@m">
        <div class="left-nav-wrap">
            <ul class="uk-nav uk-nav-default" data-uk-nav>
                <li class="uk-nav-header">NAVIGATION</li>
                <li>
                    <a href="#"><font-awesome-icon :icon="['far', 'comments']" />Messages</a>
                </li>
                <li class="uk-active">
                    <a href="#"><span data-uk-icon="icon: users" class="uk-margin-small-right"></span>Friends</a>
                </li>
                <li class="uk-parent">
                    <a href="#">
                        <span data-uk-icon="icon: thumbnails" class="uk-margin-small-right"></span>Templates
                        <span uk-nav-parent-icon></span>
                    </a>
                    <ul class="uk-nav-sub">
                        <li>
                            <a title="Article" href="https://zzseba78.github.io/Kick-Off/article.html"
                                class="uk-active">Article</a>
                        </li>
                        <li>
                            <a title="Album" href="https://zzseba78.github.io/Kick-Off/album.html">Album</a>
                        </li>
                        <li>
                            <a title="Cover" href="https://zzseba78.github.io/Kick-Off/cover.html">Cover</a>
                        </li>
                        <li>
                            <a title="Cards" href="https://zzseba78.github.io/Kick-Off/cards.html">Cards</a>
                        </li>
                        <li>
                            <a title="News Blog" href="https://zzseba78.github.io/Kick-Off/newsBlog.html">News Blog</a>
                        </li>
                        <li>
                            <a title="Price" href="https://zzseba78.github.io/Kick-Off/price.html">Price</a>
                        </li>
                        <li>
                            <a title="Login" href="https://zzseba78.github.io/Kick-Off/login.html">Login</a>
                        </li>
                        <li>
                            <a title="Login-Dark" href="https://zzseba78.github.io/Kick-Off/login-dark.html">Login -
                                Dark</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#"><span data-uk-icon="icon: album" class="uk-margin-small-right"></span>Albums</a>
                </li>
                <li>
                    <a href="#"><span data-uk-icon="icon: thumbnails" class="uk-margin-small-right"></span>Featured
                        Content</a>
                </li>
                <li>
                    <a href="#"><span data-uk-icon="icon: lifesaver" class="uk-margin-small-right"></span>Tips</a>
                </li>
                <li class="uk-parent">
                    <a href="#"><span data-uk-icon="icon: comments" class="uk-margin-small-right"></span>Reports <span
                            uk-nav-parent-icon></span></a>
                    <ul class="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                        <li class="uk-parent">
                            <a href="#">Sub Nested</a>
                            <ul>
                                <li><a href="#">Sub sub item</a></li>
                                <li><a href="#">Sub sub item</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>
