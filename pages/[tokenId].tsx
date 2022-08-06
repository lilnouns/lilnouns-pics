import {useRouter} from "next/router";
import {GetServerSidePropsContext} from "next";

const Noun = () => {
  const router = useRouter()
  const {tokenId} = router.query

  return (
    <>
      <main>

      </main>
    </>
  )
}

export const getServerSideProps = async (
  context?: GetServerSidePropsContext
) => {
  // this will be called server-side only
  const tokenId = context!.params!.tokenId;

  // check if tokenId is numeric
  if (isNaN(Number(tokenId))) {
    return {notFound: true};
  }

  return {
    props: {
      tokenId,
    }
  };
}

export default Noun
