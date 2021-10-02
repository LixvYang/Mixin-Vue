<template>
    <div>
        <section class="home-net" data-aos="slide-up" data-aos-duration="1500" data-aos-once="false">
            <div class="title">Mixin Network</div>
            <div class="content">A free, lightning fast and decentralized network for transferring digital assets.</div>
            <a href="/snapshots" class="more">
                Learn more 
                <img src="../../assets/Home/HomeMore.png">
            </a>
        </section>
        <img src="../../assets/Home/MixinNet.png">
    </div>
</template>
    
<script>
    export default {
        name:"HomeNet",
    }
</script>

<style>
.home-net{
    text-align: center;
}

.home-net .title {
    color: rgb(17, 15, 15);
    font-size: 32px;
    line-height: 38px;
    font-family: Arial Black;
    font-display:auto;
}

.home-net .content {
    font-display:auto;
    font-size: 18px;
    margin: 12px auto 20px auto;
    line-height: 26px;
    width: 200px;
}

.home-net .more {
    margin: 0 auto;
    font-size: 18px;
    color: #3d75e3;
    line-height: 22px;
    cursor: pointer;
    display: inline-block;
    font-size: 30px;
}

</style>