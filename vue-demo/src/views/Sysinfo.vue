<template>
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
    <h1>系统监控</h1>

    <!-- ========== 系统信息 ========== -->
    <section class="card">
      <header>
        <h2>系统信息</h2>
        <button @click="retryFetch('system')" :disabled="store.SystemInfoListLoading">
          刷新
        </button>
      </header>

      <p v-if="store.SystemInfoListLoading">加载中...</p>

      <p v-else-if="store.SystemInfoListError" class="error">
        错误：{{ store.SystemInfoListError }}
      </p>

      <table v-else-if="hasObject(store.SystemInfoList)">
        <tbody>
          <tr v-for="(value, key) in store.SystemInfoList" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
>>>>>>> b248ad6 (main)
          </tr>
        </tbody>
      </table>

      <p v-else>暂无系统信息</p>
    </section>

    <!-- ========== CPU 信息 ========== -->
    <section class="card">
      <header>
        <h2>CPU 信息</h2>
        <button @click="retryFetch('cpu')" :disabled="store.CpuInfoListLoading">
          刷新
        </button>
      </header>

      <p v-if="store.CpuInfoListLoading">加载中...</p>

      <p v-else-if="store.CpuInfoListError" class="error">
        错误：{{ store.CpuInfoListError }}
      </p>

      <table v-else-if="store.CpuInfoList">
        <tbody>
          <tr v-for="(value, key) in store.CpuInfoList" :key="key">
            <td>{{ key }}</td>
            <td>
              <template v-if="Array.isArray(value)">
                <div v-for="(item, i) in value" :key="i">{{ item }}</div>
              </template>
              <template v-else-if="isObject(value)">
                <pre>{{ value }}</pre>
              </template>
              <template v-else>
                {{ value }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-else>暂无 CPU 信息</p>
    </section>

    <!-- ========== 内存信息 ========== -->
    <section class="card">
      <header>
        <h2>内存信息</h2>
        <button @click="retryFetch('memory')" :disabled="store.MemoryInfoListLoading">
          刷新
        </button>
      </header>

      <p v-if="store.MemoryInfoListLoading">加载中...</p>

      <p v-else-if="store.MemoryInfoListError" class="error">
        错误：{{ store.MemoryInfoListError }}
      </p>

      <table v-else-if="store.MemoryInfoList">
        <tbody>
          <template v-for="(section, sectionKey) in store.MemoryInfoList" :key="sectionKey">
            <tr>
              <td colspan="2"><strong>{{ sectionKey }}</strong></td>
            </tr>
            <tr v-for="(value, key) in section" :key="sectionKey + key">
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </template>
        </tbody>
      </table>

      <p v-else>暂无内存信息</p>
    </section>

    <!-- ========== 磁盘信息 ========== -->
    <section class="card">
      <header>
        <h2>磁盘信息</h2>
        <button @click="retryFetch('disk')" :disabled="store.DiskInfoListLoading">
          刷新
        </button>
      </header>

      <p v-if="store.DiskInfoListLoading">加载中...</p>

      <p v-else-if="store.DiskInfoListError" class="error">
        错误：{{ store.DiskInfoListError }}
      </p>

      <div v-else-if="store.DiskInfoList?.disk_info?.length">
        <div v-for="(disk, index) in store.DiskInfoList.disk_info" :key="index">
          <table>
            <tbody>
              <tr v-for="(value, key) in disk" :key="key">
                <td>{{ key }}</td>
                <td>{{ value }}</td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
      </div>

      <p v-else>暂无磁盘信息</p>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { sysinfostore } from "../../stores/user.js";

const store = sysinfostore();

const retryFetch = async (type) => {
  const map = {
    system: store.fetchSystemInfo,
    cpu: store.fetchCpuInfo,
    memory: store.fetchMemoryInfo,
    disk: store.fetchDiskInfo,
  };
  await map[type]?.();
};

const isObject = (val) =>
  val !== null && typeof val === "object" && !Array.isArray(val);

const hasObject = (val) => isObject(val) && Object.keys(val).length > 0;

onMounted(async () => {
  await Promise.all([
    store.fetchSystemInfo(),
    store.fetchCpuInfo(),
    store.fetchMemoryInfo(),
    store.fetchDiskInfo(),
  ]);
});
</script>

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
