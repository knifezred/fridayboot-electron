import log from 'electron-log'
import express from 'express'
import { Settings } from '../settings'
// 创建express http服务器
export function createExpressServer(app: Electron.App) {
  const expressServer = express()
  log.info(app.getAppPath())
  const serverDir = app.getAppPath()
  // path.join(app.getPath('documents'), Settings.ArchivePath)
  log.info('serverDir ' + serverDir)
  // 设置静态文件目录
  expressServer.use(express.static(serverDir))
  // 启动服务器
  expressServer.listen(Settings.ServerPort, () => {
    log.info('Server started on port ' + Settings.ServerPort)
  })
  return expressServer
}
