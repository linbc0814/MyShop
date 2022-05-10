<template>
 <GoogleMap
    api-key="AIzaSyBggPeVKb9iHOJ4Swnp9reeovyCWXPRSU8"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 24.1369762, lng: 120.6847415 };
    return { center };
  },
};
</script>

<style>
</style>
