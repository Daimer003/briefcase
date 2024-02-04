import { FaReact } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

import { TbBrandNextjs } from "react-icons/tb";
// import { BiLogoJavascript } from "react-icons/bi";
import { GiWireframeGlobe } from "react-icons/gi";



export const ongoingProjects = [
    {
        id: 1,
        title: "Portafolio Finder",
        imagen: "/assets/projects/portafoliofinder.webp",
        paragraph: "Este proyecto, con Next.js y Chakra UI, automatiza fechas al subir archivos XML. La Forward Date es esencial para cálculos, y el Target DrawDown predeterminado es 1000, ajustable. Moderniza la gestión de datos financieros con interfaz eficiente.",
        technologies: [
            {
                id: 1,
                name: "NEXT.JS",
                icon: TbBrandNextjs,
                color: "black"
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray"
            },
        ]
    },
    {
        id: 2,
        title: "App ScentSync",
        imagen: "/assets/projects/scent-sync.webp",
        paragraph: "ScentSync, desarrollado en React Native, utiliza algoritmos de sincronización avanzados para personalizar la experiencia del usuario al mapear la interacción entre la piel y las fragancias. La programación reactiva garantiza una interfaz eficiente, convirtiéndolo en un compañero técnico esencial para la exploración personalizada de la armonía entre la piel y las lociones.",
        technologies: [
            {
                id: 1,
                name: "REACT NATIVE",
                icon: FaReact,
                color: "cyan"
            },
            {
                id: 2,
                name: "IOS",
                icon: FaAppStoreIos,
                color: "gray"
            },
            {
                id: 3,
                name: "ANDROID",
                icon: IoLogoAndroid,
                color: "green"
            }
        ]
    }

]

export const projectsInProduction = [
    {
        id: 1,
        title: "Eres Voz",
        imagen: "/assets/projects/eres.webp",
        paragraph: "Esta aplicación web, desarrollada mediante Next.js y Shakra UI, presenta cursos de educación y canto, con especial énfasis en técnicas de manejo vocal. La integración de las APIs de Mercado Pago y PayPal permite la gestión segura y eficiente de las transacciones para la adquisición de los cursos, garantizando una experiencia técnica y funcional para los usuarios.",
        technologies: [
            {
                id: 1,
                name: "NEXT.JS",
                icon: TbBrandNextjs,
                color: "black"
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray"
            },
        ]
    },
    {
        id: 2,
        title: "Dcorp",
        imagen: "/assets/projects/dcorp.webp",
        paragraph: "Esta landing page, desarrollada con Next.js y Styled Components, exhibe nuestra experiencia en desarrollo web. Next.js garantiza un rendimiento sólido, mientras que Styled Components facilita estilos modulares. Nuestra dedicación a la seguridad y escalabilidad se refleja en una experiencia informativa excepcional, ideal para empresas y comunidades.",
        technologies: [
            {
                id: 1,
                name: "NEXT.JS",
                icon: TbBrandNextjs,
                color: "black"
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray"
            },
        ]
    },
    {
        id: 3,
        title: "Kryptopia",
        imagen: "/assets/projects/kryptopia.webp",
        paragraph: "Esta landing page, desarrollada con Next.js y Styled Components, exhibe nuestra experiencia en desarrollo web.Next.js garantiza un rendimiento sólido, mientras que Styled Components facilita estilos modulares.Nuestra dedicación a la seguridad y escalabilidad se refleja en una experiencia informativa excepcional, ideal para empresas y comunidades.",
        technologies: [
            {
                id: 1,
                name: "NEXT.JS",
                icon: TbBrandNextjs,
                color: "black"
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray"
            },
        ]
    },
    {
        id: 4,
        title: "Colegio la Fontaine",
        imagen: "/assets/projects/colegiof.webp",
        paragraph: "Colegio La Fontaine fue fundado en 2016 por un equipo de cuatro personas, dos de ellos hermanos- Adarley y Lilibeydy Manrique- quienes crecieron en Siloé y vieron en la educación una herramienta de empoderamiento para transformar su realidad y construir un proyecto de vida...",
        technologies: [
            {
                id: 1,
                name: "NEXT.JS",
                icon: TbBrandNextjs,
                color: "black"
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray"
            },
        ]
    }

]

export const technologies = [
    {
        id: 1,
        name: "React.Js",
        icon: "/assets/technologies/react.webp",
        color: "teal"
    },
    {
        id: 2,
        name: "Next.Js",
        icon: "/assets/technologies/next.webp",
        color: "white"
    },
    {
        id: 3,
        name: "Javascript",
        icon: "/assets/technologies/javascript.webp",
        color: "yellow"
    },
    {
        id: 4,
        name: "Git",
        icon: "/assets/technologies/git.webp",
        color: "orange"
    },
    {
        id: 5,
        name: "Posman",
        icon: "/assets/technologies/posman.webp",
        color: "red"
    },
    {
        id: 6,
        name: "MetaMask",
        icon: "/assets/technologies/metamask.webp",
        color: "orange"
    },
    {
        id: 7,
        name: "WalletConnect",
        icon: "/assets/technologies/walletconnect.webp",
        color: "blue"
    },
    {
        id: 8,
        name: "Ethereum",
        icon: "/assets/technologies/ether.webp",
        color: "gray"
    },
    {
        id: 9,
        name: "Html & Css",
        icon: "/assets/technologies/html-css.webp",
        color: "gray"
    },
    {
        id: 10,
        name: "Chakra",
        icon: "/assets/technologies/chakra.webp",
        color: "teal"
    },
    {
        id: 11,
        name: "Openai",
        icon: "/assets/technologies/gpt.webp",
        color: "white"
    },
    {
        id: 12,
        name: "React Native",
        icon: "/assets/technologies/react.webp",
        color: "cyan"
    },
    {
        id: 13,
        name: "Vue.Js",
        icon: "/assets/technologies/vue.webp",
        color: "green"
    },
    {
        id: 14,
        name: "Sass",
        icon: "/assets/technologies/sass.webp",
        color: "pink"
    },
    {
        id: 15,
        name: "Astro",
        icon: "/assets/technologies/astro.webp",
        color: "purple"
    },
    {
        id: 16,
        name: "Docker",
        icon: "/assets/technologies/docker.webp",
        color: "blue"
    },
]

