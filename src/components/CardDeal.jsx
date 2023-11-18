import React from 'react'
import Button from './Button'
import styles,{layout} from '../styles'
import { card } from '../assets/assets'

const CardDeals = () => (
<section className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Lorem ipsum dolor {" "} <br className='sm:block hidden'/>sit amet.</h2>
    <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio modi molestias iure eveniet? Ex, rerum! Mollitia, inventore molestiae ullam quae quidem consectetur temporibus, deleniti officiis nihil eaque explicabo similique?</p>
    <Button styles="mt-10 rounded-[10px]"/>
  </div>

  <div className={layout.sectionImg}>
    <img src={card} alt="card" className='w-[100%] h-[100%]' />
  </div>
</section>
)


export default CardDeals
