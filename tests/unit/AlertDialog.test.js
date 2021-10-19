import { createLocalVue, shallowMount } from "@vue/test-utils";

import AlertDialog from "../../src/components/AlertDialog.vue";

describe("Testing charts grid component.", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AlertDialog, {
      localVue,
      propsData: { filters: {} },
    });
  });

  it("Should has a v-card-text component", () => {
    expect(wrapper.findComponent({ name: "v-card-text" }).exists()).toBe(true);
  });
});
