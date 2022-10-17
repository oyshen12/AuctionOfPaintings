<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper" @click.self="$emit('close')">
          <div class="modal-container">
            <VueSlickCarousel :arrows="true" :dots="true">
              <img
                v-for="image in picture.images"
                draggable="false"
                :src="require('../../public/' + image)"
              />
            </VueSlickCarousel>
            <div class="modal__description">{{ picture.description }}</div>
            <div class="modal__buy-wrap" v-if="picture.active">
              <div v-if="picture.priceDiscount" class="modal__buy-oldprice">
                {{ picture.priceDiscount }} $
              </div>
              <div class="modal__buy-newprice">{{ picture.price }} $</div>
            </div>
            <div v-else class="modal__buy-sold">Продана на аукционе</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ["picture"],
  components: { VueSlickCarousel },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<style scoped lang='scss'>
.modal {
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &-container {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    margin: 0px auto;
    padding: 40px 40px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  &__description {
    margin-top: 38px;
    text-align: justify;
  }

  &__buy {
    &-wrap {
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
    }

    &-oldprice {
      text-decoration-line: line-through;
      color: #a0a0a0;
      font-weight: 300;
      font-size: 22px;
    }

    &-newprice {
      font-weight: 700;
      font-size: 24px;
    }

    &-sold {
      font-size: 18px;
      font-weight: 700;
      align-self: end;
    }
  }
}
</style>
