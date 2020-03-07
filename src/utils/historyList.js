export default function setHistoryList(query) {
  if (query) {
    const HISTORY_LIST = uni.getStorageSync('HISTORY_LIST') || []
    uni.setStorageSync('HISTORY_LIST', [...new Set([query, ...HISTORY_LIST])])
  }
}