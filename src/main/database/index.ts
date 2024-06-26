import { initStorageApi } from './repository/storage'
import { initUserApi } from './repository/user'

// 绑定api接口
export function setupServerApi(server) {
  initUserApi(server)
  initStorageApi(server)
}
