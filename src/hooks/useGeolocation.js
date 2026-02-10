import { useCallback, useState } from 'react'

export function useGeolocation() {
  const [position, setPosition] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getCurrentPosition = useCallback(async () => {
    if (!('geolocation' in navigator)) {
      setError(new Error('この端末では位置情報が利用できません'))
      return
    }
    setLoading(true)
    setError(null)
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition(pos)
          setLoading(false)
          resolve(pos)
        },
        (err) => {
          setError(err)
          setLoading(false)
          resolve(null)
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      )
    })
  }, [])

  return { position, error, loading, getCurrentPosition }
}

