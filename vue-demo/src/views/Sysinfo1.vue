<template>
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
.monitor {
  padding: 20px;
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
</style>
