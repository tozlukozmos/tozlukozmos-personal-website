<template>
    <div class="home-content">

        <!-- TEXT -->
        <h1 class="welcome-message">HELLO,<br>I AM A JUNIOR<br>
        FRONTEND DEVELOPER</h1>
        <h2 class="second-message">I WOULD HELP DREAMS<br>
        TO COME TRUE.</h2>

        <!-- FIGURE -->
        <img src="./images/figure.svg" alt="home-page-figure">
    </div>
</template>

<style scoped>

/* HOME CONTENT */
.home-content {
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

/* TEXT */
.welcome-message {
    line-height: 45px;
    margin-top: 40px;
    text-shadow: 0 0 10px #F0E1CC;
    color: #BB2B00;
}
.second-message {
    font-size: 20px;
    line-height: 30px;
    margin-top: 60px;
    color: #002037;
    letter-spacing: 5px;
}

/* FIGURE */
.home-content img {
    height: 80%;
    position: absolute;
    right: 50px;
    top: 40px;
    filter: drop-shadow(0 0 15px#000);
}

/* RESPONSIVE CSS */
@media screen and (max-width: 700px) {
    .welcome-message {
        margin-top: 0;
        font-size: 25px;
        line-height: 35px;
    }
    .second-message {
        font-size: 15px;
        letter-spacing: 2px;
        margin-top: 30px;
        line-height: 25px;
    }
    .home-content img {
        height: 50%;
        transform: translateY(70%);
        right: 25px;
        
    }
}

</style>