<template>
  <section>
    <h2>
      Outings For the Month
    </h2>
    <!-- <calculator-buttons></calculator-buttons> -->
     <fun-day v-for="fun in funList" :key="fun.id" :location="fun.location" :event-type="fun.event" :artist="fun.artist" :is-fun="true" ></fun-day>
     
  </section>
</template>

<script>

export default {
  data(){
    return {
      
      funList : [
        {
          key: "ikeja",
          location: "Lagos Ikeja",
          event: "LagosFest",
          artist: "Davido",
        },
        {
          key: "ajah",
          location: "Lagos Ajah",
          event: "AI Empowerment",
          artist: "Ai Lord",
        }
      ]
       
    }
  }
}
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
<style>
*{
    box-sizing: border-box;
}
h2{
    color: red;
    background-color: yellow;
}
 h3 {
    border:2px solid gray;
    padding: 20px;
 }
 button {
    background-color: blue;
 }
</style>
