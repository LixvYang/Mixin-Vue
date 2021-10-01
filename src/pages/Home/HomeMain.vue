<template>
    <div>
        
        <header class="homemain">
            <img class="home-background" src="../../assets/Home/home.jpg"><img>
            <div>
                <nav>
                    <img class="nav-logo" src="../../assets/Home/homewhite.png">
                    <div class="nav-list">
                        <img src="../../assets/Home/nav-list.png">
                        <a-dropdown :trigger="['click']">
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                         <a-icon type="down" />
                        </a>
                        <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <a href="http://www.alipay.com/">Mixin Network</a>
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
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
    background-color: #366bd5;
    background-size: contain;
}

nav{
    margin: 0 auto;
}

.nav-logo{
    margin: 10px 40px 0 40px;
}

.nav-list {
    position: absolute;
    top: 5%;
    right: 25%;
    bottom: 80%;
    left: 75%;
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