<template>
  <div id="app">
    <WeeklyRoomBookings msg="dunno"/>
  </div>
</template>

<script>
import WeeklyRoomBookings from "./components/WeeklyRoomBookings";

export default {
  name: "App",
  components: {
    WeeklyRoomBookings
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
