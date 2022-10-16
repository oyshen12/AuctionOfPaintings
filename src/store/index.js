import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filtredStr: "",
    pictures: [
      {
        id: 1,
        title: "«Рождение Венеры» Сандро Боттичелли",
        price: 2000000,
        priceDiscount: 1000000,
        active: true,
        inBusket: false,
        img: "example.png",
      },
      {
        id: 2,
        title: "«Тайная вечеря»  Леонардо да Винчи",
        price: 3000000,
        active: true,
        inBusket: false,
        img: "example1.png",
      },
      {
        id: 3,
        title: "«Сотворение Адама» Микеланджело",
        price: 6000000,
        priceDiscount: 5000000,
        active: true,
        inBusket: false,
        img: "example2.png",
      },
      {
        id: 4,
        title: "«Урок анатомии»  Рембрандт",
        active: false,
        img: "example3.png",
      },
    ],
  },
  getters: {
    filtredPictures(state) {
      if (state.filtredStr === "") {
        return state.pictures;
      }
      return state.pictures.filter((el) =>
        el.title.toLowerCase().includes(state.filtredStr.toLowerCase())
      );
    },
  },
  mutations: {
    setFiltredStr(state, payload) {
      state.filtredStr = payload;
    },
    addToBusket(state, payload) {
      const index = state.pictures.findIndex((el) => payload.id === el.id);
      state.pictures[index].inBusket = payload.inBusket;
      let addedPictures =
        JSON.parse(window.localStorage.getItem("addedPictures")) ?? [];
      if (payload.inBusket) {
        addedPictures.push(payload.id);
      } else {
        addedPictures = addedPictures.filter((el) => el !== payload.id);
      }
      window.localStorage.setItem(
        "addedPictures",
        JSON.stringify(addedPictures)
      );
    },
    downloadData(state) {
      const addedPictures =
        JSON.parse(window.localStorage.getItem("addedPictures")) ?? [];
      addedPictures.map((id) => {
        const index = state.pictures.findIndex((el) => el.id === id);
        state.pictures[index].inBusket = true;
      });
    },
  },
  actions: {},
  modules: {},
});
