import { ActionContext } from "vuex";
import { RootState } from "./RootState";
import { getStoreAccessors } from "vuex-typescript";

export type TestContext = ActionContext<TestStateInterface, RootState>;

export interface TestStateInterface {
  testVal: string;
}

export const testState = {
  namespaced: true,
  state: {
    testVal: ""
  },
  getters: {
    testValGetter(state: TestStateInterface) {
      return state.testVal;
    }
  },
  mutations: {
    mutateTestVal(state: TestStateInterface, testVal: string): void {
      state.testVal = testVal;
    }
  },
  actions: {
    commitTestVal(context: TestContext, testVal: string) {
      return context.commit("mutateTestVal", testVal);
    }
  }
};

const { commit, read, dispatch } = getStoreAccessors<
  TestStateInterface,
  RootState
>("test"); // We pass namespace here, if we make the module namespaced: true.

export const testValGetter = read(testState.getters.testValGetter);
export const updateSearchTerm = dispatch(testState.actions.commitTestVal);
