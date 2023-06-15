Vue.createApp({
  computed: {},
  watch: {},
  methods: {
    addGole(event) {
      if (event.target.value == "add" && this.value != "") {
        this.goles.push(this.value);
        this.value = "";
      } else if (event.target.value == "Reset") {
        this.goles = [];
        this.value = "";
      } else if (event.target.type == "submit") {
        this.goles.splice(Number(event.target.value), 1);
      }
    },
  },
  data() {
    return {
      value: "",
      goles: [],
    };
  },
}).mount("#App");
