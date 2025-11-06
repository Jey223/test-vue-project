<template>
  <section>
    <h2>
      Music List
    </h2>
    <ul>
      <li>
        Artist 1
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  data(){
    return {
      ChristianMusic: [
        {
          id: '1',
          name: 'Play1',
          artist: 'artist-one',
          date_released: '12/1/2025' 
        },
        {
          id: '2',
          name: 'Play2',
          artist: 'artist-two',
          date_released: '1/10/2024' 
        },
        
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
