// import React from 'react'
// import Progressbar from './component/Progressbar'

// const Progress = () => {
//     const progress=[0,14,2,12,8,10,20,30,40,50,70,90]
//   return (
//     <div>
//         {
//             progress.map((pr)=>(
//                 <Progressbar key={pr} progress={pr}/>
//             ))
//         }
//     </div>
//   )
// }

// export default Progress

import React from 'react'
import Progressbar from './component/Progressbar'

const Progress = () => {
  const progress=[0,14,2,12,8,10,20,30,40,50,70,90]
  return (
    <div>
        {
          progress.map((pr)=>(
             <Progressbar key={pr} progress={pr}/>
          ))
        }
    </div>
  )
}

export default Progress

