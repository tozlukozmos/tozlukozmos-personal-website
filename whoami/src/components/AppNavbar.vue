<template>
    <div class="navbar">
        <ul>
            <li>
                <a href="#home"><i class="fas fa-home"></i>HOME</a>
            </li>
            <li>
                <a href="#about"><i class="fas fa-user"></i>ABOUT</a>
            </li>
            <li>
                <a href="#testimonials"><i class="fas fa-comment-dots"></i>TESTIMONIALS</a>
            </li>
            <li>
                <a href="#projects"><i class="fas fa-briefcase"></i>PROJECTS</a>
            </li>
            <li>
                <a href="#contact"><i class="fas fa-phone-alt"></i>CONTACT</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.navbar {
    width: 20%;
    margin-right: 15px;
}
.navbar ul li {
    margin: 0 0 15px 15px;
    padding: 5px 10px;
    border-radius: 15px;
    display: inline-block;

    background: rgba( 255, 132, 0, 0.6 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.navbar ul li a {
    color: #000;
    font-size: 12px;
    font-weight: 700;
}
.navbar ul li a i {
    margin-right: 5px;
}
</style>