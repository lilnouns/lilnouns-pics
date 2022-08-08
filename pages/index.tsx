import type {NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/router";
import React, {useState} from "react";

const Home: NextPage = () => {
  const router = useRouter()

  const [tokenId, setTokenId] = useState('')

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formElements = form.elements as typeof form.elements & {
      tokenId: HTMLInputElement
    }
    setTokenId(formElements.tokenId.value)
    router.push(`/${tokenId}`)
  }

  return (
    <>
      <Head>
        <title>Lil Nouns Pics</title>
        <meta name="description" content="Select and download a Lil Nouns picture in various sizes and formats."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="max-w-3xl mx-auto rounded-lg bg-white shadow divide-y divide-gray-200">

            <h1 className="px-10 py-3">Lil Noun</h1>

            <div className="px-4 py-5 sm:p-6">
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Enter you Lil Noun token id to go forward.</p>
              </div>
              <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSubmit}>
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="email" className="sr-only">
                    Nouns Id
                  </label>
                  <input
                    type="number"
                    name="tokenId"
                    id="tokenId"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="3322"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Go
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default Home
