<template>
    <router-view transition v-r-transition keep-alive>
    </router-view>
</template>
<script>
export default {

}
</script>
<style>
body {
    font-family: Helvetica, sans-serif;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.forward-transition,
.back-transition {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: #f5f5f5;
    -webkit-transition: all 500ms ease-out;
    transition: all 500ms ease-out;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.forward-enter {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
}

.back-enter {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
}

.forward-leave,
.back-leave {
    -webkit-filter: brightness(.5);
    filter: brightness(.5);
}

.forward-leave {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
}

.back-leave {
    -webkit-transform: translate3d(50%, 0, 0);
    transform: translate3d(50%, 0, 0);
}
</style>
