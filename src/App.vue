<template>
  <div>
    <router-view />
  </div>
</template>


<style>
:root {
  --primary-color: #577bc1;
  --secondary-color-light: #064635;
  --white-color: #f0bb62;
  --font-color: #000000;
  --body-font: "Nunito", sans-serif;
}

body {
  width: 100%;
  height: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
}

.navbar {
  background-color: var(--primary-color);
  padding-left: 14%;
  padding-right: 14%;
  font-size: small;
}
</style>
