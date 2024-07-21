<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleFavorite">{{ isFavorite ? 'Hide' : 'Show' }} Favorites</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: String,
      required: true
    }
  },
  emits: ['toggle-favorite'],
  // emits: {
  //   'toggle-favorite': (id) => {
  //     if (id) {
  //       return true;
  //     }
  //     else {
  //       console.warn('Id is missing!')
  //       return false
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    }
  }
};
</script>