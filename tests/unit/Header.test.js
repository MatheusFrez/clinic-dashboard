import { createLocalVue, shallowMount } from "@vue/test-utils";

import Header from "../../src/components/Header.vue";

describe("Testing header component.", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      localVue,
      propsData: {},
    });
  });

  it("Should renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("Should has a v-app-bar component", () => {
    expect(wrapper.findComponent({ name: "v-app-bar" }).exists()).toBe(true);
  });

  it("Should has a logo image on header", () => {
    expect(wrapper.findComponent({ name: "v-img" }).exists()).toBe(true);
  });
});
