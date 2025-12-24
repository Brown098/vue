<template>
  <div>
    <div>
      <h1>创建新文章</h1>
      
      <form @submit.prevent="createArticle">
        <div>
          <label for="title">标题</label>
          <input 
            type="text" 
            id="title"
            v-model="title" 
            placeholder="输入文章标题"
            required
          >
        </div>
        
        <div>
          <label for="content">内容</label>
          <textarea 
            id="content"
            v-model="content" 
            rows="4"
            placeholder="输入文章内容"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit"
        >
          创建文章
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useArticlesStore } from '../../stores/articles'

const title = ref('')
const content = ref('')
const router = useRouter()
const articlesStore = useArticlesStore()

// 创建文章
const createArticle = () => {
  articlesStore.addArticle(title.value, content.value)
  
  // 重置表单
  title.value = ''
  content.value = ''
  
  // 导航回首页
  router.push('/')
}
</script>
```