<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="email"></label>
      <input
        v-model="email"
        placeholder="Email"
        type="text"
        id="email"
        required
      />
    </div>

    <div class="form-group">
      <label for="password"></label>
      <input
        v-model="password"
        placeholder="Password"
        type="text"
        id="password"
        required
      />
    </div>

    <div class="form-group">
      <button type="submit">Login</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../main.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default {
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const handleLogin = async () => {
      error.value = null; // Reset error message
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        console.log("User logged in:", userCredential.user);
        router.push("/user-dashboard"); // Redirect to dashboard
      } catch (err) {
        error.value = err.message; // Display error to the user
        console.log("Authentication failed! Error: " + error.value);
      }
    };

    const submitForm = () => {
      handleLogin();
    };

    return {
      email,
      password,
      error,
      submitForm,
    };
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 10px;
  padding: 10px;
}

.form-group label {
  margin-right: 20px;
  margin-left: 20px;
  font-size: 18px;
}

.form-group button {
  padding: 15px;
  width: 10%;
  margin-top: -87px;
  margin-bottom: 2px;
  margin-left: 100px;
  margin-right: 0px;
  position: absolute;
}

input[type="text"] {
  width: 20%;
  padding: 20px 20px;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 20px;
  margin-right: 400px;
  box-sizing: border-box;
  font-size: 15px;
}

textarea {
  width: 53.5%;
  height: 150px;
  padding: 12px 20px;
  margin-top: 20px;
  box-sizing: border-box;
  resize: none;
  color: rgb(125, 125, 125);
}
</style>
