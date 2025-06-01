<template>
  <q-page class="q-mt-xl">
    <div class="q-pa-lg container">
      <div class="cinzel text-h3" style="letter-spacing: 4px" :class="{ 'center-title': isMobile }">
        Contatos
      </div>

      <div
        class="row justify-between items-center q-gutter-xs q-col-gutter q-mt-lg"
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
  </q-page>
</template>
<script lang="ts" setup>
import CardContact from 'src/components/CardContact.vue';

import { useQuasar } from 'quasar';
import { computed } from 'vue';

const $q = useQuasar();

const isMobile = computed(() => $q.screen.lt.md);
</script>

<style lang="scss" scoped>
.justify-center-important {
  justify-content: center !important;
}

.center-title {
  text-align: center;
  font-size: 2.5rem;
}
</style>
