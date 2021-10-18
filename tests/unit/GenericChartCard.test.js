import { createLocalVue, mount, shallowMount } from "@vue/test-utils";

import GenericChartCard from "../../src/components/GenericChartCard.vue";

describe("Testing generic chart card.", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(GenericChartCard, {
      localVue,
      propsData: { title: "Testing generic chart card" },
    });
  });

  it("Should have a custom title and match snapshot", () => {
    const title = wrapper.find(".v-card__title");

    expect(title.text()).toBe("Testing generic chart card");
  });

  it("Should renders a vue instance", () => {
    expect(shallowMount(GenericChartCard).isVueInstance()).toBe(true);
  });

  it("Should has a v-card-text component", () => {
    expect(wrapper.findComponent({ name: "v-card-text" }).exists()).toBe(true);
  });
});
