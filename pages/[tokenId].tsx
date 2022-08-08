import {useEffect, useState} from "react";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import Image from "next/image";
import {RadioGroup, Switch} from "@headlessui/react";
import Head from "next/head";

const mimeOptions = [
  {name: 'SVG', value: 'svg'},
  {name: 'PNG', value: 'png'},
  {name: 'JPG', value: 'jpeg'},
  {name: 'WebP', value: 'webp'},
]

const sizeOptions = [
  {name: '256', value: 256},
  {name: '512', value: 512},
  {name: '1024', value: 1024},
  {name: '2048', value: 2048},
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.MAIN_PRIVATE_API_URL}/nouns`);

  const range = response.headers.get('content-range')
  const count = range?.split('/')[1] as unknown as number;

  const paths = Array.from({length: count}, (_, k) => k)
    .filter(tokenId => tokenId !== 404 && tokenId !== 500)
    .map((tokenId) => ({params: {tokenId: `${tokenId}`},}));

  return ({
    paths,
    fallback: false, // can also be true or 'blocking'
  });
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const tokenId = context.params!.tokenId;

  if (!tokenId) return {notFound: true};

  return ({
    props: {tokenId},
  });
};

const Noun = ({tokenId}: { tokenId: string }) => {
  const [image, setImage] = useState<any>({})
  const [isLoading, setLoading] = useState(false)

  const [mime, setMime] = useState(mimeOptions[0])
  const [size, setSize] = useState(sizeOptions[0])
  const [back, setBack] = useState(true)

  useEffect(() => {
    fetchImage(tokenId)
  }, [tokenId])

  const fetchImage = (tokenId: string, size?: number, mime?: string, back: boolean = true) => {
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/nouns/${tokenId}/images`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({size, mime, back})
    })
      .then((res) => res.json())
      .then((data) => {
        const {data: {image}} = data;
        setImage(image)
        setLoading(false)
      })
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

            <h1 className="px-10 py-3">{mime.name} - {size.name} - {back ? 'Normal' : 'Transparent'}</h1>

            <div className="p-10">
              <a
                href={image.body}
                download={`noun-${tokenId}@${image.size}`}
              >
                <Image
                  alt={""}
                  src={!isLoading ? image.body : "/assets/images/lil-loading-skull.gif"}
                  width={256}
                  height={256}
                  className="border border-neutral-300 rounded-md"
                />
              </a>
            </div>

            <div className="px-10 py-3">
              <RadioGroup value={mime} onChange={setMime} className="mt-2">
                <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {mimeOptions.map((option) => (
                    <RadioGroup.Option
                      key={option.name}
                      value={option}
                      className={({active, checked}) =>
                        classNames(
                          active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                          checked
                            ? 'bg-zinc-200 border-transparent text-natural-800 opacity-50 hover:bg-zinc-300'
                            : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                          'border border-neutral-300 rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                        )
                      }
                    >
                      <RadioGroup.Label as="p">{option.name}</RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="px-10 py-3">
              <RadioGroup value={size} onChange={setSize} className="mt-2">
                <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {sizeOptions.map((option) => (
                    <RadioGroup.Option
                      key={option.name}
                      value={option}
                      className={({active, checked}) =>
                        classNames(
                          active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                          checked
                            ? 'bg-zinc-200 border-transparent text-natural-800 opacity-50 hover:bg-zinc-300'
                            : 'bg-white border-gray-200 text-neutral-800 hover:bg-gray-50',
                          'border border-neutral-300 rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                        )
                      }
                    >
                      <RadioGroup.Label as="p">{option.name}</RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="px-10 py-3">
              <Switch.Group as="div" className="flex items-center">
                <Switch
                  checked={back}
                  onChange={setBack}
                  className={classNames(
                    back ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      back ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                  />
                </Switch>
                <Switch.Label as="span" className="ml-3">
                  <span className="text-sm font-medium text-gray-900">Background</span>
                </Switch.Label>
              </Switch.Group>
            </div>

            <div className="px-10 py-3">
              <button
                onClick={() => fetchImage(tokenId, size.value, mime.value, back)}
                type="submit"
                className="mt-2 w-full bg-zinc-200 border border-neutral-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-neutral-800 opacity-50 hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-zinc-500"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Noun
