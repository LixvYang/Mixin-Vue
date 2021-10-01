<template>
    <div>
        <header class="homemain">
            <div class="home-background" :style=backgroundImg>

            </div>
            <img class="nav-logo" src="../../assets/Home/homewhite.png">
            
            <div>
                <nav>
                    <div class="nav-list">
                        <img src="../../assets/Home/nav-list.png">
                        <a-dropdown :trigger="['click']">
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                         <a-icon type="down" />
                        </a>
                        <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <a href="/about">Mixin Network</a>
                        </a-menu-item>
                        <a-menu-item key="1">
                            <a href="http://www.taobao.com/">Mixin Messager</a>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="3">
                            Developers
                        </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                    </div>
                </nav>

                <div class="nav-title">
                    <h1>Secure digital assets and messages on Mixin</h1>
                    <p>
                        <span>We build open source software</span>
                        <span>that always puts security, privacy</span>
                        <span> and decentralization first.</span>
                    </p>
                </div>
            </div>
        </header>
    </div>
</template>
    
<script>
    import home from '../../assets/Home/home.jpg' 
    import homewhite from '../../assets/Home/homewhite.png'

    export default {
        name:"HomeMain",
        data: function() {
            return {
                backgroundImg:{ backgroundImage: 'url(\'' + require('../../assets/Home/home.jpg') + '\')'  },
                home:home,
                homewhite:homewhite
            }
        }
    }
</script>

<style>
.homemain{
    font-family: Georgia, serif;
}

.home-background{
    width: 100%;
    height: 618px;
    object-fit: cover;
    position: relative;
    top: 0%;
    left: 0%;
    z-index: -1;
    /* background-color: #366bd5; */
    background-size: cover;
    background-repeat: no-repeat;
}

nav{
    margin: 0 auto;
}

.nav-logo{
    position: absolute;
    top: 4%;
    right: 76%; 
    /* bottom: 80%;
    left: 75%;  */
}

.nav-list {
    position: absolute;
    top: 5%;
    left: 80%;
}

nav .nav-list .ant-dropdown-link {
    color: white;
}
.nav-title {
    text-align:center;
    position: absolute;
    top: 40%;
    left: 20%;
       
}
.nav-title h1{
    font-size: 40px;
    color: aliceblue;
}

.nav-title p {
    color: aliceblue;
    font-size: 16px;
}

</style>