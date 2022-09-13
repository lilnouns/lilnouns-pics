import {Fragment, useEffect, useState} from "react";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import Image from "next/image";
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import {Listbox, Switch, Transition} from "@headlessui/react";
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

const moodOptions = [
  {name: 'Natural', value: ''},
  // {name: 'Aggravated', value: 'aggravated'},
  {name: 'Angry', value: 'angry'},
  {name: 'Asleep', value: 'asleep'},
  // {name: 'Crying', value: 'crying'},
  {name: 'Glad', value: 'glad'},
  // {name: 'Glance Down', value: 'glance-down'},
  {name: 'Glance Up', value: 'glance-up'},
  {name: 'Happy', value: 'happy'},
  // {name: 'Sad', value: 'sad'},
  {name: 'Sleepy', value: 'sleepy'},
  // {name: 'Sus', value: 'sus'},
  {name: 'Wink', value: 'wink'},
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
  const [mood, setMood] = useState(moodOptions[0])

  useEffect(() => {
    fetchImage(tokenId)
  }, [tokenId])

  const fetchImage = (tokenId: string, size?: number, mime?: string, back: boolean = true, mood: string = '') => {
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/nouns/${tokenId}/images`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({size, mime, back, mood})
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

            <h1 className="px-10 py-3">{mime.name} - {size.name} - {back ? 'Normal' : 'Transparent'} - {mood.name}</h1>

            <div className="grid grid-cols-10">
              <div className="col-span-10 sm:col-span-5">
                <div className="px-10 py-10">
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
              </div>

              <div className="col-span-10 sm:col-span-5">
                <div className="py-10 px-10">
                  <Listbox value={mime} onChange={setMime}>
                    {({open}) => (
                      <>
                        <Listbox.Label className="block text-sm font-medium text-gray-700">Type</Listbox.Label>
                        <div className="mt-1 relative">
                          <Listbox.Button
                            className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span className="block truncate">{mime.name}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options
                              className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                              {mimeOptions.map((option) => (
                                <Listbox.Option
                                  key={option.name}
                                  className={({active}) =>
                                    classNames(
                                      active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                      'cursor-default select-none relative py-2 pl-3 pr-9'
                                    )
                                  }
                                  value={option}
                                >
                                  {({selected, active}) => (
                                    <>
                                      <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                        {option.name}
                                      </span>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>

                  <Listbox value={size} onChange={setSize}>
                    {({open}) => (
                      <>
                        <Listbox.Label className="mt-3 block text-sm font-medium text-gray-700">Size</Listbox.Label>
                        <div className="mt-1 relative">
                          <Listbox.Button
                            className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span className="block truncate">{size.name}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options
                              className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                              {sizeOptions.map((option) => (
                                <Listbox.Option
                                  key={option.name}
                                  className={({active}) =>
                                    classNames(
                                      active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                      'cursor-default select-none relative py-2 pl-3 pr-9'
                                    )
                                  }
                                  value={option}
                                >
                                  {({selected, active}) => (
                                    <>
                                      <span
                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                        {option.name}
                                      </span>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>

                  <Listbox value={mood} onChange={setMood}>
                    {({open}) => (
                      <>
                        <Listbox.Label className="mt-3 block text-sm font-medium text-gray-700">Mood</Listbox.Label>
                        <div className="mt-1 relative">
                          <Listbox.Button
                            className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span className="block truncate">{mood.name}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options
                              className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                              {moodOptions.map((option) => (
                                <Listbox.Option
                                  key={option.name}
                                  className={({active}) =>
                                    classNames(
                                      active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                      'cursor-default select-none relative py-2 pl-3 pr-9'
                                    )
                                  }
                                  value={option}
                                >
                                  {({selected, active}) => (
                                    <>
                                      <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                        {option.name}
                                      </span>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active ? 'text-white' : 'text-indigo-600',
                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>

                  <Switch.Group as="div" className="mt-3 flex items-center">
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
              </div>

            </div>
            <div className="p-3 w-full">
              <button
                disabled={isLoading}
                onClick={() => fetchImage(tokenId, size.value, mime.value, back, mood.value)}
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
