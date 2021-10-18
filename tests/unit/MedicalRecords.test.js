import { createLocalVue, shallowMount } from "@vue/test-utils";
import MedicalRecords from "../../src/components/MedicalRecords.vue";
import DataTable from "../../src/components/DataTable.vue";

import Vuetify from "vuetify";
const vuetify = new Vuetify();

describe("Testing medical records component.", () => {
  const localVue = createLocalVue();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MedicalRecords, {
      localVue,
      propsData: {},
      vuetify,
    });
  });

  it("Should renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("Should have a search filter", () => {
    const searchFilter = wrapper.findComponent({ ref: "search-filter" });

    expect(searchFilter.exists()).toBe(true);
  });

  it("Should have a specie filter", () => {
    const especieFilter = wrapper.findComponent({ ref: "specie-filter" });

    expect(especieFilter.exists()).toBe(true);
  });

  it("Should have a tutor filter", () => {
    const tutorFilter = wrapper.findComponent({ ref: "tutor-filter" });

    expect(tutorFilter.exists()).toBe(true);
  });

  it("Should have a datatable component", () => {
    const datatables = wrapper.findAllComponents(DataTable);

    expect(datatables).toHaveLength(1);
  });

  it("Should change all filters values", () => {
    wrapper.setData({
      filters: {
        search: "testing search filter",
        specie: "testing especie filter",
        tutor: "testing tutor filter",
      },
    });

    expect(wrapper.vm.filters.search).toBe("testing search filter");
    expect(wrapper.vm.filters.specie).toBe("testing especie filter");
    expect(wrapper.vm.filters.tutor).toBe("testing tutor filter");
  });
});
