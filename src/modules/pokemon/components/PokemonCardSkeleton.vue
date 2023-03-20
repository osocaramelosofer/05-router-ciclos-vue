<template>
  <li>
    <picture>
    </picture>
    <div>
      <span class="id"></span>
      <span class="pokemon-name"></span>
    </div>
  </li>
</template>

<style scoped>
li {
  background-color: rgb(254 249 195);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-inline: 20px;
  margin-block: 10px;
  border-radius: 8px;
  padding-block: 20px;
}
picture{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /*background-color: #7b7b7b;*/
  animation: pulse-bg 1s infinite;
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
div span {
  background-color: #6e6e6e;
  width: 30px;
  height: 10px;
  padding-inline: 20px;
  border-radius: 50px;
}

@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}
</style>