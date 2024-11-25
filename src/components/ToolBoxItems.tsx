import TechIcon from '@/components/TechIcon'
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

const ToolBoxItems = ({items, className, itemsWrapperClassName}:{
    items: {
        title: string;
        iconType: React.ElementType;
    }[];
    className?: string;
    itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge(`flex mask-image-gradient-horizontal`, className)}>
        <div className={twMerge(`flex flex-none py-0.5 gap-6 pr-6`, itemsWrapperClassName)}>
            {[... new Array(2)].fill(0).map((_, idx)=>( // This duplicates the "items" array, so the scroll effect can repeat.
                <Fragment key={idx}>
                    {items.map((item) =>(
                        <div key={item.title} 
                            className='inline-flex items-center gap-4 py-2 px-3 
                            outline outline-2 outline-white/10 rounded-lg'
                        >
                            <TechIcon component={item.iconType}/>
                            <span className='font-semibold '>{item.title}</span>
                        </div>
                    ))}
                </Fragment>
            ))}
        </div>
    </div>
  )
}

export default ToolBoxItems