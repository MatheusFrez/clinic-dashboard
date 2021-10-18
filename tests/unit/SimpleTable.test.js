import { createLocalVue, shallowMount } from "@vue/test-utils";

import SimpleTable from "../../src/components/SimpleTable.vue";

describe("Testing simple table component.", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SimpleTable, {
      localVue,
      propsData: { detailsExpandedItem: [{}] },
    });
  });

  it("Should renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("Should be a div element", () => {
    expect(wrapper.is("div")).toBe(true);
  });

  it("Should be a not empty element", () => {
    expect(wrapper.isEmpty()).toBe(false);
  });

  it("Should be a visible element", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("Should has a v-data-table component", () => {
    expect(wrapper.findComponent({ name: "v-data-table" }).exists()).toBe(true);
  });
});
