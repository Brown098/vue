<template>
  <div>
    <div>
      <h1>欢迎来到首页</h1>
      <div>
        <button @click="goToAbout">关于页面</button>
        <button @click="goToCreate">新建文章</button>
        <button @click="goToSysinfo">系统信息</button>
      </div>
      <div>
        <articeless v-for="item in articles" :key="item.id" :articeles="item" @remove="handleRemove" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import articeless from '../component/articeless.vue'
import { useArticlesStore } from '../../stores/articles'

const router = useRouter()
const articles = ref([])

// 修复路由跳转方法
const goToAbout = () => router.push('/about')
const goToCreate = () => router.push('/create')
const goToSysinfo = () => router.push('/sysinfo')

// 删除文章列表

const articlesStore = useArticlesStore()
const handleRemove = (id) => {
  articlesStore.removeArticle(id)
  articles.value = articlesStore.updateArticle()
}

//加载文章
onMounted(() => {
  articlesStore.loadArticlesFromStorage()
  articles.value = articlesStore.articles
    
})
//获取文章列表

</script>