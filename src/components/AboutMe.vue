<template>
  <div id="about-me-container" class="container bg-neutral-100  sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
    <div class="about-me grid lg:grid-cols-2 xl:grid-cols-3 gap-8 p-16 m-auto">
      <div class="lg:col-span-1 xl:col-span-2 text-justify">
        <header class="flex mb-8">
          <div class="inline-block w-1.5 h-10 bg-emerald-500 mr-4"></div>
          <h1 class="flex flex-col text-4xl font-bold">Dale Mitchell</h1>
        </header>
        <p class="mb-2">My name is Dale Mitchell, and I'm a technology aficionado with a talent for tinkering. With a coding background that includes C#, .NET, SQL, HTML/CSS, JavaScript, and Vue.js. I thrive on taking on complex projects and devising innovative solutions that tackle real-world problems.</p>

        <!-- Additional paragraphs with a show/hide button -->
        <div v-for="(paragraph, index) in paragraphs" :key="index" v-show="!hideParagraphs || index < visibleParagraphs">
          <p class="mb-2">{{ paragraph }}</p>
        </div>

        <!-- Button to show/hide additional paragraphs -->
        <div class="flex justify-evenly mt-12">
            <!-- button class="paragraphs-btn flex justify-center items-center py-2 px-4 bg-emerald-500 rounded text-white text-center font-semibold w-44" @click="toggleParagraphs"><span v-html="hideParagraphs ? '<i class=&quot;fa-solid fa-square-plus&quot;></i><span class=&quot;ml-2&quot;>Show More</span>' : '<i class=&quot;fa-solid fa-square-minus&quot;></i><span class=&quot;ml-2&quot;>Show Less</span>'"></span></button -->
            <button class="show-btn flex justify-center items-center lg:mr-2 py-2 px-4 rounded text-white text-center font-semibold w-44" :class="{ 'bg-emerald-500 hover:bg-emerald-700': hideParagraphs, 'bg-amber-500 hover:bg-amber-700': !hideParagraphs }" @click="toggleParagraphs"><span v-html="hideParagraphs ? '<i class=&quot;fa-solid fa-square-plus&quot;></i><span class=&quot;ml-2&quot;>Show More</span>' : '<i class=&quot;fa-solid fa-square-minus&quot;></i><span class=&quot;ml-2&quot;>Show Less</span>'"></span></button>
            <button class="portfolio-btn flex justify-center items-center lg:mx-2 py-2 px-4 bg-emerald-500 hover:bg-emerald-700 rounded text-white text-center font-semibold w-44" href="#portfolio-container"><i class="fa-solid fa-circle-arrow-right"></i><span class="ml-2">View Portfolio</span></button>
            <router-link to="/resume">
              <button class="resume-btn flex justify-center items-center lg:ml-2 py-2 px-4 bg-emerald-500 hover:bg-emerald-700 rounded text-white text-center font-semibold w-44" href=""><i class="fa-solid fa-file-lines"></i><span class="ml-2 mt-1">View Resume</span></button>
            </router-link>
        </div>
      </div>

      <div class="lg:col-end-3 xl:col-end-4">
        <img class="rounded-xl" src="../assets/headshot2.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      hideParagraphs: true, // Controls whether additional paragraphs are hidden or shown
      visibleParagraphs: 1, // Number of paragraphs to show initially
      paragraphs: [
        // Additional paragraphs to be hidden initially
        'I\'m a passionate full stack developer with a love for coding and a drive to create innovative solutions. With a strong work ethic and a knack for collaboration, I thrive in team environments where I can contribute my skills and learn from others.',
        'Beyond my coding expertise, I have a few passions that fuel my curiosity. Motorcycles have always fascinated me, from their engineering marvels to the sense of freedom they provide. Exploring the open road on two wheels is a perfect way to clear my mind and gain new perspectives.',
        'When I\'m not immersed in coding or exploring the world of motorcycles, you\'ll often find me tinkering with computers. I love diving into hardware, experimenting with different configurations, and optimizing performance.',
        'As a full stack developer, I bring a comprehensive skill set to the table, encompassing both front-end and back-end development. With experience in various programming languages and frameworks, I\'m adept at crafting user-friendly interfaces and building robust, scalable applications.',
        'I believe in the power of collaboration and enjoy working closely with others to turn ideas into reality. Together, we can overcome challenges, leverage our strengths, and deliver exceptional results. If you\'re looking for a dedicated, hardworking team player with a passion for coding, motorcycles, aviation, and computer tinkering, I\'d love to connect with you.'
      ],
    };
  },
  methods: {
    toggleParagraphs() {
      this.hideParagraphs = !this.hideParagraphs;
    },
  },
};
</script>


<style scoped>
.about-me {
  max-width: 1200px;
}
</style>
