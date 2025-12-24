<template>
<<<<<<< HEAD
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">系统监控</h1>
    
    <!-- 加载状态 -->
    <div v-if="store.SystemInfoListLoading" class="flex items-center justify-center py-12">
      <div class="text-center">
        <svg class="animate-spin h-8 w-8 mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="mt-2 text-gray-600">加载系统信息中...</p>
=======
  <div class="container">
    <h1 class="page-title">系统监控</h1>
    
    <!-- 加载状态 -->
    <div v-if="store.SystemInfoListLoading" class="loading-container">
      <div class="loading-content">
        <svg class="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="loading-text">加载系统信息中...</p>
>>>>>>> 67955f9 (main)
      </div>
    </div>
    
    <!-- 错误状态 -->
<<<<<<< HEAD
    <div v-else-if="store.SystemInfoListError" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">错误: </strong>
      <span class="block sm:inline">{{ store.SystemInfoListError }}</span>
      <button @click="retryFetch" class="ml-2 bg-red-100 hover:bg-red-200 px-2 py-1 rounded text-sm">
=======
    <div v-else-if="store.SystemInfoListError" class="error-container" role="alert">
      <strong class="error-title">错误: </strong>
      <span class="error-message">{{ store.SystemInfoListError }}</span>
      <button @click="retryFetch" class="retry-button">
>>>>>>> 67955f9 (main)
        重试
      </button>
    </div>
    
    <!-- 成功状态 -->
<<<<<<< HEAD
    <div v-else-if="systeminfo.length === 0" class="text-center py-12">
      <p class="text-gray-500">暂无系统信息</p>
    </div>
    
    <!-- 系统信息表格 -->
    <div v-else class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <tbody>
          <tr v-for="(item, index) in systeminfo" :key="index" class="border-b border-gray-100 hover:bg-gray-50">
            <td class="py-3 px-4 text-gray-700">{{ item }}</td>
=======
    <div v-else-if="systeminfo.length === 0" class="empty-container">
      <p class="empty-text">暂无系统信息</p>
    </div>
    
    <!-- 系统信息表格 -->
    <div v-else class="table-container">
      <table class="data-table">
        <tbody>
          <tr v-for="(item, index) in systeminfo" :key="index" class="table-row">
            <td class="table-cell">{{ item }}</td>
>>>>>>> 67955f9 (main)
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref,} from "vue";
import { sysinfostore } from "../../stores/user.js";
const systeminfo = ref([]);
const store = sysinfostore();

const retryFetch = async () => {
  await store.fetchSystemInfo();
  systeminfo.value = store.SystemInfoList;
};

onMounted(async() => {
  await store.fetchSystemInfo();
  systeminfo.value = store.SystemInfoList;
})
</script>

<style scoped>
.container {
  max-width: 1200px;
<<<<<<< HEAD
=======
  margin: 0 auto;
  padding: 0 16px;
  padding-bottom: 24px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #333;
}

.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
}

.loading-content {
  text-align: center;
}

.spinner {
  width: 32px;
  height: 32px;
  margin: 0 auto 8px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: #666;
}

.error-container {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: #b91c1c;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.error-title {
  font-weight: bold;
  margin-right: 8px;
}

.error-message {
  flex: 1;
}

.retry-button {
  margin-left: 8px;
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
}

.empty-container {
  text-align: center;
  padding: 48px 0;
}

.empty-text {
  color: #999;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  min-width: 100%;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.table-row {
  border-bottom: 1px solid #f3f4f6;
}

.table-row:hover {
  background-color: #f9fafb;
}

.table-cell {
  padding: 12px;
  color: #374151;
>>>>>>> 67955f9 (main)
}
</style>