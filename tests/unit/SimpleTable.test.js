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

  it("Should be a visible element", () => {
    expect(wrapper.isVisible()).toBe(true);
  });

  it("Should has a v-data-table component", () => {
    expect(wrapper.findComponent({ name: "v-data-table" }).exists()).toBe(true);
  });
});
