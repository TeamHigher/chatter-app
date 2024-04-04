<template>
  <div class="comment-section">
    <h3>Comments</h3>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
    </ul>
    <div>
      <input
        type="text"
        v-model="newCommentText"
        placeholder="Add a comment..."
      />
      <button @click="submitComment">Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

interface Comment {
  id: string;
  text: string;
}

export default defineComponent({
  props: {
    postId: {
      type: String as PropType<string>,
      required: true,
    },
    comments: {
      type: Array as PropType<Comment[]>,
      required: true,
    },
  },
  emits: ["commentSubmitted"], // Declare the emitted event
  setup(props, { emit }) {
    const newCommentText = ref("");

    const submitComment = async () => {
      if (!props.postId || newCommentText.value.trim() === "") {
        console.warn("Invalid post ID or comment text");
        return;
      }

      try {
        // Update Firestore document with new comment
        const postRef = doc(db, "posts", props.postId);
        await updateDoc(postRef, {
          comments: [...props.comments, { text: newCommentText.value }],
        });

        // Emit the commentSubmitted event
        emit("commentSubmitted");

        // Clear input field after submission
        newCommentText.value = "";
      } catch (error) {
        console.warn("Error submitting comment:", error);
      }
    };

    return {
      newCommentText,
      submitComment,
    };
  },
});
</script>

<style scoped>
.comment-section {
  margin-top: 20px;
}

ul {
  list-style: none;
}

li {
  margin-bottom: 5px;
}

input[type="text"] {
  width: 70%;
  margin-right: 10px;
  padding: 5px;
}

button {
  padding: 5px 10px;
  background-color: #543ee0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
