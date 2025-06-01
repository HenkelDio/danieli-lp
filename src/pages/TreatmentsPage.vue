<template>
  <q-page class="q-mt-xl q-mb-xl">
    <div class="q-pa-lg container">
      <div class="cinzel text-h3" style="letter-spacing: 4px" :class="{ 'center-title': isMobile }">
        Tratamentos
      </div>

      <div
        class="flex q-gutter-lg q-mt-md justify-between"
        :class="{ 'justify-center-important': isMobile }"
      >
        <CardTreatment
          title="Massagem"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veritatis nemo cum suscipit."
        />
        <CardTreatment
          title="Drenagem linfática"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veritatis nemo cum suscipit."
        />
        <CardTreatment
          title="Limpeza de pele"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veritatis nemo cum suscipit."
        />
        <CardTreatment
          title="Massagem"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veritatis nemo cum suscipit."
        />
        <CardTreatment
          title="Massagem"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veritatis nemo cum suscipit."
        />
        <CardTreatment
          title="Massagem"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veritatis nemo cum suscipit."
        />
        <CardTreatment
          title="Massagem"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veritatis nemo cum suscipit."
        />
        <CardTreatment
          title="Massagem"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veritatis nemo cum suscipit."
        />
        <CardTreatment
          title="Massagem"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo veritatis nemo cum suscipit."
        />
      </div>
    </div>
  </q-page>
</template>
<script lang="ts" setup>
import { useQuasar } from 'quasar';
import CardTreatment from 'src/components/CardTreatment.vue';
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
