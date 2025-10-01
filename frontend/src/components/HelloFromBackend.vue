<template>
  <div>
    <button @click="callApi">Appeler API Django</button>
    <p v-if="msg">Réponse: {{ msg }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const msg = ref('')

async function callApi() {
  try {
    const res = await axios.get('/api/hello/')
    msg.value = res.data.message
  } catch (e) {
    msg.value = 'Erreur: ' + e
  }
}
</script>
