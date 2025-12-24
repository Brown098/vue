<template>
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
      </div>
    </div>
    
    <!-- 错误状态 -->
    <div v-else-if="store.SystemInfoListError" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">错误: </strong>
      <span class="block sm:inline">{{ store.SystemInfoListError }}</span>
      <button @click="retryFetch" class="ml-2 bg-red-100 hover:bg-red-200 px-2 py-1 rounded text-sm">
        重试
      </button>
    </div>
    
    <!-- 成功状态 -->
    <div v-else-if="systeminfo.length === 0" class="text-center py-12">
      <p class="text-gray-500">暂无系统信息</p>
    </div>
    
    <!-- 系统信息表格 -->
    <div v-else class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <tbody>
          <tr v-for="(item, index) in systeminfo" :key="index" class="border-b border-gray-100 hover:bg-gray-50">
            <td class="py-3 px-4 text-gray-700">{{ item }}</td>
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
}
</style>