<template>
  <q-card flat class="montserrat" style="width: 250px; background-color: transparent">
    <q-card-section align="center">
      <q-img :src="icon" width="70px" class="q-mb-md" />
      <div class="text-h6">{{ props.title }}</div>
      <div class="text-body1">{{ props.body }}</div>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn flat type="a" :href="link" target="_blank">ACESSAR</q-btn>
    </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import whatsapp from '../assets/whatsapp.svg';
import email from '../assets/email.png';
import instagram from '../assets/instagram.svg';

interface IProps {
  title: string;
  icon: string;
  body: string;
  link: string;
}

const props = defineProps<IProps>();

const icon = computed(() => {
  if (props.icon === 'whatsapp') {
    return whatsapp;
  }

  if (props.icon === 'instagram') {
    return instagram;
  }

  return email;
});
</script>
