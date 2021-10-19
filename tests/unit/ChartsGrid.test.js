import { createLocalVue, shallowMount } from "@vue/test-utils";

import ChartsGrid from "../../src/components/charts/ChartsGrid.vue";
import DoughnutChart from "../../src/components/charts/DoughnutChart";
import GenericChartCard from "../../src/components/GenericChartCard";
import BarChart from "../../src/components/charts/BarChart";

describe("Testing charts grid component.", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ChartsGrid, {
      localVue,
      propsData: { filters: {} },
    });
  });

  it("Should have a doughnut chart, bar chart and generic chart card component", () => {
    const doughnutChart = wrapper.findAllComponents(DoughnutChart);
    const genericChartCard = wrapper.findAllComponents(GenericChartCard);
    const barChart = wrapper.findAllComponents(BarChart);

    expect(doughnutChart).toHaveLength(1);
    expect(genericChartCard).toHaveLength(2);
    expect(barChart).toHaveLength(1);
  });

  it("Should has a clipboard image", () => {
    expect(wrapper.findComponent({ ref: "clipboard-data" }).exists()).toBe(
      true
    );
  });

  it("Should has a grid description", () => {
    expect(wrapper.findComponent({ ref: "grid-description" }).exists()).toBe(
      true
    );
  });

  it("Should has a grid title", () => {
    expect(wrapper.findComponent({ ref: "grid-title" }).exists()).toBe(true);
  });
});
