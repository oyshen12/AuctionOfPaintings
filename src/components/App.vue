
<template>
  <div class="app__wrap">
    <header class="header">
      <div class="header__content">
        <navigation></navigation>
        <div class="header__search">
          <input
            placeholder="Поиск по названию картины"
            class="header__search-input"
            v-model="filtredStr"
          />
          <btn @clickEmit="search">Найти</btn>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="main__content">
        <div class="main__title">Картины эпохи Возрождения</div>
        <div class="main__pictures">
          <picture-card
            v-for="picture in filtredPictures"
            :picture="picture"
            :key="picture.id"
          ></picture-card>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__content">
        <navigation></navigation>
        <div class="footer__info">
          <div class="footer__info-item">
            <img src="../../public/phone.png" width="14px" height="14px" />
            +7 (812) 555-55-55
          </div>
          <div class="footer__info-item">
            <img src="../../public/place.png" width="10px" height="14px" />
            г. Санкт-Петербург, ул. Ефимова, 3
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navigation from "./Nav.vue";
import Btn from "./Btn.vue";
import PictureCard from "./PictureCard.vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: { Navigation, Btn, PictureCard },
  data() {
    return {
      filtredStr: "",
    };
  },
  computed: {
    ...mapGetters(["filtredPictures"]),
  },
  methods: {
    ...mapMutations(["setFiltredStr", "downloadData"]),
    search() {
      this.setFiltredStr(this.filtredStr);
    },
  },
  mounted() {
    this.downloadData();
  },
};
</script>


<style lang="scss">
.app__wrap {
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e1e1e1;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0px;
    width: 100%;
    max-width: 1216px;
  }

  &__search {
    display: flex;

    &-input {
      border: 1px solid #e1e1e1;
      padding: 11px 16px;
      width: 416px;

      &:focus {
        border: 1px solid #b5b5b5 !important;
      }
    }
  }
}

.footer {
  display: flex;
  justify-content: center;
  background: #eceaea;
  margin-top: auto;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 38px 0px;
    width: 100%;
    max-width: 1216px;
  }

  &__info {
    display: flex;
    font-size: 14px;

    &-item {
      margin-right: 54px;
      display: flex;
      align-items: center;

      img {
        margin-right: 9px;
      }

      &:last-child {
        margin-right: 0px;
      }
    }
  }
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    max-width: 1216px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    align-self: flex-start;
    margin-top: 45px;
  }

  &__pictures {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 16px;
    width: 100%;
    margin-top: 39px;
  }
}
</style>
