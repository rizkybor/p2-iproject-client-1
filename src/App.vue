<template>
  <div>
    <router-view />
  </div>
</template>

<style>
:root {
  --primary-color: #519259;
  --secondary-color-light: #064635;
  --white-color: #f0bb62;
  --font-color: #000000;
  --body-font: "Nunito", sans-serif;
}

body {
  width: 100%;
  height: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
}

.navbar {
  background-color: var(--primary-color);
  padding-left: 14%;
  padding-right: 14%;
  font-size: small;
}

footer {
  background-color: var(--primary-color);
  margin-top: 10%;
  width: 100%;
  height: 10%;
  position: absolute;
  text-align: center;
}
</style>
