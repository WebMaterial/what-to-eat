import { useState } from 'react';

const CATEGORIES = [
  {
    id: 'japanese',
    label: '和食',
    items: [
      '寿司', '天ぷら', 'うどん', 'そば', '焼き鳥', 'お好み焼き',
      '定食', '刺身', 'からあげ', 'かつ丼', '親子丼', '牛丼',
      'すき焼き', 'しゃぶしゃぶ', 'もつ鍋', '焼き魚', '煮魚',
      'おでん', 'たこ焼き', '明石焼き'
    ]
  },
  {
    id: 'ramen',
    label: 'ラーメン',
    items: [
      '醤油ラーメン', '味噌ラーメン', '塩ラーメン', '豚骨ラーメン',
      '家系', '二郎系', 'つけ麺', '油そば', '担々麺', '魚介系'
    ]
  },
  {
    id: 'curry',
    label: 'カレー',
    items: [
      'カレー', 'スパイスカレー', '欧風カレー', 'インドカレー',
      'タイカレー', 'キーマカレー', 'バターチキン', 'カツカレー', 'スープカレー'
    ]
  },
  {
    id: 'yakiniku',
    label: '焼肉',
    items: [
      '焼肉', 'ホルモン', 'カルビ', 'ハラミ', 'タン',
      'サムギョプサル', '冷麺', 'クッパ'
    ]
  },
  {
    id: 'izakaya',
    label: '居酒屋',
    items: [
      '居酒屋', '串カツ', '焼き鳥', 'おでん', '馬刺し',
      'もつ煮', '唐揚げ', 'だし巻き卵'
    ]
  },
  {
    id: 'western',
    label: '洋食',
    items: [
      'ハンバーグ', 'ステーキ', 'オムライス', 'グラタン',
      'ドリア', 'ビーフシチュー', 'ローストビーフ', 'フィッシュ&チップス', 'ピラフ'
    ]
  },
  {
    id: 'italian',
    label: 'イタリアン',
    items: [
      'パスタ', 'ピザ', 'リゾット', 'カルパッチョ',
      'ラザニア', 'ニョッキ', 'ティラミス', 'ジェラート', 'ブルスケッタ'
    ]
  },
  {
    id: 'french',
    label: 'フレンチ',
    items: [
      'ビストロ', 'ガレット', 'キッシュ', 'テリーヌ',
      'クレープ', 'ブイヤベース', 'ラタトゥイユ', 'クロックムッシュ', 'フォアグラ'
    ]
  },
  {
    id: 'chinese',
    label: '中華系',
    items: [
      '中華', '餃子', '麻婆豆腐', '炒飯', '担々麺',
      '青椒肉絲', '回鍋肉', '小籠包', '油淋鶏', '天津飯', '酸辣湯麺'
    ]
  },
  {
    id: 'korean',
    label: '韓国料理',
    items: [
      'ビビンバ', '冷麺', 'チゲ', 'サムゲタン',
      'トッポギ', 'キンパ', 'チーズタッカルビ', 'プルコギ'
    ]
  },
  {
    id: 'thai',
    label: 'タイ料理',
    items: [
      'ガパオ', 'パッタイ', 'トムヤムクン', 'グリーンカレー', 'カオマンガイ', 'ソムタム'
    ]
  },
  {
    id: 'vietnamese',
    label: 'ベトナム料理',
    items: [
      'フォー', 'バインミー', '生春巻き', 'ブンチャー'
    ]
  },
  {
    id: 'indian',
    label: 'インド料理',
    items: [
      'ビリヤニ', 'バターチキン', 'タンドリーチキン', 'サグパニール', 'ダル'
    ]
  },
  {
    id: 'fastfood',
    label: 'ファーストフード',
    items: [
      'バーガー', 'フライドチキン', 'ポテト', 'サンドイッチ',
      'ナゲット', 'ホットドッグ', 'タコス', 'ブリトー'
    ]
  },
  {
    id: 'cafe',
    label: 'カフェ系',
    items: [
      'カフェ', 'スイーツ', 'パンケーキ', 'サンドイッチ',
      'パフェ', 'フレンチトースト', 'プリン', 'シフォンケーキ',
      'チーズケーキ', 'カヌレ', 'スコーン', 'コーヒー', '紅茶'
    ]
  },
]

const PRICE_CATEGORIES = [
  { id: '1000', label: '1000円以下',},
  { id: '2000', label: '2000円以下' },
  { id: '3000', label: '3000円以上' },
  { id: '5000', label: '5000円以下' },
  { id: '10000', label: '10000円以下' },
  { id: 'free', label: '気にしない' },
]

const DISTANCE_CATEGORIES = [
  { id: '1', label: '近場で探す', distance: 5000 },
  { id: '2', label: '遠くまで探す', distance: 10000 },
  { id: '3', label: 'どちらでも', distance: null },
]

const Category = () => {

  const [categoryId, setCategoryId] = useState('');
  const [picked, setPicked] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedDistance, setSelectedDistance] = useState('');

  const getSelectedCategoryLabel = () => {
    const category = CATEGORIES.find(category => category.id === categoryId)
    return category ? category.label : '';
  }

  const getSelectedPriceLabel = () => {
    const price = PRICE_CATEGORIES.find(price => price.id === selectedPrice)
    return price ? price.label : ''
  }

  const getSelectedDistanceMetre = () => {
    const distance = DISTANCE_CATEGORIES.find(distance => distance.id === selectedDistance)
    return distance ? distance.distance : null;
  }

  const buildQuery = () => {

    const customerInfo = [];

    if (picked) {
      customerInfo.push(getSelectedCategoryLabel()) 
      customerInfo.push(picked) //具体的に食べたい食べ物まで
    } else if(categoryId) {
      customerInfo.push(getSelectedCategoryLabel()) //食べたい系統だけで
    } else {
      customerInfo.push('たべもの')
    }

    const priceLabel = getSelectedPriceLabel()

    if (priceLabel === '気にしない') {
    } else {
      customerInfo.push(priceLabel)
    }

    const distanceMetre = getSelectedDistanceMetre()
    if (distanceMetre) {
      customerInfo.push(distanceMetre + 'm以内')
    }

    return customerInfo.join(' ')

  }

  const buildMapsUrl = () => {
    const query = buildQuery()
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}&hl=ja`
  }

  const openGoogleMaps = (query) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}&hl=ja`
    window.open(url, '_blank', 'noopener,noreferrer');
 }

 const handleSearch = () => {
  const query = buildQuery()
  openGoogleMaps(query)
}

 const handleCopyUrl = async () => {
  try {
    const url = buildMapsUrl()
    await navigator.clipboard.writeText(url)
    alert('検索URLをコピーしました')
  } catch {
    // クリップボード不可のブラウザ向けフォールバック
    const url = buildMapsUrl()
    window.prompt('このURLをコピーしてください', url)
  }
 }


  return (
    <div className="category">
      <div className="category__inner">

        <div className="category__group">
          <h3 className="category__title">1. 食べたい系統</h3>
          <div className="category__list">

            {CATEGORIES.map((category) => {
              const selected = categoryId === category.id
              
              return (
                <div className="category__item" key={`category-${category.id}`}>
                  <button className="category__button" onClick={() => {setCategoryId(category.id); setPicked('');}} data-selected={selected ? 'true' : 'false'}>{category.label}</button>
                </div>
              )
            })}
          </div>
        </div>

        <div className="category__group">
          <h3 className="category__title">2. 具体的に食べたい食べ物</h3>

          <div className="category__list">

            {categoryId ? (
              CATEGORIES.find(category => category.id == categoryId)?.items.map((item) => {
                const selected = picked === item
                return (
                  <div className="category__item" key={`item-${item}`}>
                    <button className="category__button" onClick={() => setPicked(item)} data-selected={selected ? 'true' : 'false'}>{item}</button>
                  </div>
                )
              })
            ) : (
              <div className="category__item">
                先にカテゴリを選んでください。
              </div>
            )}
          </div>

        </div>

        <div className="category__group">
          <h3 className="category__title">3. 予算</h3>
          <div className="category__list">

            {PRICE_CATEGORIES.map((category) => {
              const selected = selectedPrice === category.id
              return (
                <div className="category__item" key={`price-${category.id}`}>
                  <button className="category__button" onClick={() => {setSelectedPrice(category.id)}} data-selected={selected ? 'true' : 'false'}>{category.label}</button>
                </div>
              )
            })}

          </div>
        </div>



        <div className="category__group">
          <h3 className="category__title">4. 移動手段</h3>
          <div className="category__list">

            {DISTANCE_CATEGORIES.map((category) => {
              const selected = selectedDistance === category.id
              return (
                <div className="category__item" key={`distance-${category.id}`}>
                  <button className="category__button" onClick={() => {setSelectedDistance(category.id)}} data-selected={selected ? 'true' : 'false'}>{category.label}</button>
                </div>
              )
            })}

          </div>
        </div>



        <div className="category__group">
          <button className="search__button" onClick={() => {handleSearch()}}>検索</button>
          <button className="copy-button" onClick={() => {handleCopyUrl()}}>URLをコピー</button>
        </div>




      </div>
    </div>
  );
}

export default Category;