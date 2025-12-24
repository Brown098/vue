import {defineStore} from "pinia"
import {getSystemInfo} from "/api/user.js"
export const sysinfostore = defineStore('sysinfo', {
  state: () => ({
    SystemInfoList:[],
    SystemInfoListLoading:false,
    SystemInfoListError:null,
  }),
  actions: {

    async fetchSystemInfo() {
      if(this.SystemInfoListLoading) return
      this.SystemInfoListLoading = true
      this.SystemInfoListError = null
      try {
        this.SystemInfoList = await getSystemInfo()
      } catch (error) {
        this.SystemInfoListError = error.message||'发生一个错误'
        this.SystemInfoList = []
      }finally{
        this.SystemInfoListLoading = false
      }
    },


    resetAllState(){
      this.SystemInfoList = []
      this.SystemInfoListLoading = false
      this.SystemInfoListError = null
      this.error = {'SystemInfoList':null,'SystemInfoListLoading':null,'SystemInfoListError':null}
    }
  },
})