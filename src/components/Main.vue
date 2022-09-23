<template>
    <main>
      <section id="concept" class="p-12 bg-white">
        <h2 class="text-center text-3xl mb-4 tracking-widest text-seaBlue font-bold">沖縄の飲食店を応援する</h2>
        <p class="text-center text-lg leading-8 text-seaBlue mb-4">新型コロナウィルスによって多くの飲食店が大きなダメージを受けました。<br>そんな中でも一生懸命、お客さんに美味しい料理を提供してくれるお店を応援したいと考えています。</p>
        <div class="w-10/12 m-auto">
          <VueSlickCarousel v-bind="settings">
                  <div v-for="item in items" v-bind:key="item.index" class="card-item">
                    <div class="card-inner border-solid border-2 border-gray-200">
                      <img :src="item.img" :alt="item.name"/>
                      <h3>{{item.name}}</h3>
                      <p>{{item.txt }}</p>
                    </div>
                  </div>
          </VueSlickCarousel>
        </div>
      </section>
    </main>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'Main',
  components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          "autoplay": false,
          "dots": true,
          "focusOnSelect": false,
          "infinite": true,
          // "speed": 500,
          "slidesToShow": 3,
          "slidesToScroll": 3,
          // "touchThreshold": 5
        },
        items: [
          { 
            img: require('@/assets/images/naha/001/001.jpg'),
            name: '吉崎食堂 久茂地本店',
            txt: '沖縄家庭料理と元祖居酒屋メニューが楽しめます',
          },
          { 
            img: require('@/assets/images/naha/002/001.jpg'),
            name: 'じまんや',
            txt: '自慢の料理と泡盛で最高の沖縄を堪能できる',
          },
          { 
            img: require('@/assets/images/naha/003/001.jpg'),
            name: '乃魚島',
            txt: '鮮度抜群の魚介をさまざまな料理がおいしい',
          },
        ],
      }
    },
}
</script>