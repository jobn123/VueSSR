<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}_____{{count}}</h3>

        <div>
          <button @click="$store.commit('add')">加</button>
          <button @click="$store.commit('addTen', 10)">加10</button>
          <button @click="reduce">减</button>
          <button @click="addAction">异步加</button>
          <button @click="reduceAction">异步减</button>
        </div>
    </div>
</template>
<script>
    import store from '@/store/store'
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        // methods: mapMutations([
        //   'add','reduce'
        // ]),
        //异步Action
        methods: {
          ...mapMutations(['add','reduce']),
          ...mapActions(['addAction', 'reduceAction'])
        },
        //获取state的值
        // computed: {
        //   count() {
        //     return this.$store.state.count
        //   }
        // },
        // computed:mapState({
        //   count:state=>state.count
        // }),
        // computed:mapState(["count"]),
        computed: {...mapGetters(["count"])},
        store
    }
</script>