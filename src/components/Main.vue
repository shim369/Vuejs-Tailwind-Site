<template>
    <main>
      <section id="concept" class="p-12 bg-skyBlue">
        <h2 class="text-center text-3xl mb-4 tracking-widest text-white">沖縄の飲食店を応援する</h2>
        <p class="text-center text-sm leading-8 text-white mb-4">新型コロナウィルスによって多くの飲食店が大きなダメージを受けました。<br>そんな中でも一生懸命、お客さんに美味しい料理を提供してくれるお店を応援したいと考えています。</p>
        <div class="w-10/12 m-auto">
          <VueSlickCarousel v-bind="settings">
                  <div v-for="item in items" v-bind:key="item.index" class="card-item">
                    <div class="card-inner">
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
          "autoplay": true,
          "dots": true,
          "focusOnSelect": true,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "touchThreshold": 5
        },
        items: [
          { 
            img: require('@/assets/images/naha/001/001.jpg'),
            name: '吉崎食堂 久茂地本店',
            txt: 'texttexttexttexttexttexttexttexttexttexttext',
          },
          { 
            img: require('@/assets/images/naha/002/001.jpg'),
            name: 'じまんや',
            txt: 'texttexttexttexttexttexttexttexttexttexttext',
          },
          { 
            img: require('@/assets/images/naha/003/001.jpg'),
            name: '乃魚島',
            txt: 'texttexttexttexttexttexttexttexttexttexttext',
          },
          { 
            img: require('@/assets/images/naha/001/001.jpg'),
            name: '吉崎食堂 久茂地本店',
            txt: 'texttexttexttexttexttexttexttexttexttexttext',
          }
        ]
      }
    },
}
</script>
