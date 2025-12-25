<template>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  <div class="monitor">
=======
  <div>
>>>>>>> 07af581 (main)
    <h1>系统监控</h1>

    <p v-if="!connected">WebSocket 未连接</p>

    <div v-if="data">
      <h2>CPU</h2>
      <p>使用率：{{ data.cpu.usage }}%</p>
      <p>核心：{{ data.cpu.cores }} / 线程：{{ data.cpu.threads }}</p>

      <h2>内存</h2>
      <p>使用：{{ data.memory.used }} / {{ data.memory.total }} GB</p>
      <p>使用率：{{ data.memory.percent }}%</p>

<<<<<<< HEAD
      <table v-else-if="hasObject(store.SystemInfoList)">
        <tbody>
          <tr v-for="(value, key) in store.SystemInfoList" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
>>>>>>> b248ad6 (main)
          </tr>
        </tbody>
      </table>
=======
      <h2>磁盘</h2>
      <p>使用：{{ data.disk.used }} / {{ data.disk.total }} GB</p>
      <p>使用率：{{ data.disk.percent }}%</p>
>>>>>>> 07af581 (main)

      <h2>更新时间</h2>
      <p>{{ data.timestamp }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const data = ref(null);
const connected = ref(false);
let ws = null;

onMounted(() => {
  ws = new WebSocket("ws://localhost:8000/ws/system");

  ws.onopen = () => {
    connected.value = true;
  };

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.type === "system") {
      data.value = msg.data;
    }
  };

  ws.onclose = () => {
    connected.value = false;
  };
});

onUnmounted(() => {
  if (ws) ws.close();
});
</script>
<<<<<<< HEAD

<style scoped>
<<<<<<< HEAD
.container {
  max-width: 1200px;
<<<<<<< HEAD
=======
  margin: 0 auto;
  padding: 0 16px;
  padding-bottom: 24px;
=======
.monitor {
  padding: 20px;
>>>>>>> b248ad6 (main)
}
.card {
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 20px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
table {
  width: 100%;
  border-collapse: collapse;
}
td {
  border: 1px solid #ddd;
  padding: 6px 10px;
}
.error {
  color: red;
}
pre {
  white-space: pre-wrap;
}
<<<<<<< HEAD

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
=======
</style>
>>>>>>> b248ad6 (main)
=======
>>>>>>> 07af581 (main)
