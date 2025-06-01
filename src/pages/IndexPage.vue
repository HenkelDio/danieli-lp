<template>
  <q-page class="q-mt-xl">
    <div class="q-pa-lg container">
      <div class="text-subtitle2 montserrat" style="letter-spacing: 4px">BEM-VINDO(A)</div>
      <div class="cinzel text-h3" style="letter-spacing: 4px">Sobre nós</div>
      <div style="display: flex; flex-wrap: wrap" class="q-mt-md text-grey-9 text-body1 montserrat">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, error dolore eius
          asperiores esse corrupti dolores excepturi ducimus enim doloremque! Pariatur consequatur
          iste odit unde cumque distinctio fugit possimus est.
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam omnis deserunt
          doloremque nihil ducimus perspiciatis temporibus quisquam tenetur, magni, cum a quidem
          voluptatem! Eum aperiam minus quisquam in rerum!
        </div>
      </div>
      <div style="display: flex; align-items: center" class="q-mt-xl q-gutter-x-xl">
        <q-img :src="image" :width="isMobile ? '100%' : '45%'" />
      </div>
    </div>

    <div style="height: 550px; margin-top: 100px" class="bg-pink-2 q-pa-lg">
      <div class="container">
        <div
          class="cinzel text-h4 text-pink-9"
          style="font-weight: 500"
          :class="{ 'center-title': isMobile }"
        >
          TRATAMENTOS
        </div>
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="pink"
          navigation
          :arrows="!isMobile"
          :padding="!isMobile"
          height="400px"
          infinite
          class="bg-pink-2 q-mt-md"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <CardT v-if="!isMobile" />
              <CardT v-if="!isMobile" />
              <CardT />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <CardT v-if="!isMobile" />
              <CardT v-if="!isMobile" />
              <CardT />
            </div>
          </q-carousel-slide>
        </q-carousel>

        <div style="display: flex; justify-content: center">
          <q-btn color="pink-5" unelevated @click="$router.push({ path: '/tratamentos' })"
            >Ver todos os tratamentos</q-btn
          >
        </div>
      </div>
    </div>

    <div style="margin-top: 100px; margin-bottom: 100px" class="q-pa-lg">
      <div class="container">
        <div class="cinzel text-h4" style="font-weight: 500" :class="{ 'center-title': isMobile }">
          CONTATOS
        </div>
        <div
          class="row justify-between items-center q-gutter-xs q-col-gutter wrap q-mt-lg"
          :class="{ 'justify-center-important': isMobile }"
        >
          <CardContact
            title="Whatsapp"
            body="(41) 99627-5685"
            icon="whatsapp"
            link="https://wa.me/5541996275685?text=Ola,%20gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos"
          />
          <CardContact
            title="Instagram"
            body="@danieli.henkel.terapias"
            icon="instagram"
            link="https://www.instagram.com/danieli.henkel.terapias?igsh=MWVqZmY5MHFpeXB1YQ%3D%3D&utm_source=qr"
          />
          <CardContact
            title="E-mail"
            body="danieli.henkel1@gmail.com"
            icon="email"
            link="mailto:danieli.henkel1@gmail.com?subject=Informações%20sobre%20tratamentos&body=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos."
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import image from '../assets/image.jpg';
import CardT from 'src/components/CardT.vue';
import CardContact from 'src/components/CardContact.vue';
import { useQuasar } from 'quasar';

const slide = ref(1);
const $q = useQuasar();

const isMobile = computed(() => $q.screen.lt.md);
</script>

<style lang="scss" scoped>
.justify-center-important {
  justify-content: center !important;
}

.center-title {
  text-align: center;
}
</style>
