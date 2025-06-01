<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">
    <!-- Header -->
    <header
      class="text-black0"
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        padding: '20px',
        height: headerHeight,
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'height 0.5s ease',
      }"
    >
      <!-- Logo -->
      <q-img :src="logo" :width="isMobile ? '80%' : '20%'" />

      <!-- Navegação desktop -->
      <div v-if="!isMobile" class="row q-gutter-sm text-white montserrat items-center">
        <q-btn flat size="1rem" @click="$router.push({ path: '/' })">Home</q-btn>
        <q-btn flat size="1rem" @click="$router.push({ path: '/tratamentos' })">Tratamentos</q-btn>
        <q-btn flat size="1rem" @click="$router.push({ path: '/contato' })">Contato</q-btn>
        <q-btn flat size="1rem" @click="$router.push({ path: '/sobre' })">Sobre</q-btn>
      </div>

      <!-- Botão menu (mobile) -->
      <q-btn v-if="isMobile" flat round icon="menu" color="white" @click="drawerOpen = true" />
    </header>

    <!-- Drawer mobile -->
    <q-drawer v-if="isMobile" v-model="drawerOpen" side="right" overlay bordered>
      <q-list>
        <q-item clickable @click="navigateTo('/')">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('/tratamentos')">
          <q-item-section>Tratamentos</q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('/contato')">
          <q-item-section>Contato</q-item-section>
        </q-item>
        <q-item clickable @click="navigateTo('/sobre')">
          <q-item-section>Sobre</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Página -->
    <q-page-container>
      <router-view />

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          fab
          :icon="biWhatsapp"
          color="green"
          type="a"
          href="https://wa.me/5541996275685?text=Ola,%20gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos"
          target="_blank"
        />
      </q-page-sticky>
    </q-page-container>

    <!-- Rodapé -->
    <div style="background-color: #ccc; height: 150px" class="montserrat q-pa-xl">
      <div class="row justify-center">
        <q-img :src="logoDark" :width="isMobile ? '70%' : '20%'" />
      </div>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import logo from '../assets/logo_without_background.png';
import logoDark from '../assets/logo_dark.png';
import banner from '../assets/banner.jpg';
import { biWhatsapp } from '@quasar/extras/bootstrap-icons';

const route = useRoute();
const router = useRouter();
const $q = useQuasar();

const drawerOpen = ref(false);

const isMobile = computed(() => $q.screen.lt.md);

const headerHeight = computed(() => {
  return route.path === '/' ? '500px' : '120px';
});

function navigateTo(path: string) {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  router.push({ path });
  drawerOpen.value = false;
}
</script>
