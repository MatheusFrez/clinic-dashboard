<template>
  <v-dialog
    v-model="dialog"
    :persistent="loading"
    :max-width="450"
    @keydown.esc="close"
    @click:outside="close"
  >
    <v-card rounded="lg">
      <v-card-text class="pt-8 text-center">
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="primary"
          :size="82"
          :width="7"
        />
        <template v-else>
          <template>
            <h1 class="text-h5 text-center my-4">
              {{ label.title || "Ocorreu um erro desconhecido! 😔" }}
            </h1>
            <p class="subtitle-1 text-center">
              {{
                label.message ||
                "Não se preocupe nossa equipe está trabalhando para que o erro seja resolvido. 😊"
              }}
            </p>
          </template>
        </template>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn text color="primary" :disabled="loading" @click="close">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import eventBus from "@/event-bus";

export default {
  name: "AlertDialog",
  data: () => ({
    dialog: false,
    loading: true,
    label: {},
  }),
  mounted() {
    eventBus.$on("alert-dialog", this.open);
  },
  beforeDestroy() {
    eventBus.$off("alert-dialog");
  },
  methods: {
    open(label) {
      this.dialog = true;
      this.label = label || {};
      this.loading = false;
    },
    close() {
      if (!this.loading) {
        this.dialog = false;
      }
    },
  },
};
</script>
