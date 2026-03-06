<script setup lang="ts">
const route = useRoute()
const { setLocale, locale } = useI18n()

type LocaleOption = {
    code: string
    label: string
}

const localeOptions: LocaleOption[] = [
    { code: 'en', label: 'English' },
    { code: 'ro', label: 'Romanian' },
    { code: 'ru', label: 'Russian' }
]

const isLangMenuOpen = ref(false)
const langDropdownRef = ref<HTMLElement | null>(null)

const currentLocaleLabel = computed(() => localeOptions.find(option => option.code === locale.value)?.label ?? locale.value)

const toggleLangMenu = () => {
    isLangMenuOpen.value = !isLangMenuOpen.value
}

const closeLangMenu = () => {
    isLangMenuOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
    if (!isLangMenuOpen.value || !langDropdownRef.value) {
        return
    }

    if (!langDropdownRef.value.contains(event.target as Node)) {
        closeLangMenu()
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})

const changeLocale = async (nextLocale: string) => {
    if (locale.value === nextLocale) {
        closeLangMenu()
        return
    }

    await setLocale(nextLocale)
    closeLangMenu()
}

function active(page: String): String {

    if (route.name === page) {
        return 'active'
    }
    return '';
}
</script>

<template>
  <!-- Navbar start -->
  <div class="container-fluid nav-bar">
        <div class="container">
            <nav class="navbar navbar-light navbar-expand-lg py-4">
                <NuxtLink to="/" class="navbar-brand">
                    <img class="logo" width="250" src="/img/logos/regal_logo.svg"></img>
                </NuxtLink>
                <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars text-primary"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <NuxtLink to="/" class="nav-item nav-link" :class="active('index')">{{ $t('home') }}</NuxtLink>
                        <NuxtLink to="/about" class="nav-item nav-link" :class="active('about')">{{ $t('about') }}</NuxtLink>
                        <NuxtLink to="/service" class="nav-item nav-link" :class="active('service')">{{ $t('services') }}</NuxtLink>
                        <NuxtLink to="/kitchens" class="nav-item nav-link" :class="active('kitchens')">{{ $t('kitchens') }}</NuxtLink>
                        <NuxtLink to="/our-work" class="nav-item nav-link" :class="active('our-work')">{{ $t('ourWork') }}</NuxtLink>
                        <NuxtLink to="/contact" class="nav-item nav-link" :class="active('contact')">{{ $t('contact') }}</NuxtLink>
                    </div>
                    <!-- <button class="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search"></i></button> -->
                    <NuxtLink to="/book" class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">{{ $t('submitRequest') }}</NuxtLink>
                    <div class="dropdown ms-auto" ref="langDropdownRef">
                        <button
                            class="btn dropdown-toggle text-capitalize"
                            type="button"
                            id="dropdownMenuLang"
                            :aria-expanded="isLangMenuOpen"
                            @click="toggleLangMenu"
                            @keydown.escape.prevent.stop="closeLangMenu"
                        >
                            {{ currentLocaleLabel }}
                        </button>
                        <ul
                            class="dropdown-menu"
                            :class="{ show: isLangMenuOpen }"
                            aria-labelledby="dropdownMenuLang"
                            role="listbox"
                        >
                            <li v-for="option in localeOptions" :key="option.code">
                                <button
                                    class="dropdown-item"
                                    type="button"
                                    :class="{ active: locale === option.code }"
                                    :aria-selected="locale === option.code"
                                    @click="changeLocale(option.code)"
                                >
                                    {{ option.label }}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->
    <!-- <ModalSearch/> -->
</template>


<style scoped>
    #lang {
      min-width: 120px;
    }
</style>