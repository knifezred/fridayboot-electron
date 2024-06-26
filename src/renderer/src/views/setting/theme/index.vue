<template>
  <NSpace>
    <NCard :bordered="false" class="w-auto">
      <DarkMode />
      <LayoutMode />
      <ThemeColor />
    </NCard>
    <NCard :bordered="false" class="w-2xl">
      <PageFun />
      <NButton class="mt-4" type="primary" block @click="saveThemeConfig">
        {{ $t('common.save') }}
      </NButton>
    </NCard>
  </NSpace>
</template>
<script setup lang="ts">
import DarkMode from '@renderer/layouts/modules/theme-drawer/modules/dark-mode.vue'
import LayoutMode from '@renderer/layouts/modules/theme-drawer/modules/layout-mode.vue'
import PageFun from '@renderer/layouts/modules/theme-drawer/modules/page-fun.vue'
import ThemeColor from '@renderer/layouts/modules/theme-drawer/modules/theme-color.vue'
import { createStorage, findStorage, updateStorage } from '@renderer/service/api/storage'
import { useThemeStore } from '@renderer/store/modules/theme'

defineOptions({
  name: 'ThemeSetting'
})

const themeStore = useThemeStore()

function saveThemeConfig() {
  const settings = themeStore.settingsJson
  findStorage('theme.settings').then((res) => {
    console.log(res.data)
  })
  if (themeStore.settingId > 0) {
    updateStorage({
      key: 'theme.settings',
      value: settings,
      id: themeStore.settingId
    })
  } else {
    createStorage({
      key: 'theme.settings',
      value: settings
    })
  }
}
</script>

<style scoped></style>
