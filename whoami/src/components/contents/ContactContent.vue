<template>
    <div class="contact-content">

        <!-- TITLE -->
        <h2 class="projects-title">CONTACT</h2>
        <hr>

        <!-- CONTACT INNER CONTAINER -->
        <div class="contact-inner-container">

            <!-- LEFT PART -->
            <div class="contact-left">

                <!-- DESCRIPTION -->
                <h3>I am here to be hired,<br>
                to answer questions,<br>
                and discuss ideas.</h3>

                <!-- PHONE, ADDRESS, AND EMAIL HERE -->
                <p><i class="fas fa-phone"></i>+90512 345 6789</p>
                <p><i class="fas fa-map-marker-alt"></i>				
                    Suzy Queue
                    4455 Landing Lange, APT 4
                    Louisville, KY 40018-1234</p>
                <p><i class="fas fa-envelope"></i>name@example.com</p>

                <!-- SOCIAL MEDIA -->
                <div class="social-media">

                  <!-- INSTAGRAM -->
                  <a href="#">
                    <img src="./images/instagram.svg" alt="icon-instagram">
                  </a>

                  <!-- LINKEDIN -->
                  <a href="#">
                    <img src="./images/linkedin.svg" alt="icon-linkedin">
                  </a>

                  <!-- GITHUB -->
                  <a target="_blank" href="https://github.com/tozlukozmos">
                    <img src="./images/github.svg" alt="icon-github">
                  </a>

                  <!-- TWITTER -->
                  <a target="_blank" href="https://twitter.com/tozlukozmos">
                    <img src="./images/twitter.svg" alt="icon-twitter">
                  </a>
                </div>
            </div>

            <!-- RIGHT PART -->
            <div class="contact-right">

              <!-- FORM -->
              <form action="" method="post">

                <!--ENTER FULLNAME -->
                <input type="text" id="fullname" placeholder="Fullname" required>

                <!-- ENTER EMAIL -->
                <input type="email" placeholder="Email address" required>

                <!-- ENTER MESSAGE -->
                <textarea name="message" id="message" placeholder="Your message" required></textarea>
                
                <!-- SEND BUTTON -->
                <button @click="showAlert">Send your message</button>
              </form>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      alert("The contact form doesn't work because it is just an example. If you want to contact me you can use the social media links which are on the left (There are Github and Twitter links). Thanks for visiting.")
    }
  }
}
</script>

<style scoped>

/* CONTACT CONTENT */
.contact-content {
    width: 100%;
    height: 100%;
    padding: 15px;
    background: rgba( 230, 232, 248, 0.3 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10.5px );
    -webkit-backdrop-filter: blur( 10.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.contact-content hr {
    margin-top: 5px;
    margin-bottom: 30px;
    border: 2px dashed #000;
}

/* CONTACT INNER CONTAINER */
.contact-inner-container {
  width: 100%;
  height: calc(100% - 100px);
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

/* LEFT PART */
.contact-left {
  width: 180px;
  font-size: 12px;
  line-height: 20px;
}

/* PHONE, ADDRESS, AND EMAIL HERE */
.contact-left p {
  margin-top: 15px;
}

/* (ICONS) PHONE, ADDRESS, AND EMAIL HERE */
.contact-left p i {
  margin-right: 5px;
}

/* SOCIAL MEDIA */
.social-media {
  margin-top: 30px;
}

/* SOCIAL MEDIA ICONS */
.social-media a img {
  width: 40px;
}

/* RIGHT PART */
.contact-right {
  width: 180px;
}

/* FORM */
.contact-right form {
  display: flex;
  flex-direction: column;
}

/* ENTER FULLNAME, ENTER EMAIL, ENTER MESSAGE, SEND MESSAGE HERE */
.contact-right form input,
.contact-right form textarea,
.contact-right form button{
  margin-bottom: 15px;
  border: 2px solid #000;
  padding: 5px 10px;
  border-radius: 15px;
  resize: none;
  outline: none;
  background-color: transparent;
  color: #000;
}

/* ENTER MESSAGE */
.contact-right form textarea {
  height: 100px;
}

/*SEND MESSAGE */
.contact-right form button {
  border: none;
  background-color: #000;
  color: #fff;
}

/* TEXT INSIDE INPUTS */
::placeholder {
  color: #000;
}

/* RESPONSIVE CSS */
@media screen and (max-width: 700px) {
  .social-media {
    margin-top: 15px;
  }
  .social-media a img {
    width: 30px;
  }
}
</style>