<template>
    <div class="container">

        <!-- LOGO -->
        <h1 class="logo">LOGO</h1>

        <!-- NAVBAR, RESPONSIVE NAVBAR AND CONTENT PART HERE -->
        <div class="inner-container">
            <AppNavbar/>
            <ResponsiveMenu id="ResponsiveMenu"/>
            <div class="content">
                <HomeContent id="home" />
                <AboutContent id="about" />
                <TestimonialsContent id="testimonials" />
                <ProjectsContent id="projects" />
                <ContactContent id="contact" />
            </div>
        </div>

        <!-- FOOTER -->
        <footer class="footer">
            <h3 class="copyright">LOGO &copy; 2021. Created by 
                <a 
                class="creator"  
                target="_blank" 
                href="https://github.com/tozlukozmos">@tozlukozmos
                </a>
            </h3>
        </footer>

    </div>
</template>

<script>
import ResponsiveMenu from "./ResponsiveMenu.vue";
import AppNavbar from "./AppNavbar.vue";
import HomeContent from "./contents/HomeContent.vue";
import AboutContent from "./contents/AboutContent.vue";
import TestimonialsContent from "./contents/TestimonialsContent.vue";
import ProjectsContent from "./contents/ProjectsContent.vue";
import ContactContent from "./contents/ContactContent.vue";

export default {
    components: {
        AppNavbar,
        HomeContent,
        AboutContent,
        TestimonialsContent,
        ProjectsContent,
        ContactContent,
        ResponsiveMenu
    }
}
</script>

<style scoped>

/* CONTAINER */
.container {
    width: 700px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}

/* LOGO */
.logo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 400%;
}

/* RESPONSIVE MENU */
#ResponsiveMenu {
    display: none;
}

/* INNER CONTAINER */
.inner-container {
    display: flex;
    margin-top: 50px;
    height: calc(100% - 51px);
}
.content {
    width: 80%;
    margin: 0 15px 15px 0;
    scroll-behavior: smooth;
    overflow: hidden;
    border-radius: 12px;
}

/* FOOTER */
.footer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 120%);
    width: 100%;
    text-align: center;
}
.copyright {
    color: #fff;
    font-size: 80%;
}
.creator {
    text-decoration: none;
    color: #fff;
}

/* RESPONSIVE CSS */
@media screen and (max-width: 700px) {
    #ResponsiveMenu {
        display: block;
    }
    .container {
        width: 90%;
    }
    .inner-container {
        display: block;
        height: calc(100% - 51px);
    }
    .navbar {
        display: none;
    }
    .content {
        width: calc(100% - 30px);
        height: calc(100% - 75px);
        margin: auto;
    }
}
</style>