<template>
    <main>
      <section id="concept" class="bg-white">
        <h2 class="text-center text-3xl mb-4 tracking-widest text-seaBlue font-bold">沖縄の飲食店を応援する</h2>
        <p class="text-center text-lg leading-8 mb-10">新型コロナウィルスによって多くの飲食店が大きなダメージを受けました。<br>そんな中でも一生懸命、お客さんに美味しい料理を提供してくれるお店を応援したいと考えています。</p>
        <div class="w-12/12 m-auto">
          <VueSlickCarousel v-bind="settings">
                  <div v-for="item in items" v-bind:key="item.index" class="card-item">
                    <a :href="item.a" target="_blank">
                    <div class="card-inner border-solid border-2 border-gray-200">
                      <img :src="item.img" :alt="item.name"/>
                      <h3>{{item.name}}</h3>
                      <p>{{item.txt }}</p>
                    </div>
                    </a>
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
import 'vue-slick-carousel/src/slick-theme.css'
export default {
  name: 'Main',
  components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          "responsive": [],
          "arrows": true,
          "autoplay": true,
          "dots": true,
          "focusOnSelect": false,
          "infinite": true,
          "speed": 1500,
          "slidesToShow": 2,
          "slidesToScroll": 2,
          // "touchThreshold": 5
        },
        items: [
          { 
            img: require('@/assets/images/naha/001/001.jpg'),
            name: '吉崎食堂',
            txt: '沖縄家庭料理と元祖居酒屋メニューが楽しめます',
            a: 'https://yura-net.com/',
          },
          { 
            img: require('@/assets/images/naha/002/001.jpg'),
            name: 'じまんや',
            txt: '自慢の料理と泡盛で最高の沖縄を堪能できます',
            a: 'http://hpcc-j.com/',
          },
          { 
            img: require('@/assets/images/naha/003/001.jpg'),
            name: '乃魚島',
            txt: '鮮度抜群の魚介をさまざまな料理がおいしいです',
            a: 'https://hitosara.com/0006127570/',
          },
          { 
            img: require('@/assets/images/naha/004/001.png'),
            name: '我那覇豚肉店',
            txt: '高品質な沖縄県産のお肉を仕入れています',
            a: 'https://www.ganaha-butaniku.co.jp/',
          },
        ],
      }
    },
}
</script>