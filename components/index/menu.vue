<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item,idx) in menu" :key="idx" @mouseenter="enter">
        <i :class="item.type"/>{{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item,idx) in curdetail.child">
        <h4 :key="idx">{{item.title}}</h4>
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Mymenu",
    data() {
      return {
        kind: '',
        menu: [{
          type: 'food',
          name: '美食',
          child: [{
            title: "美食",
            child: ['代金券5', '代金券1', '代金券2']
          }]
        }, {
          type: 'food',
          name: '美食',
          child: [{
            title: "外卖",
            child: ['代金券4', '代金券12', '代金券22']
          }]
        }, {
          type: 'food',
          name: '美食',
          child: [{
            title: "外卖",
            child: ['代金券3', '代金券12', '代金券22']
          }]
        }, {
          type: 'food',
          name: '美食',
          child: [{
            title: "外卖",
            child: ['代金券2', '代金券12', '代金券22']
          }]
        }, {
          type: 'hotel',
          name: '酒店',
          child: [{
            title: "酒店星级",
            child: ['经济学', '代金券1经济学2', '代经济学金券22']
          }]
        }
        ]
      }
    },
    computed: {
      curdetail: function () {
        return this.menu.filter((item) => item.type == this.kind)[0]
      }
    },
    methods: {
      mouseleave: function () {
        let self = this;
        self._timer = setTimeout(function () {
          self.kind = ''
        }, 150)
      },
      enter: function (e) {
        this.kind = e.target.querySelector('i').className
      },
      sover: function () {
        clearTimeout(this._timer)
      },
      sout: function () {
        this.kind = ''
      }
    }

  }
</script>

<style scoped>

</style>
