import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const FormLoading = () => {
  return (
    <SkeletonTheme baseColor="lightgray">
      <section className="w-full max-x-full flex-start flex-col">
        <h1 className="text-left">
          <Skeleton
            width={260}
            height={80}
          />
        </h1>
        <div className='mt-5'>
          <Skeleton
            width={672}
            height={56}
          />
        </div>
        <div className="w-full mt-10 max-w-2xl flex flex-col gap-7 glassmorphism">
          <Skeleton
            width={110}
            height={20}
          />
          <Skeleton
            width={630}
            height={200}
          />
          <Skeleton
            width={300}
            height={20}
          />
          <Skeleton
            width={630}
            height={44}
          />

          <div className="flex-end mx-3 mb-5 gap-4">
            <Skeleton
              width={63}
              height={32}
              borderRadius={20}
            />
            <Skeleton
              width={63}
              height={32}
              borderRadius={20}
            />
          </div>
        </div>
      </section>
    </SkeletonTheme>
  )
}

export default FormLoading