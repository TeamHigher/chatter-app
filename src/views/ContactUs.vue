<template>
  <div class="contact-us">
    <h1>Contact Us</h1>

    <!-- Contact Information -->
    <section class="contact-info">
      <h2>Contact Information</h2>
      <p>You can reach us through the following channels:</p>
      <ul>
        <li>
          Email:
          <a href="mailto:chuksdavis2020@gmail.com">chuksdavis2020@gmail.com</a>
        </li>
        <li>Phone: +447723125819</li>
        <li>Address: London, United Kingdom.</li>
        <!-- Add more contact information as needed -->
      </ul>
    </section>

    <!-- Contact Form -->
    <section class="contact-form">
      <h2>Send Us a Message</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // You can implement the logic to send the form data to your backend or handle it in any other way
      console.log("Form submitted:", this.formData);
      // Clear the form fields after submission
      this.formData = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
});
</script>

<style scoped>
/* Add your CSS styles for the Contact Us page here */
.contact-us {
  padding: 20px;
}

.contact-us h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.contact-us h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.contact-us p {
  margin-bottom: 15px;
}

.contact-us ul {
  list-style: none;
  padding: 0;
}

.contact-us ul li {
  margin-bottom: 10px;
}

.contact-us .form-group {
  margin-bottom: 20px;
}

.contact-us label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.contact-us input,
.contact-us textarea {
  width: 700px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact-us button {
  padding: 10px 20px;
  background-color: #543ee0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
