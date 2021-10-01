<template>
    <footer class="bg-footer-texture h-footerHight relative w-full bg-center bg-cover">
        <canvas class="h-waveHight relative w-full bottom-0 z-10 transform rotate-180" id="sineCanvas2" width="100%" height="90"></canvas>
      <!-- <a href="" class="grid justify-items-center items-center m-10"><img src="@/assets/images/logo.png" alt="" class="w-80"></a> -->
      <p class="text-center text-white absolute bottom-2 inset-x-0 text-shadow-md"><em>© 2021 Oki Meshi</em></p>
    </footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>