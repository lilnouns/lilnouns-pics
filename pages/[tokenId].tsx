import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://api.lilnouns.dev/nouns'
  );

  const contentRange = response.headers.get('content-range')
  const nounsCount = contentRange ? contentRange.split('/')[1] : 0;

  let paths = [];
  for (let i=0; i <= nounsCount; i++) {
    paths.push({params: {tokenId: `${i}`}})
  }

  return ({
    paths,
    fallback: false, // can also be true or 'blocking'
  });
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const tokenId = context.params!.tokenId;

  if (!tokenId) return { notFound: true };

  const response = await fetch(
    `https://api.lilnouns.dev/nouns/${tokenId}`
  );

  const data = await response.json();

  console.log(data);

  return ({
    // Passed to the page component as props
    props: {noun: data.data.noun},
  });
};

const Noun = ({noun}: any) => {
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
