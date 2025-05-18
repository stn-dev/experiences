
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const password = ref<string>("");
const confirmPassword = ref<string>("");
const username = ref<string>("");
const email = ref<string>("");

const handleSingUp = (e: Event) => {
  // const formdata = new FormData(e.target as HTMLFormElement)

  e.preventDefault();
  if (
    !password.value ||
    !confirmPassword.value ||
    !username.value ||
    !email.value
  ) {
    alert("missing field");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("verify your password");
    return;
  }

  try {
    localStorage.setItem("user", `${username.value}-${confirmPassword.value}`);
    alert("you are sing in , plaase log in now");
    (e.target as HTMLFormElement).reset();
    router.push("/login");
    return;
  } catch (error) {
    console.error("error : " + error);
  }
};
</script>

<template>
  <div class="container">
    <h1>sing up</h1>
    <form class="sing-up-form" @submit="handleSingUp">
      <input type="text" name="username" placeholder="username" v-model="username" />
      <input type="email" name="email" placeholder="E-mail" v-model="email" />
      <input type="password" name="password" placeholder="password" v-model="password" />
      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        v-model="confirmPassword"
      />
      <p v-if="password !== confirmPassword">verify your password</p>
      <button>submit</button>
    </form>
  </div>
</template>
  
<style scoped lang="scss" >
$backGround: rgb(236, 255, 233);
$lighted: green;

%flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  height: 100%;
  @extend %flex;
  flex-direction: column;
  gap: 50px;
  background-color: rgb(0, 142, 147);
}

.sing-up-form {
  width: 50%;
  min-height: 300px;
  padding: 50px 0;
  @extend %flex;
  flex-direction: column;
  gap: min(3vw, 30px);
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 5px 11px 20px 4px rgb(0 82 85 / 44%);

  input {
    width: min(50%, 400px);
    height: min(4vw, 50px);
    padding: 2px 10px;
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.709);
    border-radius: 5px;
    background-color: rgb(0, 142, 147);
    color: white;
    font-size: 18px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.466);
    }
  }

  button {
    width: fit-content;
    height: fit-content;
    background-color: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px 10px;
    color: rgb(0, 142, 147);
    font-size: 20px;
    font-weight: bold;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  p {
    color: rgb(255, 87, 87);
    font-size: 16px;
    font-weight: 600;
  }
}
</style>