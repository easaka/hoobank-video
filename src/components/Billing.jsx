import React from 'react'
import styles,{layout} from '../styles'
import { apple,google,bill } from '../assets/assets'

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='Billing'  className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='abosolte z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='abosolte z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient'/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Lorem ipsum dolor sit
        <br className='sm:block hidden' /> adipisicing elit.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore voluptas vero voluptates facilis praesentium quisquam suscipit ratione, veritatis minus sit perspiciatis animi aspernatur officiis quo enim deleniti laborum quia?
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple" className='object-contain w-[128px] h-[42px] mr-5 cursor-pointer' />
          <img src={google} alt="google" className='object-contain w-[128px] h-[42px] cursor-pointer' />
        </div>
      </div>
    </section>
  )


export default Billing
