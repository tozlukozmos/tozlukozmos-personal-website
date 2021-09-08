<template>
    <div class="testimonials-content">

        <!-- TITLE -->
        <h2 class="testimonials-title">TESTIMONIALS</h2>
        <hr>

        <!-- TESTIMONIALS HERE -->
        <div class="general-testimonials-area">

            <!-- ONE TESTIMONIAL -->
            <div class="testimonial-container">

                <!-- PERSON PHOTO -->
                <div class="person-photo"></div>
                <div class="testimonial-content">

                    <!-- PERSON FULLNAME -->
                    <h4>Sara Sun</h4>

                    <!-- PROFESSION AND COMPANY -->
                    <h6>Co-Founder ABC Tech Office</h6>

                    <!-- TESTIMONIAL -->
                    <p>We had to have an awesome website to exhibit our latest technological products, and then we met with tozlukozmos. He has solved our problem effectively. Thank you very much!</p>
                </div>
            </div>

            <!-- ONE TESTIMONIAL -->
            <div class="testimonial-container">

                <!-- PERSON PHOTO -->
                <div class="person-photo2"></div>
                <div class="testimonial-content">

                    <!-- PERSON FULLNAME -->
                    <h4>Jackie Mubarak</h4>

                    <!-- PROFESSION AND COMPANY -->
                    <h6>Senior Software Engineer at XYZ Technical Institute</h6>

                    <!-- TESTIMONIAL -->
                    <p>He is great at creating creative solutions for your problem. Also, he is a very understanding person, and that makes issues easier. You know, communication essential thing in the business world.</p>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>

/* TESTIMONIALS CONTENT */
.testimonials-content {
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
}
.testimonials-content hr {
    margin-top: 5px;
    margin-bottom: 30px;
    border: 2px dashed #000;
}
.general-testimonials-area {
    display: flex;
    justify-content: space-around;
}

/* ONE TESTIMONIAL */
.testimonial-container {
    width: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 40px;
    position: relative;
    padding: 0 15px 15px 15px;

    background: rgba( 216, 204, 196, 0.6 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}

/* PERSON PHOTO */
.person-photo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    transform: translateY(-50%);
    position: absolute;
    background-image: url('./images/female.jpg');
    background-origin: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* PERSON PHOTO */
.person-photo2 {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    transform: translateY(-50%);
    position: absolute;
    background-image: url('./images/male.jpg');
    background-origin: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* THE CONTENT PART WHICH HAS FULLNAME, PROFESSION PART, AND TESTIMONIAL */
.testimonial-content {
    margin-top: 40px;
}

/* PERSON FULLNAME */
.testimonial-content h4 {
    margin-bottom: 5px;
}

/* TESTIMONIAL */
.testimonial-content p {
    margin-top: 15px;
    text-align: left;
}

/* RESPONSIVE CSS */
@media screen and (max-width: 700px) {
    .testimonial-container {
        width: 120px;
        text-align: center;
        align-items: center;
        margin-top: 20px;
        position: relative;
        background: rgba( 216, 204, 196, 0.6 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 7px );
        -webkit-backdrop-filter: blur( 7px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
    .person-photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transform: translateY(-50%);
        position: absolute;
        background-image: url('./images/female.jpg');
        background-origin: border-box;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .person-photo2 {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transform: translateY(-50%);
        position: absolute;
        background-image: url('./images/male.jpg');
        background-origin: border-box;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .testimonial-content h4 {
        font-size: 12px;
        margin-bottom: 5px;
    }
    .testimonial-content h6 {
        font-size: 8px;
    }
    .testimonial-content p {
        font-size: 10px;
        text-align: left;
    }
}
</style>