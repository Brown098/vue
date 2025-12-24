import {defineStore} from "pinia"
import {getSystemInfo, getCpuInfo, getMemoryInfo, getDiskInfo, getNetworkInfo, getProcesses, getSystemStatus} from "../api/user.js"

/**
 * 系统信息状态管理Store
 * 包含系统信息、CPU信息、内存信息、磁盘信息、网络信息、进程信息和系统状态
 */
export const sysinfostore = defineStore('sysinfo', {
  state: () => ({
    // 系统信息相关状态
    SystemInfoList: [],
    SystemInfoListLoading: false,
    SystemInfoListError: null,
    
    // CPU信息相关状态
    CpuInfoList: [],
    CpuInfoListLoading: false,
    CpuInfoListError: null,
    
    // 内存信息相关状态
    MemoryInfoList: [],
    MemoryInfoListLoading: false,
    MemoryInfoListError: null,
    
    // 磁盘信息相关状态
    DiskInfoList: [],
    DiskInfoListLoading: false,
    DiskInfoListError: null,
    
    // 网络信息相关状态
    NetworkInfoList: [],
    NetworkInfoListLoading: false,
    NetworkInfoListError: null,
    
    // 进程信息相关状态
    ProcessesList: [],
    ProcessesListLoading: false,
    ProcessesListError: null,
    
    // 系统状态相关状态
    SystemStatusList: [],
    SystemStatusListLoading: false,
    SystemStatusListError: null,
    
    // 全局错误状态
    error: {}
  }),
  actions: {
    // 获取系统信息
    async fetchSystemInfo() {
      if(this.SystemInfoListLoading) return
      this.SystemInfoListLoading = true
      this.SystemInfoListError = null
      try {
        this.SystemInfoList = await getSystemInfo()
      } catch (error) {
        this.SystemInfoListError = error.message || '获取系统信息时发生错误'
        this.SystemInfoList = []
      } finally {
        this.SystemInfoListLoading = false
      }
    },
    
    // 获取CPU信息
    async fetchCpuInfo() {
      if(this.CpuInfoListLoading) return
      this.CpuInfoListLoading = true
      this.CpuInfoListError = null
      try {
        this.CpuInfoList = await getCpuInfo()
      } catch (error) {
        this.CpuInfoListError = error.message || '获取CPU信息时发生错误'
        this.CpuInfoList = []
      } finally {
        this.CpuInfoListLoading = false
      }
    },
    
    // 获取内存信息
    async fetchMemoryInfo() {
      if(this.MemoryInfoListLoading) return
      this.MemoryInfoListLoading = true
      this.MemoryInfoListError = null
      try {
        this.MemoryInfoList = await getMemoryInfo()
      } catch (error) {
        this.MemoryInfoListError = error.message || '获取内存信息时发生错误'
        this.MemoryInfoList = []
      } finally {
        this.MemoryInfoListLoading = false
      }
    },
    
    // 获取磁盘信息
    async fetchDiskInfo() {
      if(this.DiskInfoListLoading) return
      this.DiskInfoListLoading = true
      this.DiskInfoListError = null
      try {
        this.DiskInfoList = await getDiskInfo()
      } catch (error) {
        this.DiskInfoListError = error.message || '获取磁盘信息时发生错误'
        this.DiskInfoList = []
      } finally {
        this.DiskInfoListLoading = false
      }
    },
    
    // 获取网络信息
    async fetchNetworkInfo() {
      if(this.NetworkInfoListLoading) return
      this.NetworkInfoListLoading = true
      this.NetworkInfoListError = null
      try {
        this.NetworkInfoList = await getNetworkInfo()
      } catch (error) {
        this.NetworkInfoListError = error.message || '获取网络信息时发生错误'
        this.NetworkInfoList = []
      } finally {
        this.NetworkInfoListLoading = false
      }
    },
    
    // 获取进程信息
    async fetchProcesses() {
      if(this.ProcessesListLoading) return
      this.ProcessesListLoading = true
      this.ProcessesListError = null
      try {
        this.ProcessesList = await getProcesses()
      } catch (error) {
        this.ProcessesListError = error.message || '获取进程信息时发生错误'
        this.ProcessesList = []
      } finally {
        this.ProcessesListLoading = false
      }
    },
    
    // 获取系统状态
    async fetchSystemStatus() {
      if(this.SystemStatusListLoading) return
      this.SystemStatusListLoading = true
      this.SystemStatusListError = null
      try {
        this.SystemStatusList = await getSystemStatus()
      } catch (error) {
        this.SystemStatusListError = error.message || '获取系统状态时发生错误'
        this.SystemStatusList = []
      } finally {
        this.SystemStatusListLoading = false
      }
    },

    // 重置所有状态
    resetAllState(){
      // 重置系统信息状态
      this.SystemInfoList = []
      this.SystemInfoListLoading = false
      this.SystemInfoListError = null
      
      // 重置CPU信息状态
      this.CpuInfoList = []
      this.CpuInfoListLoading = false
      this.CpuInfoListError = null
      
      // 重置内存信息状态
      this.MemoryInfoList = []
      this.MemoryInfoListLoading = false
      this.MemoryInfoListError = null
      
      // 重置磁盘信息状态
      this.DiskInfoList = []
      this.DiskInfoListLoading = false
      this.DiskInfoListError = null
      
      // 重置网络信息状态
      this.NetworkInfoList = []
      this.NetworkInfoListLoading = false
      this.NetworkInfoListError = null
      
      // 重置进程信息状态
      this.ProcessesList = []
      this.ProcessesListLoading = false
      this.ProcessesListError = null
      
      // 重置系统状态
      this.SystemStatusList = []
      this.SystemStatusListLoading = false
      this.SystemStatusListError = null
      
      this.error = {}
    }
  },
})