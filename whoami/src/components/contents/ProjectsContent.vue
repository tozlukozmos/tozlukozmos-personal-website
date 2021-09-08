<template>
    <div class="projects-content">

        <!-- TITLE -->
        <h2 class="projects-title">PROJECTS</h2>
        <hr>

        <!--PROJECTS INNER CONTAINER -->
        <div class="project-inner-area">

            <!-- PROJECT AMAZON -->
            <div class="project project-amazon">

                <!-- COMPANY NAME -->
                <h2>AMAZON</h2>

                <!-- PRODUCT NAME -->
                <h4>shop page</h4>
            </div>

            <!-- PROJECT APPLE -->
            <div class="project project-apple">

                <!-- COMPANY NAME -->
                <h2>APPLE</h2>

                <!-- PRODUCT NAME -->
                <h4>shop page</h4>
            </div>

            <!-- PROJECT GMAIL -->
            <div class="project project-gmail">

                <!-- COMPANY NAME -->
                <h2>GMAIL</h2>

                <!-- PRODUCT NAME -->
                <h4>login system</h4>
            </div>

            <!-- PROJECT TWITTER -->
            <div class="project project-twitter">

                <!-- COMPANY NAME -->
                <h2>TWITTER</h2>

                <!-- PRODUCT NAME -->
                <h4>profile page</h4>
            </div>

            <!-- PROJECT TWITTER -->
            <div class="project project-twitter">

                <!-- COMPANY NAME -->
                <h2>TWITTER</h2>

                <!-- PRODUCT NAME -->
                <h4>login system</h4>
            </div>

            <!-- PROJECT NIKE-->
            <div class="project project-nike">

                <!-- COMPANY NAME -->
                <h2>NIKE</h2>

                <!-- PRODUCT NAME -->
                <h4>offical website</h4>
            </div>

        </div>
    </div>
</template>

<style scoped>

/* PROJECTS CONTENT */
.projects-content {
    width: 100%;
    height: 100%;
    padding: 15px;
    background: rgba( 230, 232, 248, 0.3 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10.5px );
    -webkit-backdrop-filter: blur( 10.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin-bottom: 15px;
    position: relative;
}
.projects-content hr {
    margin-top: 5px;
    margin-bottom: 30px;
    border: 2px dashed #000;
}

/* ONE PROJECT */
.project {
    width: 100px;
    height: 100px;
    text-align: center;
    padding-top: 25px;
    margin: 30px;
    display: inline-block;
}

/* PROJECT AMAZON */ 
.project-amazon {
    background: rgba( 0, 0, 0, 0.7 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4.5px );
    -webkit-backdrop-filter: blur( 4.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    /* COMPANY AND PRODUCT NAME COLOR */
    color: #FF9900;
}

/* PROJECT APPLE */ 
.project-apple {
    background: rgba( 85, 85, 85, 0.7 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4.5px );
    -webkit-backdrop-filter: blur( 4.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    /* COMPANY AND PRODUCT NAME COLOR */
    color: #000;
}

/* PROJECT GMAIL */ 
.project-gmail {
    background: rgba( 219, 68, 55, 0.7 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4.5px );
    -webkit-backdrop-filter: blur( 4.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    /* COMPANY AND PRODUCT NAME COLOR */
    color: #fff;
}

/* PROJECT TWITTER */ 
.project-twitter {
    background: rgba( 29, 161, 242, 0.7 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4.5px );
    -webkit-backdrop-filter: blur( 4.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    /* COMPANY AND PRODUCT NAME COLOR */
    color: #14171A;
}

/* PROJECT NIKE */ 
.project-nike {
    background: rgba( 0, 0, 0, 0.7 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4.5px );
    -webkit-backdrop-filter: blur( 4.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    /* COMPANY AND PRODUCT NAME COLOR */
    color: #fff;
}

/* RESPONSIVE CSS */
@media screen and (max-width: 700px) {
    .project {
        width: 60px;
        height: 60px;
        margin: 15px;
        padding-top: 15px;

        /* COMPANY NAME AND PRODUCT NAME FONT SIZE */
        font-size: 50%;
    }
}
</style>