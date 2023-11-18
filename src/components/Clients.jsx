import React from 'react'
import {clients } from '../constants'
import styles from '../styles'


const Clients = () =>(
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>(
          <div key={client.id} className={`flex-1 flex justify-center items-center flex-wrap sm:min-w-[192px] min-w-[120px] hover:translate-y-2 hover:translate-x-2`}>
            <img src={client.logo} alt="Logo" className='sm:w-[198px] w-[100px] object-contain' />
          </div>
        ))}
      </div>
    </section>
  )


export default Clients
