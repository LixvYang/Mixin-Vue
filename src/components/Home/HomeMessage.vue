<template>
    <section class="MixinMessager">
        <div class="session-info">
            <img src="../../assets/Home/MixinLogo.png" class="logo">
            <div class="title">Mixin Messager</div>
            <div class="content">An open source cryptocurrency wallet with Signal messaging.</div>
            <a href="/messager" class="more">
                Learn more 
                <img src="../../assets/Home/HomeMore.png">
            </a>
            <img src="../../assets/Home/MixinTalk.png" alt="">
        </div>
        
    </section>
</template>
    
<script>
    export default {
        name:"HomeMessage",
    }
</script>

<style>
.session-info {
    text-align: center;
}

.session-info .title {
    color: rgb(17, 15, 15);
    font-size: 32px;
    line-height: 38px;
    font-family: Arial Black;
}

.session-info .content {
    font-size: 18px;
    margin: 12px auto 20px auto;
    line-height: 26px;
    width: 200px;
}

.session-info .more {
    margin: 0 auto;
    font-size: 18px;
    color: #3d75e3;
    line-height: 22px;
    cursor: pointer;
    display: inline-block;
    font-size: 30px;
}



</style>