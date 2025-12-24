<template>
  <div>
    <div>标题：{{ articeles?.title }}</div>
    <div>内容：{{ articeles?.content  }}</div>
    <!-- <button @click="articeles.isShow = !articeles.isShow" class="mb-4 text-blue-500 hover:text-blue-700">{{ articeles.isShow ? '收起' : '展开'}}</button> -->

    <button 
      @click="$emit('remove', articeles.id)" 
      :disabled="!articeles"
    >
      删除
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  articeles: {
    type: Object,
    required: true,
    default: () => ({ id: null, title: '', content: '' })
  }
})

// 定义 emits
defineEmits(['remove'])
</script>
```