<template>
    <div>
        <HomeMain></HomeMain>
        <HomeNet></HomeNet>
        <HomeMessage></HomeMessage>
        <HomeAbout></HomeAbout>
    </div>
</template>

<script>    
    import HomeAbout from "./Home/HomeAbout";
    import HomeMain from "./Home/HomeMain";
    import HomeMessage from "./Home/HomeMessage";
    import HomeNet from "./Home/HomeNet";
    export default {
        components: {
            HomeAbout,
            HomeMain,
            HomeMessage,
            HomeNet
        }
    }
</script>

<style>
    html,body{
        margin: 0;
        padding: 0;
    }
</style>