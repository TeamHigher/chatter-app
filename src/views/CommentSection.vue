<template>
  <div>
    <!-- Display existing comments -->
    <div v-for="(comment, index) in post.comments" :key="index">
      {{ comment.text }}
    </div>

    <!-- Form for submitting new comment -->
    <form @submit.prevent="submitComment">
      <input
        type="text"
        v-model="newCommentText"
        placeholder="Add a comment..."
        class="comment-section"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const newCommentText = ref("");

    async function submitComment() {
      if (newCommentText.value.trim() === "") return;

      try {
        // Update Firestore document with new comment
        const postRef = doc(db, "posts", props.post.id);
        await updateDoc(postRef, {
          comments: [...props.post.comments, { text: newCommentText.value }],
        });

        // Clear input field after submission
        newCommentText.value = "";
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }

    return {
      newCommentText,
      submitComment,
    };
  },
});
</script>

<style>
.comment-section {
  width: 500px;
  margin-bottom: 50px;
  height: 100px;
}
</style>
