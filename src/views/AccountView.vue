<template>
  <div class="top-bar-2">
    <!-- Display the user's profile picture -->
    <div class="user-profile">
      <img
        :src="profilePictureURL"
        alt="Profile Picture"
        class="profile-picture"
      />
      <!-- Dropdown menu containing user's email and logout button -->
      <div class="dropdown">
        <button class="dropbtn">{{ userEmail }}</button>
        <div class="dropdown-content">
          <router-link to="/account">Account</router-link>
          <router-link to="/notification">Notifications</router-link>
          <router-link to="/" @click="logout">Logout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent, ref } from "vue";
import { auth, storage } from "../firebase";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

export default defineComponent({
  setup() {
    // Reactive variables to store user data
    const profilePictureURL = ref<string>("");
    const userEmail = ref<string | null>(null); // Adjusted type to allow null

    // Get a reference to the Firebase storage
    const firebaseStorage = getStorage();

    // Fetch user data on component mount
    onMounted(async () => {
      // Fetch the logged-in user's profile picture URL
      await fetchProfilePicture();
      // Fetch the logged-in user's email
      userEmail.value = auth.currentUser?.email || null; // Ensure nullability handling
    });

    // Function to fetch the logged-in user's profile picture URL
    // Inside the fetchProfilePicture function
    const fetchProfilePicture = async () => {
      try {
        if (auth.currentUser) {
          // Null check to avoid errors
          const profilePicRef = storageRef(
            firebaseStorage,
            `authorProfilePic/Y14zIEpPsQVs1FatwqSLf0dLEFY2/`
          );
          const url = await getDownloadURL(profilePicRef); // Use getDownloadURL directly
          profilePictureURL.value = url;
        }
      } catch (error) {
        console.error("Error fetching profile picture:", error);
      }
    };

    // Function to handle logout
    const logout = () => {
      auth
        .signOut()
        .then(() => {
          // Handle successful logout
          console.log("User logged out");
        })
        .catch((error) => {
          // Handle logout error
          console.error("Logout error:", error);
        });
    };

    return {
      profilePictureURL,
      userEmail,
      logout,
    };
  },
});
</script>

<style>
/* Add your CSS styles for the top bar, profile picture, and dropdown menu here */
.top-bar-2 {
  width: 300px;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-left: 200px;
}

.user-profile {
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #ddd;
}
</style>
