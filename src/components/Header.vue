<template>
      <header class="header h-headerHight bg-header-texture relative w-full bg-center bg-cover">
      <div class="nav-wrap absolute top-3 right-3">
        <nav>
          <ul>
            <li>
              <a href="#concept"></a>
            </li>
          </ul>
        </nav>
        <a href=""></a>
      </div>
      <div class="flex items-center text-center h-full justify-center flex-col">
      <h1 class="text-white text-6xl text-shadow-lg mb-1">Oki Meshi</h1>
      <p class="text-white text-2xl text-shadow-lg">沖縄の飲食店に恩返し</p>
      </div>
        <canvas class="h-waveHight -top-90 relative w-full align-top" id="sineCanvas" width="100%" height="90"></canvas>
    </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>