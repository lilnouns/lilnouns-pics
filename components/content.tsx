import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function Content(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Lil Nouns</span>{' '}
          <span className="block text-neutral-600 xl:inline">Pics</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Lil Nouns Pics, let you select and download a Lil Nouns picture in various sizes and formats.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        </div>
      </div>

      {props.children}
    </main>
  )
}
