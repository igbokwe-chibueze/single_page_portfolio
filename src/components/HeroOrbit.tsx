import StarIcon from '@/assets/icons/star.svg'
import { PropsWithChildren } from 'react'


const HeroOrbit = ({children, size, rotation}: PropsWithChildren <{size: number; rotation: number}>) => {
  return (
    <>
      {/* handles centering */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        {/* handles orbit */}
        <div className=" flex items-start justify-start" 
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {/* handles rotation on axis */}
          <div 
            className='inline-flex'
            style={{
              transform: `rotate(${rotation * -1}deg)` // rotates the child in the oposite direction of its parent
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroOrbit