
<template>
  <div class="app__wrap">
    <header class="header">
      <div class="header__content">
        <navigation-component></navigation-component>
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
            @clickEmit="openModal"
          ></picture-card>
        </div>
      </div>
      <modal
        v-if="showModal"
        @close="showModal = false"
        :picture="pictureModal"
      ></modal>
    </main>
    <footer class="footer">
      <div class="footer__content">
        <navigation-component></navigation-component>
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
import NavigationComponent from "./Nav.vue";
import Btn from "./Btn.vue";
import PictureCard from "./PictureCard.vue";
import Modal from "./Modal.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    NavigationComponent,
    Btn,
    PictureCard,
    Modal,
  },
  data() {
    return {
      showModal: false,
      filtredStr: "",
      pictureModal: {},
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
    openModal(pictureModal) {
      this.pictureModal = pictureModal;
      this.showModal = true;
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

  @media (max-width: 1240px) {
    padding: 0 20px;
  }

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

      @media (max-width: 1240px) {
        width: auto;
      }
    }
  }
}

.footer {
  display: flex;
  justify-content: center;
  background: #eceaea;
  margin-top: auto;

  @media (max-width: 1240px) {
    padding: 0 20px;
  }

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
    justify-content: flex-end;
    width: 100%;
    font-size: 14px;
    max-width: 534px;

    @media (max-width: 1240px) {
      max-width: none;
    }
    @media (max-width: 1140px) {
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }

    &-item {
      margin-right: 54px;
      display: flex;
      align-items: center;
      white-space: nowrap;

      img {
        margin-right: 9px;
      }

      &:last-child {
        margin-right: 0px;
      }

      @media (max-width: 1140px) {
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

    @media (max-width: 1240px) {
      grid-template-columns: 1fr 1fr 1fr;
      margin-bottom: 39px;
    }
  }
}
</style>
