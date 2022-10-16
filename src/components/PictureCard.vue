<template>
  <div
    class="picturecard"
    :style="{
      opacity: picture.active ? 1 : 0.4,
    }"
  >
    <img
      :src="require('../../public/' + this.picture.img)"
      class="picturecard__img"
    />
    <div class="picturecard__title">{{ picture.title }}</div>
    <div v-if="picture.active" class="picturecard__buy">
      <div class="picturecard__buy-wrap">
        <div v-if="picture.priceDiscount" class="picturecard__buy-oldprice">
          {{ picture.priceDiscount }} $
        </div>
        <div class="picturecard__buy-newprice">{{ picture.price }} $</div>
      </div>
      <btn
        v-if="!loading"
        class="picturecard__buy-btn"
        @clickEmit="toBasket"
        :style="{
          backgroundColor: picture.inBusket ? '#5B3A32' : '#382E2B',
        }"
        ><div v-if="picture.inBusket" class="picturecard__buy-btn-bsk">
          <img src="../../public/check.png" width="13.33px" height="9.17px" />
          В корзине
        </div>
        <div v-else>Купить</div></btn
      >
      <btn v-else class="picturecard__buy-btn"
        ><vue-ellipse-progress
          color="#C4C4C4"
          emptyColor="rgb(91, 58, 50)"
          :size="30"
          :thickness="2"
          animation="default 700 400"
          fontColor="white"
          :loading="true"
        >
        </vue-ellipse-progress
      ></btn>
    </div>
    <div v-else class="picturecard__purchased">Продана на аукционе</div>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
import Btn from "./Btn.vue";

export default {
  props: ["picture"],
  components: { Btn },
  data() {
    return {
      loading: false,
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["addToBusket"]),
    toBasket() {
      this.loading = true;
      this.addToBusket({
        id: this.picture.id,
        inBusket: !this.picture.inBusket,
      });
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style scoped lang='scss'>
.picturecard {
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e1e1;
  max-width: 280px;
  padding-bottom: 24px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    border: 1px solid #382e2b;
  }

  &__img {
    width: 280px;
    height: 160px;
  }

  &__title {
    font-size: 18px;
    margin: 20px 36px 22px 24px;
  }

  &__buy {
    display: flex;
    margin-left: 22px;

    &-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &-oldprice {
      text-decoration-line: line-through;
      color: #a0a0a0;
      font-weight: 300;
      font-size: 14px;
    }

    &-newprice {
      font-weight: 700;
      font-size: 16px;
    }

    &-btn {
      margin-left: 21px;

      &-bsk {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          margin-right: 7px;
        }
      }
    }
  }

  &__purchased {
    font-weight: 700;
    font-size: 16px;
    margin-left: 22px;
  }
}
</style>
