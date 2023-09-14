import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


const PromptLoading = () => {
  return (
    <SkeletonTheme baseColor="lightgray" width={360} height={150}>
      <div className='prompt_card'>
        <div className='flex justify-between items-start gap-5'>
          <div className='flex-1 flex justify-start gap-3'>
            <Skeleton 
              width={40} 
              height={40} 
              circle 
            />
            <div className='flex flex-col'>
              <Skeleton 
                width={158} 
                height={24} 
              />
              <Skeleton 
                width={170}
                height={24} 
              />
            </div>
          </div>

          <Skeleton 
            containerClassName="rounded-full" 
            width={'1.7rem'} 
            height={'1.7rem'} 
            circle 
          />
        </div>
        <Skeleton 
          width={300}
          height={80}
          style={{ margin: '16px 0 16px 0' }}
        />
        <Skeleton 
          width={150}
          height={20}
        />
      </div>
    </SkeletonTheme>
  )
}

export default PromptLoading