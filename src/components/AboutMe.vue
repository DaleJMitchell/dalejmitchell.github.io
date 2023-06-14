<template>
  <div id="about-me-container" class="container bg-neutral-100  sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
    <div class="about-me lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 p-16 m-auto">
            <div class="about lg:col-span-1 xl:col-span-2 text-justify">
        <header class="flex mb-8">
          <div class="inline-block w-1.5 h-10 bg-emerald-500 mr-4"></div>
          <h1 class="flex flex-col text-4xl font-bold">Dale Mitchell</h1>
        </header>
	         <p class="mb-2 max-sm:text-lg">
		 My name is Dale Mitchell, and I'm a technology aficionado with a talent for tinkering. With a coding background that includes C#, .NET, SQL, HTML/CSS, JavaScript, and Vue.js. I thrive on taking on complex projects and devising innovative solutions that tackle real-world problems.</p>

        
        <div v-for="(paragraph, index) in paragraphs" :key="index" v-show="!hideParagraphs || index < visibleParagraphs">
          <p class="mb-2 max-sm:text-lg">{{ paragraph }}</p>
        </div>

                <div class="flex lg:flex-col lg:items-center justify-evenly my-10">
                    <button v-if="hideParagraphs" class="show-btn flex justify-center items-center max-sm:mr-2 py-2 px-4 rounded bg-emerald-500 hover:bg-emerald-700 text-white text-center font-semibold sm:w-44 md:w-44 lg:w-72 xl:w-44" @click="toggleParagraphs">
                        <i class="fa-solid fa-square-plus"></i><span class="ml-2">Show More</span>
                    </button>
                    <button v-else class="show-btn flex justify-center items-center max-sm:mr-2 py-2 px-4 rounded bg-amber-500 hover:bg-amber-700 text-white text-center font-semibold sm:w-44 md:w-44 lg:w-72 xl:w-44" @click="toggleParagraphs">
                        <i class="fa-solid fa-square-plus"></i><span class="ml-2">Show Less</span>
                    </button>

                    <button class="portfolio-btn flex justify-center items-center sm:mx-2 lg:my-2 py-2 max-sm:mx-2 px-4 bg-emerald-500 hover:bg-emerald-700 rounded text-white text-center font-semibold sm:w-44 md:w-44 lg:w-72 xl:w-44" href="">
                        <i class="fa-solid fa-circle-arrow-right"></i><span class="ml-2">View Portfolio</span>
                    </button>
                    <router-link to="/resume">
                        <button class="resume-btn flex justify-center items-center max-sm:ml-2 py-2 px-4 bg-emerald-500 hover:bg-emerald-700 rounded text-white text-center font-semibold sm:w-44 md:w-44 lg:w-72 xl:w-44" href="">
                            <i class="fa-solid fa-file-lines"></i><span class="ml-2 mt-1">View Resume</span>
                        </button>
                    </router-link>
                </div>
            </div>

            <div class="sm:hidden lg:inline xl:col-end-4">
                <img class="photo rounded-xl" src="../assets/headshot2.jpg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      hideParagraphs: true,
      visibleParagraphs: 1,
      paragraphs: [
        // Additional paragraphs to be hidden initially
        'I\'m a passionate full stack developer with a love for coding and a drive to create innovative solutions. With a strong work ethic and a knack for collaboration, I thrive in team environments where I can contribute my skills and learn from others.',
        'Beyond my coding expertise, I have a few passions that fuel my curiosity. Motorcycles have always fascinated me, from their engineering marvels to the sense of freedom they provide. Exploring the open road on two wheels is a perfect way to clear my mind and gain new perspectives.',
        'When I\'m not immersed in coding or exploring the world of motorcycles, you\'ll often find me tinkering with computers. I love diving into hardware, experimenting with different configurations, and optimizing performance.',
        'As a full stack developer, I bring a comprehensive skill set to the table, encompassing both front-end and back-end development. With experience in various programming languages and frameworks, I\'m adept at crafting user-friendly interfaces and building robust, scalable applications.',
        'I believe in the power of collaboration and enjoy working closely with others to turn ideas into reality. Together, we can overcome challenges, leverage our strengths, and deliver exceptional results. If you\'re looking for a dedicated, hardworking team player with a passion for coding, motorcycles, and computer tinkering, I\'d love to connect with you.'
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

@media not all and (min-width: 640px) {
    .about-me {
        width: 550px;
    }

    .photo {
        width: 500px;
        margin: auto 0;
    }
}
</style>
