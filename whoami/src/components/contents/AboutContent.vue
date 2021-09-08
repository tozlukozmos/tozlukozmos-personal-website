<template>
    <div class="about-content">

        <!-- TITLE -->
        <h2 class="about-title">ABOUT</h2>
        <hr>

        <!-- ABOUT ME (TEXT) -->
        <h4 class="about-me">
            Hello! I am tozlukozmos from Turkey and I am a computer engineering student in the same country. 
            I just have finished my preparation year at my university, and now I cannot wait to take faculty lessons. 
            Throughout the year, I have studied several technical languages including Python, Javascript, HTML, CSS, and some other 
            beneficial technologies like Node.js, Expres.js, Vue.js, and etc.
            According to my experiences, perhaps I will drive my life to web development
            world. That's me! I am here!
        </h4>
    </div>
</template>

<style scoped>

/* ABOUT CONTENT */
.about-content {
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
    background-image: url('./images/person.png');
    background-position: left;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: auto;
    background-attachment: local;
}
.about-content hr {
    margin-top: 5px;
    margin-bottom: 30px;
    border: 2px dashed #000;
}

/* ABOUT ME (TEXT) */
.about-me {
    width: 150px;
    font-size: 13px;
}

/* RESPONSIVE CSS */
@media screen and (max-width: 700px) {
    .about-content {
        background-image: url('./images/person.png');
        background-position: left;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: 190%;
        background-attachment: local;
    }
    .about-me {
    width: 110px;
    font-size: 10px;
}
}
</style>