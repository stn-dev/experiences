<template>
  <div class="container">
    <h1>about page</h1>
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
  background-color: rgb(174, 174, 0);
  @extend %flex;
}
</style>