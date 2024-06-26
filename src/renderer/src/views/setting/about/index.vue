<template>
  <NSpace vertical :size="16">
    <NCard
      :title="`${$t('page.about.title') + ' ' + $t('system.title')}`"
      :bordered="false"
      size="small"
      segmented
      class="card-wrapper">
      <p><icon-local-logo class="w-32 h-32" /> {{ $t('page.about.introduction') }}</p>
    </NCard>
    <NCard
      :title="$t('page.about.projectInfo.title')"
      :bordered="false"
      size="small"
      segmented
      class="card-wrapper">
      <NDescriptions label-placement="left" bordered size="small">
        <NDescriptionsItem :label="$t('page.about.projectInfo.version')">
          <NTag type="primary">{{ pkgJson.version }}</NTag>
          <NButton class="ml-2" size="small" type="primary" @click="checkVersion">
            <template #icon>
              <n-progress
                v-if="updatePercentage > 0"
                type="circle"
                :percentage="updatePercentage" />
            </template>
            {{ $t('page.about.update.checkUpdate') }}
          </NButton>
        </NDescriptionsItem>
        <NDescriptionsItem :label="$t('page.about.projectInfo.latestBuildTime')">
          <NTag type="primary">{{ latestBuildTime }}</NTag>
        </NDescriptionsItem>
        <NDescriptionsItem :label="$t('page.about.projectInfo.author')">
          <NTag type="primary">{{ pkg.author }}</NTag>
        </NDescriptionsItem>
        <NDescriptionsItem :label="$t('page.about.projectInfo.githubLink')">
          <a class="text-primary" :href="pkg.homepage" target="_blank" rel="noopener noreferrer">
            {{ $t('page.about.projectInfo.githubLink') }}
          </a>
        </NDescriptionsItem>
        <NDescriptionsItem :label="$t('page.about.projectInfo.previewLink')">
          <a class="text-primary" :href="pkg.website" target="_blank" rel="noopener noreferrer">
            {{ $t('page.about.projectInfo.previewLink') }}
          </a>
        </NDescriptionsItem>
      </NDescriptions>
    </NCard>
  </NSpace>
</template>

<script setup lang="ts">
import { $t } from '@renderer/locales'
import { onMounted, onUnmounted, ref } from 'vue'
import pkg from '../../../../../../package.json'
const ipcRenderer = window.electron.ipcRenderer
const updatePercentage = ref(0)
interface PkgJson {
  name: string
  author: string
  version: string
}

const { name, author, version } = pkg
const pkgJson: PkgJson = {
  name,
  author,
  version
}
const latestBuildTime = BUILD_TIME

function checkVersion() {
  ipcRenderer.send('check-for-update')
}

onMounted(() => {
  ipcRenderer.on('check-for-update-reply', (_event, arg) => {
    if (arg == true) {
      window.$dialog?.info({
        title: $t('common.tip'),
        content: $t('page.about.update.newUpdateVersion'),
        positiveText: $t('common.confirm'),
        negativeText: $t('common.cancel'),
        onPositiveClick: () => {
          // 下载更新
          ipcRenderer.send('download-update')
        }
      })
    } else {
      window.$message?.info($t('page.about.update.noUpdateVersion'))
    }
  })
  ipcRenderer.on('download-update-percent-reply', (_event, arg) => {
    updatePercentage.value = arg
  })
  ipcRenderer.on('download-update-reply', (_event, arg) => {
    if (arg) {
      window.$dialog?.info({
        title: $t('common.tip'),
        content: $t('page.about.update.rebootAndUpdate'),
        positiveText: $t('common.confirm'),
        negativeText: $t('common.cancel'),
        onPositiveClick: () => {
          // 重启更新
          ipcRenderer.send('quit-and-install')
        }
      })
    }
  })
})
onUnmounted(() => {
  window.electron.ipcRenderer.removeAllListeners('check-for-update-reply')
  window.electron.ipcRenderer.removeAllListeners('download-update-percent-reply')
  window.electron.ipcRenderer.removeAllListeners('download-update-reply')
})
</script>

<style scoped></style>
