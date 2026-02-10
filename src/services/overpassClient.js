// スタブ実装：実APIの代わりにダミーを返す
export async function searchNearby({ lat, lng, radius, categories = [] }) {
  const mock = [
    { id: '1', name: 'ダミー店A', distance: 180, categoryLabel: 'ラーメン', address: 'サンプル1-2-3' },
    { id: '2', name: 'ダミー店B', distance: 420, categoryLabel: 'カレー', address: 'サンプル4-5-6' }
  ]
  await new Promise((r) => setTimeout(r, 300))
  // カテゴリが指定されていても、とりあえず固定データを返す
  return mock.filter((m) => m.distance <= (radius ?? 500))
}

