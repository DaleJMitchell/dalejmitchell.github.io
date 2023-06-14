<template>
  <div class="navBar bg-gradient-to-b from-green-500 to-emerald-700 h-screen flex flex-col w-72">
    <router-link to="/"><h1 class="mt-10 text-2xl text-center font-bold text-white">Dale Mitchell</h1></router-link>
    <div class="bio flex flex-col justify-center px-6">
      <img class="headshot rounded-full w-8/12 my-6 mx-auto" src="../assets/headshot.jpg" alt="" />
      <p class="text-white font-medium">Hi! 👋🏻 My name is  Dale. I'm a junior software developer with a passion for building innovative solutions. With a background as a service technician, I bring a unique blend of technical expertise and problem-solving skills to create efficient and user-friendly software applications.</p>
    </div>

    <div class="social-icons mt-4 flex justify-center">
      <div class="flex flex-col justify-center items-center bg-white rounded-full w-8 h-8 mr-2">
        <a href="https://www.linkedin.com/in/dale-j-mitchell/"><i class="fa-brands fa-linkedin-in fa-lg text-emerald-500"></i></a>
      </div>
      <div class="flex flex-col justify-center items-center bg-white rounded-full w-8 h-8 ml-2">
        <a href="https://github.com/DaleJMitchell"><i class="fa-brands fa-github fa-lg text-emerald-500"></i></a>
      </div>
    </div>

    <div class="h-px m-6 bg-emerald-300"></div>

        <nav class="flex flex-col items-center w-full">
            <ul class="text-left text-white font-medium">
                <li class="flex items-center p-2 hover:text-emerald-700 active:text-emerald-900">
                    <a href="/#home"><i class="fa-solid fa-house text-center w-6"></i><span class="ml-2 mt-1">Home</span></a>
                </li>
                <li class="flex items-center p-2 hover:text-emerald-700 active:text-emerald-900">
                    <a href="/#about-me-container"><i class="fa-solid fa-user text-center w-6"></i><span class="ml-2 mt-1">About Me</span></a>
                </li>
                <li class="flex items-center p-2 hover:text-emerald-700 active:text-emerald-900">
                    <a href="/#skills-container"><i class="fa-solid fa-clipboard text-center w-6"></i><span class="ml-2 mt-1">Skills</span></a>
                </li>
                <li class="flex items-center p-2 hover:text-emerald-700 active:text-emerald-900">
                    <a href="/#portfolio-container"><i class="fa-solid fa-laptop text-center w-6"></i><span class="ml-2 mt-1">Portfolio</span></a>
                </li>
                <li class="flex items-center p-2 hover:text-emerald-700 active:text-emerald-900">
                    <a href="/#contact-container"><i class="fa-solid fa-envelope text-center w-6"></i><span class="ml-2 mt-1">Hire Me</span></a>
                </li>
                <li class="flex items-center p-2 hover:text-emerald-700 active:text-emerald-900">
                    <router-link to="resume#top-of-page"><i class="fa-solid fa-file-lines text-center w-6"></i><span class="ml-2 mt-1">Resume</span></router-link>
                </li>
            </ul>

      
    </nav>
  </div>
</template>

<script>
export default {
    name: "NavBar",
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
