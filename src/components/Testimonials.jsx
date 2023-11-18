import React from 'react'
import { feedback } from '../constants'
import styles from '../styles'
import FeedbackCard from './FeedbackCard'
const Testimonial = () =>(
    <section id='client' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          Lorem ipsum dolor <br className='sm:block hidden' /> sit amet.
        </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[420px]`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, perferendis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis neque iure corrupti ullam, repellendus vitae, cum voluptatibus maxime eum sint, officia illo. Provident non vitae earum natus, assumenda esse neque.</p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start w-full feedback-container relative z-[1]'>
          {feedback.map((card)=>(
            <FeedbackCard key={card.id} {...card}/>
          ))}
      </div>
    </section>
  )


export default Testimonial
