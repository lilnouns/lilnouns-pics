import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Noun = () => {
  const router = useRouter()
  const {tokenId} = router.query

  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/nouns/${tokenId}/images`, {
      method: 'POST',
      body: JSON.stringify({})
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [tokenId])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <>
      <main>
        <h1>{data.data.image.mime}</h1>
        <p>{data.data.image.body}</p>
      </main>
    </>
  )
}

export default Noun
