import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Profile from '@/components/smallComponents/profile'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}


export default function Home() {

  useEffect(() => {
    const añoActual = new Date().getFullYear();
    const ultimoDiaMes = new Date(2024, 2, 0).getDate();

    // Función para determinar si un año es bisiesto
    function esBisiesto(año: any) {
      console.log(año)
      return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
    }

    // Calcular el total de días en el año actual
    const totalDias = esBisiesto(añoActual) ? 366 : 365;
    console.log(`El año ${añoActual} tiene un total de ${totalDias} días.`);
  }, [])



  return (
    <>
      <Head>
        <title>Daymer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          <Profile />
        </motion.div>
      </Box>
    </>
  )
}
