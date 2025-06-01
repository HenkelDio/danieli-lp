<template>
  <div>
    <!-- CARD -->
    <q-card class="montserrat" style="width: 310px; background-color: transparent">
      <q-card-section>
        <div class="text-h6">{{ props.title }}</div>
        <div class="text-body1">{{ props.body }}</div>
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
          <div>{{ props.body }}</div>
          <div class="text-subtitle1 q-mt-sm">R$ 100,00</div>
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
  body: string;
}

const props = defineProps<IProps>();

const drawerOpen = ref(false);

function openDrawer() {
  drawerOpen.value = true;
}
</script>
