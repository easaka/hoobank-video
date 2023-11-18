import React from 'react'
import { features } from '../constants'
import styles,{layout} from '../styles'
import Button from './Button'

const FeatureCard = ({ icon,title,content,index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0" } feature-card`}  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} `}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain/' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='font-poppins font-normal text-[16px] text-dimWhite leadind-[24px] mb-1'>{content}</p>
    </div>
  </div>
)



const Business = () =>{
  return(
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Lorem, ipsum dolor sit amet {" "}
        <br className='sm:block hidden'/>
        distinctio nam maiores</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea dolorem, fugit accusantium rem enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut soluta est sequi, laudantium voluptatem nulla fuga mollitia rerum nihil provident corrupti commodi, quos velit labore ea ducimus voluptas? Nam, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. A et, beatae dolor voluptatem rerum ab! Est, nisi a ad molestiae quia veritatis dolorum. Expedita, ducimus praesentium alias voluptatibus harum illo.</p>
        <Button styles="mt-10 rounded-[10px]"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
           <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}


export default Business

