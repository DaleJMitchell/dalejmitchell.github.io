<template>
    <div id="skills-container" class="container sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full">
        <div class="skills p-16 text-justify m-auto">
            <header class="flex">
                <div class="inline-block w-1.5 h-10 bg-emerald-500 mr-4"></div>
                <h1 class="flex flex-col justify-around text-3xl font-bold">What I Do</h1>
            </header>
            <p class="my-10 max-sm:text-lg">Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
            <div class="skill-grid grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:col-span-1 md:col-span-3 xl:col-span-4 gap-8">
                <div class="skills-java bg-white drop-shadow-md rounded-xl p-4">
                    <i class="fa-brands fa-java fa-2xl mb-4"></i>
                    <h1 class="font-bold text-lg max-sm:text-xl">Java</h1>
                    <ul class="ml-4 text-left max-sm:text-lg">
                        <li>Spring Framework</li>
                        <li>Spring BootDevTools</li>
                        <li>Spring Web</li>
                        <li>Thymeleaf</li>
                        <li>Spring Data JPA</li>
                        <li>H2 Database</li>
                        <li>Java Persistence API (JPA)</li>
                        <li>Git</li>
                        <li>IntelliJ</li>
                    </ul>
                </div>
                <div class="skills-dotnet bg-white drop-shadow-md rounded-xl p-4">
                    <img class="h-6" src="../assets/dotnet-rectangle.png" alt="">
                    <h1 class="font-bold text-lg mb-2">.NET</h1>
                    <ul class="ml-4 text-left">
                        <li>.NET Core</li>
                        <li>NUnit</li>
                        <li>ASP.NET Core</li>
                        <li>Visual Studio</li>
                    </ul>
                </div>
                <div class="skills-sql bg-white drop-shadow-md rounded-xl p-4">
                    <img class="h-6 mb-2" src="../assets/sql.png" alt="">
                    <h1 class="font-bold text-lg">SQL</h1>
                     <ul class="ml-4 text-left">
                        <li>SQL Server Management Studio (SSMS)</li>
                    </ul>                
                </div>
                
                
                <div class="skills-js bg-white drop-shadow-md rounded-xl p-4">
                    <i class="fa-brands fa-square-js text-yellow-400 fa-2xl mb-4"></i>
                    <h1 class="font-bold text-lg max-sm:text-xl">Vanilla JavaScript</h1>
                    <ul class="ml-4 text-left max-sm:text-lg">
                        <li>Vue.js</li>
                        <li>Webpack</li>
                        <li>ESLint</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </div>
                <div class="skills-vuejs bg-white drop-shadow-md rounded-xl p-4">
                    <i class="fa-brands fa-vuejs text-emerald-500 fa-2xl mb-4"></i>
                    <h1 class="font-bold text-lg max-sm:text-xl">Vue.js</h1>
                    <ul class="ml-4 text-left max-sm:text-lg">
                        <li>Vuex</li>
                        <li>Vue Router</li>
                        <li>Vue CLI</li>
                        <li>Vue DevTools</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </div>
                
                <div class="skills-html-css bg-white drop-shadow-md rounded-xl p-4">
                    <i class="fa-brands fa-html5 fa-2xl mr-1 text-orange-500 mb-4"></i><i class="fa-brands fa-css3-alt fa-2xl ml-1 text-emerald-500"></i>
                    <h1 class="font-bold text-lg">HTML & CSS</h1>
                    <ul class="ml-4 text-left">
                        <li>Tailwind CSS</li>
                        <li>Bootstap</li>
                        <li>Grid</li>
                        <li>Flexbox</li>
                        <li>Font Awesome</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skills",
};
</script>

<style scoped>
.skills {
    max-width: 1200px;
}
</style>