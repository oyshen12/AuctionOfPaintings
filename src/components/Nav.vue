<template>
  <div class="navigation">
    <div class="navigation__item">Каталог</div>
    <div class="navigation__item">Доставка</div>
    <div class="navigation__item">Оплата</div>
    <div class="navigation__item">Контакты</div>
    <div class="navigation__item">О компании</div>
    <dropdown-menu
      v-model="responsive"
      :interactive="true"
      transition="translate-fade-down"
    >
      <img
        class="navigation__menu"
        src="../../public/menu.png"
        width="64px"
        height="64px"
      />
      <div slot="dropdown">
        <div class="dropdown-item">Каталог</div>
        <div class="dropdown-item">Доставка</div>
        <div class="dropdown-item">Оплата</div>
        <div class="dropdown-item">Контакты</div>
        <div class="dropdown-item">О компании</div>
      </div>
    </dropdown-menu>
  </div>
</template>

<script>
import DropdownMenu from "@innologica/vue-dropdown-menu";
export default {
  components: { DropdownMenu },
  data() {
    return {
      responsive: false,
    };
  },
};
</script>

<style scoped lang='scss'>
.navigation {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  transition: all 0.3s ease-out;
  white-space: nowrap;

  @media (max-width: 1240px) {
    justify-content: flex-start;
  }
  @media (max-width: 1000px) {
    justify-content: space-between;
  }

  &__menu {
    display: none;
    cursor: pointer;

    @media (max-width: 910px) {
      display: block;
    }
  }

  &__item {
    cursor: pointer;
    margin-right: 48px;

    &:last-child {
      margin-right: 0px;

      @media (max-width: 1000px) {
        margin-right: 30px;
      }
    }

    &:hover {
      color: black;
    }

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
    @media (max-width: 910px) {
      display: none;
    }
  }
}
.dropdown-menu {
  > div {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #382e2b;
    color: white;
  }

  div {
    font-size: 18px;
    margin-top: 8px;
    cursor: pointer;
  }
}
</style>