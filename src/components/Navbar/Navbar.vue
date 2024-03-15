<template>
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <div class="uk-navbar-container">
            <div class="uk-container uk-container-expand">
                <nav class="uk-navbar" uk-navbar>
                    <div class="uk-navbar-left">
                        <a href="/" class="uk-navbar-item uk-logo">
                            <slot name="title">UserFrosting</slot>
                        </a>
                    </div>
                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav">
                            <slot name="links"></slot>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>
