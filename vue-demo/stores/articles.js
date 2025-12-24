import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [],
  }),
  
  actions: {
    // 从localStorage加载文章
    loadArticlesFromStorage() {
      const storedArticles = localStorage.getItem('articles')
      if (storedArticles) {
        this.articles = JSON.parse(storedArticles)
      } else {
        // 初始化默认文章
        this.articles = [
          {
            id: 1,
            title: '文章1',
            content: '这是文章1的内容'
          },
          {
            id: 2,
            title: '文章2',
            content: '这是文章2的内容'
          }
        ]
        this.saveToStorage()
      }
    },
    
    // 保存文章到localStorage
    saveToStorage() {
      localStorage.setItem('articles', JSON.stringify(this.articles))
    },
    
    // 添加新文章
    addArticle(title, content) {
      const newArticle = {
        id: this.articles.length > 0 ? Math.max(...this.articles.map(a => a.id)) + 1 : 1,
        title,
        content
      }
      this.articles.push(newArticle)
      this.saveToStorage()
    },
    
    // 删除文章
    removeArticle(id) {
      this.articles = this.articles.filter(article => article.id !== id)
      this.saveToStorage()
    },
    
    // 更新文章
    updateArticle(id, title, content) {
      const index = this.articles.findIndex(article => article.id === id)
      if (index !== -1) {
        this.articles[index] = { id, title, content }
        this.saveToStorage()
      }
    }


  },

})