import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';


const HeroOrbit = ({
  children, 
  size, 
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration
}: PropsWithChildren <{
    size: number; 
    rotation: number; 
    shouldOrbit:boolean; orbitDuration?: string;
    shouldSpin?:boolean; spinDuration?: string;
  }>) => {

  return (
    <>
      {/* handles centering */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className={twMerge(shouldOrbit === true && 'animate-spin')} style={{animationDuration: orbitDuration}}>
          {/* handles orbit */}
          <div className=" flex items-start justify-start" 
            style={{
              height: `${size}px`,
              width: `${size}px`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div className={twMerge(shouldSpin === true && 'animate-spin')} style={{animationDuration: spinDuration}}>
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
        </div>
      </div>
    </>
  )
}

export default HeroOrbit