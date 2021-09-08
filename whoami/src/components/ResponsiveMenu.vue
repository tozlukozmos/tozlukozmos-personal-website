<template>
    <div class="responsive-menu">
        <ul>
            <li><a href="#home"><i class="fas fa-home"></i></a></li>
            <li><a href="#about"><i class="fas fa-user"></i></a></li>
            <li><a href="#testimonials"><i class="fas fa-comment-dots"></i></a></li>
            <li><a href="#projects"><i class="fas fa-briefcase"></i></a></li>
            <li><a href="#contact"><i class="fas fa-phone-alt"></i></a></li>
        </ul>
    </div>
</template>

<style scoped>
.responsive-menu {
    margin: 0 15px 30px 15px;
}
.responsive-menu ul {
    display: flex;
    justify-content: space-between;
}
.responsive-menu ul li {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    padding: 10px 0;

    background: rgba( 255, 132, 0, 0.6 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 7px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.responsive-menu ul li a {
    color: #000;
}
</style>