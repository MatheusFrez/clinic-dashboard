import { createLocalVue, shallowMount } from "@vue/test-utils";

import SubHeader from "../../src/components/SubHeader.vue";

import Vuetify from "vuetify";
const vuetify = new Vuetify();

describe("Testing sub header component.", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SubHeader, {
      localVue,
      propsData: {},
      vuetify,
    });
  });

  it("Should renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("Should has a dog image on sub header", () => {
    expect(wrapper.findComponent({ name: "v-img" }).exists()).toBe(true);
  });

  it("Should has a title on sub header", () => {
    expect(wrapper.findComponent({ ref: "title" }).exists()).toBe(true);
  });

  it("Should has a description on sub header", () => {
    expect(wrapper.findComponent({ ref: "description" }).exists()).toBe(true);
  });
});
