<template>
  <section class="chatbot">
    <div>
      <ul class="list">
        <li class="message" v-for="(message, index) in messages" :key="index" :class="message.auteur">
           <p>
             <span>{{ message.auteur }} : {{ message.text }}</span>
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

      this.$axios.get(`http://localhost:3000/send/${this.message}`).then( res => {
        // console.log(res);
        this.messages.push({
          text: res.data,
          auteur: 'server'
        })
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
