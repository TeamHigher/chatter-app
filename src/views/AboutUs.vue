<template>
  <div class="about-us">
    <h1>About Us</h1>

    <!-- Project Description -->
    <section class="project-description">
      <h2>Project Description</h2>
      <p>
        Chatter aims to be a heaven tailored specifically for a particular kind
        of audience. It is a multi-functional platform for authors and readers
        to create and access content.
      </p>
    </section>

    <!-- Team Members -->
    <section class="team-members">
      <h2>Our Team</h2>
      <div class="member-name" v-for="member in teamMembers" :key="member.id">
        <h3>{{ member.name }}</h3>
        <p>{{ member.role }}</p>
        <!-- You can include additional information about team members such as their roles, skills, and contributions -->
      </div>
    </section>

    <!-- Project Goals -->
    <section class="project-goals">
      <h2>Project Goals</h2>
      <ul>
        <li>
          To provide a heaven for traditional bookworms in creating and
          accessing content.
        </li>
        <li>
          To reignite the passion for reading and writing which has suffered
          greatly with the emergence of many social media platforms
        </li>
        <!-- Add more goals as needed -->
      </ul>
    </section>

    <!-- Achievements -->
    <section class="achievements">
      <h2>Achievements</h2>
      <ul>
        <li>
          Highlight any milestones or accomplishments your project has achieved.
        </li>
        <li>Include awards, recognitions, or successful implementations.</li>
        <!-- Add more achievements as needed -->
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      teamMembers: [
        { id: 1, name: "Uwabuofu Chukuka", role: "Project Manager" },
        { id: 2, name: "Uwabuofu Chukuka Davis", role: "Lead Developer" },
        // Add more team members as needed
      ],
    };
  },
});
</script>

<style scoped>
/* Add your CSS styles for the About Us page here */
.about-us {
  padding: 20px;
}

.about-us h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.about-us h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.about-us p {
  margin-bottom: 15px;
}

.about-us .member {
  margin-bottom: 20px;
}

.about-us ul {
  list-style: disc;
  margin-left: 20px;
}
.member-name h3 {
  width: 400px;
}
</style>
