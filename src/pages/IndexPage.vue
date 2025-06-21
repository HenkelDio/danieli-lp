<template>
  <q-page class="q-mt-xl">
    <div class="q-pa-lg container">
      <div class="text-subtitle2 montserrat" style="letter-spacing: 4px">BEM-VINDO(A)</div>
      <div class="cinzel text-h3" style="letter-spacing: 4px">Sobre nós</div>
      <div style="display: flex; flex-wrap: wrap" class="q-mt-md text-grey-9 text-body1 montserrat">
        <div>
          Sou terapeuta integrativa de Araucária – PR, dedicada ao cuidado e à promoção do bem-estar
          de forma natural e personalizada. Acredito que cada corpo tem sua própria linguagem e que,
          quando olhado com atenção e respeito, pode revelar caminhos de equilíbrio e cura.
        </div>
        <div>
          Cada sessão é única, voltada para suas necessidades e objetivos, com acolhimento, escuta e
          técnica. Meu propósito é que você se sinta mais leve, conectada(o) com seu corpo e em
          harmonia com sua saúde. Seja muito bem-vinda(o) a esse espaço de cuidado e transformação.
          🌿
        </div>
      </div>

      <q-card class="q-mt-xl">
        <q-card-section align="center">
          <div class="montserrat q-mb-sm">Tratamentos em domicílio, nós vamos até você!</div>
          <q-btn
            color="pink-5"
            unelevated
            type="a"
            href="https://wa.me/5541996275685?text=Ola,%20gostaria%20de%20agendar%20um%20tratamento"
            target="_blank"
            >Entrar em contato</q-btn
          >
          <div class="text-caption q-mt-lg">Atendimentos em Curitiba e região metropolitana</div>
        </q-card-section>
      </q-card>
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
          v-if="isMobile"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div
              class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              v-if="isMobile"
            >
              <CardT
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
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="column no-wrap" v-if="isMobile">
            <div
              class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              v-if="isMobile"
            >
              <CardT
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
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="3" class="column no-wrap" v-if="isMobile">
            <div
              class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              v-if="isMobile"
            >
              <CardT
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
          </q-carousel-slide>
        </q-carousel>

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
          v-if="!isMobile"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row justify-start items-center q-gutter-xs q-col-gutter no-wrap">
              <CardT
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
              <CardT
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
              <CardT
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
