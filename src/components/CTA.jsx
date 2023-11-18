import React from 'react'
import styles from '../styles'
import Button from './Button'


const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>
          Let's Try our service now!
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, tenetur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae totam enim dolore ratione debitis rem, 
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates autem, dolorum repellendus dolorem ducimus temporibus deserunt! Itaque dignissimos dolorum dolores numquam corrupti in! Debitis nam sint molestias placeat aut est. */}
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles={`rounded-[20px]`}/>
      </div>
    </section>
)

export default CTA
