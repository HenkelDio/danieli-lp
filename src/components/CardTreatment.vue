<template>
  <div>
    <!-- CARD -->
    <q-card class="montserrat" style="width: 310px; background-color: transparent">
      <q-card-section>
        <div class="text-h6">{{ props.title }}</div>
        <div class="text-body2">- {{ props.body[0] }}</div>
        <div class="text-body2">- {{ props.body[1] }}</div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat @click="openDrawer">AGENDAR</q-btn>
      </q-card-actions>
    </q-card>

    <q-drawer v-model="drawerOpen" side="right" overlay :width="400" bordered>
      <q-card
        class="q-pa-md q-mb-xl"
        flat
        style="height: 100%; display: flex; flex-direction: column"
      >
        <!-- X para fechar -->
        <div class="row items-center justify-between q-mb-md">
          <div class="text-h6">{{ props.title }}</div>
          <q-btn dense flat round icon="close" @click="drawerOpen = false" />
        </div>

        <div class="text-body1 q-mb-md" style="flex-grow: 1">
          <q-card class="q-mb-md">
            <q-card-section>
              <div class="text-h6" style="font-size: 16px">Principais benefícios</div>
              <div v-for="(item, index) in props.body" :key="index" class="q-mb-md text-body2">
                - {{ item }}
              </div>
            </q-card-section>
          </q-card>

          <q-card>
            <q-card-section>
              <div class="text-h6" style="font-size: 16px">Sessões</div>

              <q-list bordered separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>{{ value1 }}</q-item-label>
                    <q-item-label caption>1 sessão</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>{{ value2 }}</q-item-label>
                    <q-item-label caption>Pacote de 5 sessões</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>{{ time }}</q-item-label>
                    <q-item-label caption>Tempo aproximado da sessão</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>

        <!-- Botões no final do drawer -->
        <div class="row justify-center items-center">
          <q-btn
            label="AGENDAR"
            color="primary"
            unelevated
            style="width: 90%"
            type="a"
            href="https://wa.me/5541996275685?text=Ola,%20gostaria%20de%20agendar%20um%20tratamento"
            target="_blank"
          />
        </div>
      </q-card>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface IProps {
  title: string;
  body: string[];
  time: string;
  value1: string;
  value2: string;
}

const props = defineProps<IProps>();

const drawerOpen = ref(false);

function openDrawer() {
  drawerOpen.value = true;
}
</script>
