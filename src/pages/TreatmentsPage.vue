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
          title="Drenagem Linfática"
          time="01 hora"
          value1="R$ 120,00"
          value2="R$ 500,00"
          :body="[
            'Aceleração da recuperação pós-operatória',
            'Melhora da circulação linfática e venosa',
            'Redução do inchaço (edema)',
            'Combate à celulite',
            'Alívio de dores e desconfortos: Principalmente em casos de linpedemaedema, tensão pré-menstrual, má circulação ou sensação de pernas pesadas.',
            'Melhora do funcionamento do sistema imunológico: Como o sistema linfático está ligado à imunidade, sua estimulação ajuda o corpo a sedefender melhor.',
            'Sensação de relaxamento',
          ]"
        />

        <CardTreatment
          title="Massagem modeladora"
          time="01h30"
          value1="R$ 150,00"
          value2="R$ 650,00"
          :body="[
            'Redução de medidas e remodelação da silhueta',
            'Combate à celulite e melhora do tônus muscular',
            'Melhora da circulação sanguínea e linfática, o que aumenta a oxigenação dos tecidos',
            'Contribuição para o bem-estar geral e redução das tensões',
          ]"
        />

        <CardTreatment
          title="Massagem super detox"
          time="01h40"
          value1="R$ 150,00"
          value2="R$ 600,00"
          :body="[
            'Redução da celulite e aumento do tônus muscular',
            'Eliminação de toxinas e retenção de líquidos',
            'Redução de medidas',
            'Melhora da circulação e do metabolismo local',
            'Sensação de bem-estar',
          ]"
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
