<script setup>
import { onMounted, ref } from 'vue'
import { NAV_BANNER } from '../constants'

const open = ref(true)
const banner = ref(NAV_BANNER)
let dismissFn

onMounted(() => {
  dismissFn = () => {
    open.value = false
    document.documentElement.classList.add('banner-dismissed')
    localStorage.setItem(
    `wa-docs-banner-${window.__WA_BANNER_ID__}`,
    'true',
    )
  }
})

function openLink() {
  window.open(banner.value.link, '_self')
}
</script>

<template>
  <ClientOnly>
    <div v-if="open" class="banner">
      <div id="vt-top">
        <div class="vt-background-wrapper">
          <div class="vt-core">
            <div class="vt-title-wrapper">
              <div class="vt-title" v-html="banner.title" />
            </div>
            <div class="vt-button-wrapper">
              <div class="vt-button" @click.prevent.stop="openLink">
                立即查看
              </div>
            </div>
          </div>
          <div class="vt-close" @click.prevent.stop="dismissFn" />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
html:not(.banner-dismissed) {
  --vp-layout-top-height: 50px;
}

:root {
  --banner-l-c1: #b2b2b2;
  --banner-l-c2: #fff;
  --banner-l-c3: #d9d9d9;
  --banner-d-c1: #1d1d1d;
  --banner-d-c2: #4e4f51;
  --banner-d-c3: #3c3c3c;
}

:root {
  --c-b-c1: var(--banner-l-c1);
  --c-b-c2: var(--banner-l-c2);
  --c-b-c3: var(--banner-l-c3);
  --c-b-c4: #0000;
}

.dark {
  --c-b-c1: var(--banner-d-c1);
  --c-b-c2: var(--banner-d-c2);
  --c-b-c3: var(--banner-d-c3);
}

#vt-top {
  box-sizing: border-box;
  height: var(--vp-layout-top-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  line-height: 1;
}

#vt-top .vt-background-wrapper {
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0 10px;
  height: 100%;
  width: 100%;
}

#vt-top:hover {
  text-decoration: none;
}

#vt-top .vt-core {
  display: flex;
  align-items: center;
  width: 260px;
}

#vt-top .vt-core .vt-title-wrapper {
  text-align: center;
  width: 174px;
  margin: 0 auto;
}

#vt-top .vt-core .vt-button {
  background: #00B5AB;
  border-radius: 3px;
  color: #fff;
  padding: 8px 6px;
  text-align: center;
  font-size: 10px;
  white-space: nowrap;
  cursor: pointer;
}

#vt-top .vt-core .vt-button:hover {
  background: #e5c60b;
}

#vt-top .vt-close {
  height: 100%;
  width: 75px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}

#vt-top .vt-close:after,
#vt-top .vt-close:before {
  content: "";
  width: 25px;
  height: 2px;
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: var(--vp-c-text-1);
  transform-origin: 50%;
  transform: rotate(-45deg);
  transition: all .2s ease-out;
}

#vt-top .vt-close:after {
  transform: rotate(45deg);
}

#vt-top .vt-close:hover:after,
#vt-top .vt-close:hover:before {
  transform: rotate(180deg);
}

@media (max-width:770px) {
  #vt-top .vt-close:after,
  #vt-top .vt-close:before {
    width: 15px;
    right: 14px;
  }
}

@media (min-width: 680px) {
  #vt-top .vt-core {
    width: auto;
  }

  #vt-top .vt-core .vt-title-wrapper {
    margin: 0 20px 0 0;
    width: 450px;
  }

  #vt-top .vt-core .vt-title {
    display: block;
    font-size: 17px;
  }

  #vt-top .vt-core .vt-title strong {
    color: #00B5AB;
  }

  #vt-top .vt-core .vt-button {
    font-size: 12px;
    padding: 10px 14px;
  }
}

@media (min-width: 1280px) {
  #vt-top .vt-core {
    margin-right: 0;
  }
  #vt-top .vt-core .vt-title-wrapper {
    width: auto;
  }
}
</style>

<style scoped>
.banner {
  --s: 37px;
  --_g: var(--c-b-c3) 0 120deg,var(--c-b-c4) 0;
  background:
    conic-gradient(from -60deg at 50% calc(100%/3),var(--_g)),
    conic-gradient(from 120deg at 50% calc(200%/3),var(--_g)),
    conic-gradient(from  60deg at calc(200%/3),var(--c-b-c3) 60deg,var(--c-b-c2) 0 120deg, var(--c-b-c4) 0),
    conic-gradient(from 180deg at calc(100%/3),var(--c-b-c1) 60deg,var(--_g)),
    linear-gradient(90deg,var(--c-b-c1)   calc(100%/6),var(--c-b-c2) 0 50%,
                          var(--c-b-c1) 0 calc(500%/6),var(--c-b-c2) 0);
  background-size: calc(1.732*var(--s)) var(--s);
  position: fixed;
  z-index:var(--vp-z-index-layout-top);
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  height: var(--vp-layout-top-height);
  line-height: 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-1);

}

.banner-dismissed .banner {
  display: none;
}
</style>
