import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react"

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable"
]

const Tape = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        {/* Custom plugin was created in tailwind.config.js to be able to use mask-image-gradient-horizontal */}
        <div className="flex mask-image-gradient-horizontal">
          {/* Since gap-4 adds 16px between the words, pr-4 adds 16px between the duplicated arrays. 
          This is important for the scroll effect. */}
          <div className=" flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[... new Array(2)].fill(0).map((_, idx)=>( // This duplicates our "Words" array, so the scroll effect can repeat.
              <Fragment key={idx}>
                {words.map((word)=>(
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className ="size-6 text-gray-900 -rotate-12"/>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tape