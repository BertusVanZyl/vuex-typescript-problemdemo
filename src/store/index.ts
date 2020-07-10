import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./RootState";
import { testState as test } from "@/store/TestState";

Vue.use(Vuex);

const storeOptions: StoreOptions<RootState> = {
  modules: {
    test
  }
};

export default new Vuex.Store<RootState>(storeOptions);
