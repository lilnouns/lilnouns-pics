import type {NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/router";
import React, {useState} from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Content from "../components/content";

const Home: NextPage = () => {
  const router = useRouter()

  const [isLoading, setLoading] = useState(false)

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault()
    const form = event.currentTarget
    const formElements = form.elements as typeof form.elements & {
      tokenId: HTMLInputElement
    }
    router.push(`/${formElements.tokenId.value}`)
  }

  return (
    <>
      <Head>
        <title>Lil Nouns Pics</title>
        <meta name="description" content="Select and download a Lil Nouns picture in various sizes and formats."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="relative bg-gray-50 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
            </svg>
          </div>
        </div>

        <div className="relative pt-6">
          <Header />

          <Content>
            <section>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
                <div className="max-w-3xl mx-auto rounded-lg bg-white shadow divide-y divide-gray-200">

                  <h1 className="px-10 py-3">Lil Noun</h1>

                  {!isLoading && (
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
                            min={0}
                            maxLength={4}
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
                  )}

                  {isLoading && (
                    <div className="px-4 py-5 sm:p-6">
                      <p>Loading...</p>
                    </div>
                  )}

                </div>
              </div>
            </section>
          </Content>

          {/*<Footer />*/}
        </div>
      </div>
    </>
  )
}

export default Home
