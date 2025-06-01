<template>
  <q-page class="q-mt-xl">
    <div class="q-pa-lg container">
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
  </q-page>
</template>
<script lang="ts" setup>
import image from '../assets/image.jpg';

import { useQuasar } from 'quasar';
import { computed } from 'vue';

const $q = useQuasar();

const isMobile = computed(() => $q.screen.lt.md);
</script>
