<template>
  <section class="chatbot">
    <div>
      <ul class="list">
        <li class="message" v-for="(message, index) in messages" :key="index" :class="message.auteur">
           <p>
             <span>{{ message.text }}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="input">
      <input type="text" v-model="message" @keyup.enter="envoyerMessage">
      <button @click="envoyerMessage">Envoyer</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ChatBot',
  data: () => ({
    message: '',
    messages: [{
      text: 'Bonjour, qu\'elle est votre question ?',
      auteur: 'server'
    }]
  }),
  methods: {
    envoyerMessage() {
      this.messages.push({
        text: this.message,
        auteur: 'client'
      });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
