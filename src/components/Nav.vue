<template>
  <div class="navigation">
    <div class="navigation__item">Каталог</div>
    <div class="navigation__item">Доставка</div>
    <div class="navigation__item">Оплата</div>
    <div class="navigation__item">Контакты</div>
    <div class="navigation__item">О компании</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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

  &__item {
    cursor: pointer;
    margin-right: 48px;

    &:last-child {
      margin-right: 0px;
    }

    &:hover {
      color: black;
    }
  }
}
</style>