const vm1 = new Vue({
  el: "#app",
  data: {
    event: {
      date: "August 14th - 16th",
      title: "Summer Festival!",
      description:
        "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
    },
    newNameText: "",
    guestName: [],
    eventCapacity: 25,
    eventCapacityPercentage: 0
  },
  methods: {
    formSubmitted: function () {
      if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
        this.guestName.push(this.newNameText);
        this.newNameText = "";
        this.eventCapacityPercentage =
          this.guestName.length / (this.eventCapacity / 100);
      }
    },
    keyPressed: function () {
      console.log("Key pressed");
    }
  },
  computed: {
    sortNames: function () {
      return this.guestName.sort();
    }
  },
  watch: {},
  filters: {
    toUpper: function (data) {
      return data.slice(0, 1).toUpperCase() + data.slice(1).toLowerCase();
    }
  },
  beforeCreate: function () {
    console.log('beforeCreate');
  },
  created: function () {
    console.log('created');
  },
  beforeMount: function () {
    console.log('beforeMount');
  },
  mounted: function () {
    console.log('mounted');
  },
  beforeUpdate: function () {
    console.log('beforeUpdate');
  },
  updated: function () {
    console.log('updated');
  },
  beforeDestroy: function () {
    console.log('beforeDestroy');
  },
  destroyed: function () {
    console.log('destroyed');
  }
});

const vm2 = new Vue({
  el: "#navigation",
  data: {
    appName: "Guest List",
    navLinks: [
      {
        name: "Home",
        id: 1,
        url: "https://google.com/"
      },
      {
        name: "Upcoming Events",
        id: 2,
        url: "https://amazon.com/"
      },
      {
        name: "Guest Benefits",
        id: 3,
        url: "https://ebay.com/"
      },
      {
        name: "Latest News",
        id: 4,
        url: "https://myspace.com/"
      }
    ]
  },
  methods: {
    changeTitle: function () {
      this.$refs.name.innerText = "Title changed";
      console.log(this.$refs)
    }
  }
});