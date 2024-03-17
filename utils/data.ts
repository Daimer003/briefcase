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
        description: [
            {
                title: "Automatización de Fechas con Next.js y Chakra UI",
                paragraph: "Next.js: Se empleó el framework de React para desarrollar una aplicación web eficiente y de alto rendimiento. Next.js facilita la creación de aplicaciones de una sola página (SPA) con capacidades de servidor, lo que mejora la experiencia del usuario y la velocidad de carga. Chakra UI: Se implementó Chakra UI como el sistema de diseño y componentes para la interfaz de usuario. Chakra UI proporciona componentes reutilizables y estilos predefinidos que aceleran el desarrollo y garantizan una interfaz coherente y atractiva.",
                technology: [
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<strong>Next.js:</strong> <p> Se empleó el framework de React para desarrollar una aplicación web eficiente y de alto rendimiento. Next.js facilita la creación de aplicaciones de una sola página (SPA) con capacidades de servidor, lo que mejora la experiencia del usuario y la velocidad de carga.</p>",
                    "<strong>Chakra UI:</strong><p>  Se implementó Chakra UI como el sistema de diseño y componentes para la interfaz de usuario. Chakra UI proporciona componentes reutilizables y estilos predefinidos que aceleran el desarrollo y garantizan una interfaz coherente y atractiva.</p>",
                    "<h3>Funcionalidades Principales:</h3>",

                    "<strong>Automatización de Fechas con Archivos XML:</strong> <p> El sistema automatiza el procesamiento de fechas al subir archivos XML, optimizando la eficiencia en la gestión de datos financieros.</p>",
                    "<strong>Forward Date: </strong> <p> La funcionalidad Forward Date se ha integrado como un elemento esencial para cálculos financieros. Permite avanzar en el tiempo de manera automática, facilitando la planificación y ejecución de operaciones financieras.</p>",

                    "<strong>Target DrawDown Ajustable:</strong><p>  Se ha establecido un valor predeterminado de 1000 para Target DrawDown, que representa la reducción máxima esperada en el valor de una cartera de inversión. Este valor es ajustable según las necesidades del usuario, brindando flexibilidad en la configuración de parámetros financieros.</p>",
                    "<strong>Modernización de la Gestión de Datos Financieros:</strong> <p>La aplicación moderniza la gestión de datos financieros al proporcionar una interfaz eficiente y amigable. Los usuarios pueden realizar tareas complejas de manera intuitiva, mejorando la productividad y la toma de decisiones informadas.</p>",

                    "<strong>Objetivo del Proyecto:</strong> <p> El objetivo principal de este proyecto es proporcionar una solución robusta y moderna para la automatización de fechas y la gestión eficiente de datos financieros. La combinación de Next.js y Chakra UI asegura un desarrollo ágil y una experiencia de usuario optimizada.</p>",
                    "<strong>Impacto y Resultados:</strong> <p> La implementación de esta aplicación ha llevado a una mejora significativa en la productividad y precisión en el manejo de datos financieros, ofreciendo a los usuarios una herramienta avanzada para tomar decisiones informadas en el ámbito financiero.</p>",

                ]

            }
        ],
        technologies: [
            {
                id: 1,
                name: "NEXT.JS",
                icon: TbBrandNextjs,
                color: "black",
                site: ""
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray",
                site: "https://fenixforexfx.com/"
            },
        ]
    },
    {
        id: 2,
        title: "App ScentSync",
        imagen: "/assets/projects/scent-sync.webp",
        description: [
            {
                title: "ScentSync con React Native",
                paragraph: "ScentSync, desarrollado en React Native, utiliza algoritmos de sincronización avanzados para personalizar la experiencia del usuario al mapear la interacción entre la piel y las fragancias. La programación reactiva garantiza una interfaz eficiente, convirtiéndolo en un compañero técnico esencial para la exploración personalizada de la armonía entre la piel y las lociones.",
                technology: [
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<strong>React Native:</strong> <p> La aplicación ScentSync ha sido desarrollada utilizando React Native, un marco de desarrollo que permite crear aplicaciones móviles multiplataforma. React Native proporciona eficiencia al compartir código entre plataformas iOS y Android, permitiendo un desarrollo más rápido y una experiencia del usuario consistente.</p>",
                    "<h3>Funcionalidades Principales:</h3>",
                    "<strong>Sincronización Avanzada de Fragancias:</strong> <p>ScentSync utiliza algoritmos de sincronización avanzados para personalizar la experiencia del usuario al mapear la interacción entre la piel y las fragancias. Estos algoritmos permiten una adaptación precisa de las fragancias según las preferencias y características individuales.</p>",
                    "<strong>Programación Reactiva:</strong><p>La aplicación está diseñada con programación reactiva para garantizar una interfaz eficiente y fluida. La programación reactiva permite la actualización automática de la interfaz de usuario en respuesta a cambios en los datos o interacciones del usuario, brindando una experiencia más ágil y receptiva.</p>",
                    "<strong>Exploración Personalizada de la Armonía entre la Piel y las Lociones:</strong><p>ScentSync se presenta como un compañero técnico esencial para la exploración personalizada de la armonía entre la piel y las lociones. Los usuarios pueden descubrir y experimentar con diversas combinaciones de fragancias para lograr una experiencia personalizada y única.</p>",
                ]
            }
        ],
        technologies: [
            {
                id: 1,
                name: "REACT NATIVE",
                icon: FaReact,
                color: "cyan",
                site: ""
            },
            {
                id: 2,
                name: "IOS",
                icon: FaAppStoreIos,
                color: "gray",
                site: ""
            },
            {
                id: 3,
                name: "ANDROID",
                icon: IoLogoAndroid,
                color: "green",
                site: ""
            }
        ]
    }

]

export const projectsInProduction = [
    {
        id: 1,
        title: "Eres Voz",
        imagen: "/assets/projects/eres.webp",
        description: [
            {
                title: "Plataforma Educativa de Canto con Next.js y Chakra UI",
                paragraph: "Esta aplicación web, desarrollada mediante Next.js y Shakra UI, presenta cursos de educación y canto, con especial énfasis en técnicas de manejo vocal. La integración de las APIs de Mercado Pago y PayPal permite la gestión segura y eficiente de las transacciones para la adquisición de los cursos, garantizando una experiencia técnica y funcional para los usuarios.",
                technology: [
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<strong>Next.js:</strong> <p>La aplicación web ha sido desarrollada utilizando Next.js, un framework de React que facilita la creación de aplicaciones web eficientes con capacidades de servidor. Esto permite una navegación fluida y rápida, mejorando la experiencia del usuario.</p>",
                    "<strong>Chakra UI:</strong> <p>La aplicación web ha sido desarrollada utilizando Next.js, un framework de React que facilita la creación de aplicaciones web eficientes con capacidades de servidor. Esto permite una navegación fluida y rápida, mejorando la experiencia del usuario.</p>",
                    "<strong>Mercado Pago y PayPal APIs: </strong> <p>La plataforma utiliza las APIs de Mercado Pago y PayPal para la gestión segura y eficiente de transacciones relacionadas con la adquisición de cursos. Esto garantiza una experiencia técnica y funcional confiable para los usuarios.</p>",

                    "<h3>Funcionalidades Principales:</h3>",
                    "<strong>Cursos de Educación y Canto:</strong> <p>La aplicación presenta una amplia variedad de cursos centrados en educación y canto, con un énfasis especial en técnicas de manejo vocal. Los usuarios pueden acceder a contenido educativo de alta calidad para mejorar sus habilidades vocales.</p>",
                    "<strong>Integración de APIs de Mercado Pago y PayPal:</strong><p>La integración de las APIs de Mercado Pago y PayPal permite a los usuarios realizar transacciones de manera segura y eficiente al adquirir cursos. Esto garantiza un proceso de pago transparente y confiable.</p>",
                ]
            }
        ],
        technologies: [
            {
                id: 1,
                name: "NEXT.JS",
                icon: TbBrandNextjs,
                color: "black",
                site: ""
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray",
                site: ""
            },
        ]
    },
    {
        id: 2,
        title: "Dcorp",
        imagen: "/assets/projects/dcorp.webp",
        paragraph: "Esta landing page, desarrollada con Next.js y Styled Components, exhibe nuestra experiencia en desarrollo web. Next.js garantiza un rendimiento sólido, mientras que Styled Components facilita estilos modulares. Nuestra dedicación a la seguridad y escalabilidad se refleja en una experiencia informativa excepcional, ideal para empresas y comunidades.",
        description: [
            {
                title: "Landing Page de Dcorp - Desarrollo de Software Blockchain con Next.js y Styled Components",
                paragraph: "La implementación de esta landing page ha permitido a Dcorp presentar su experiencia y servicios de manera efectiva en línea. Los visitantes pueden obtener información clave sobre la empresa de manera clara y atractiva. La combinación de Next.js para la eficiencia y Styled Components para el diseño modular ha contribuido a una presencia en línea sólida y profesional para Dcorp.",
                technology: [
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<strong>Next.js:</strong> <p>La landing page ha sido creada utilizando Next.js, un framework de React que proporciona una estructura sólida para el desarrollo de aplicaciones web. Next.js permite la generación de páginas estáticas y dinámicas, mejorando la velocidad de carga y la eficiencia del sitio.</p>",
                    "<strong>Styled Components:</strong> <p>La implementación de Styled Components ha permitido la creación de estilos y componentes de manera más modular y eficiente. Esta biblioteca de CSS en JavaScript facilita el mantenimiento del código y garantiza un diseño coherente y atractivo.</p>",

                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<strong>Página Informativa para Dcorp</strong> <p>La landing page sirve como una fuente informativa sobre Dcorp, destacando su experiencia y servicios especializados en el desarrollo de software blockchain. Proporciona detalles clave sobre la empresa, su visión y los beneficios de sus soluciones.</p>",
                    "<strong>Diseño Responsivo con Styled Components:</strong><p>La implementación de Styled Components asegura un diseño responsivo y estilos consistentes en toda la landing page. Esto proporciona una experiencia visual atractiva y coherente para los visitantes en diferentes dispositivos y tamaños de pantalla.</p>",]
            }
        ],
        technologies: [
            {
                id: 1,
                name: "NEXT.JS",
                icon: TbBrandNextjs,
                color: "black",
                site: ""
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray",
                site: ""
            },
        ]
    },
    {
        id: 3,
        title: "Kryptopia",
        imagen: "/assets/projects/kryptopia.webp",
        description: [
            {
                title: "Landing Page de Kryptopia - Software Pasarela de Pago Descentralizado con Next.js y Styled Components",
                paragraph: "La implementación de esta landing page ha permitido a Kryptopia comunicar de manera efectiva su visión y servicios, especialmente enfocados en la descentralización de los pagos en criptomonedas. La combinación de Next.js para la eficiencia y Styled Components para el diseño modular ha contribuido a una presencia en línea sólida y atractiva para Kryptopia.",
                technology: [
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<strong>Next.js:</strong> <p>La landing page ha sido creada utilizando Next.js, un framework de React que proporciona una estructura sólida para el desarrollo de aplicaciones web. Next.js permite la generación de páginas estáticas y dinámicas, mejorando la velocidad de carga y la eficiencia del sitio.</p>",
                    "<strong>Styled Components:</strong> <p>La implementación de Styled Components ha permitido la creación de estilos y componentes de manera más modular y eficiente. Esta biblioteca de CSS en JavaScript facilita el mantenimiento del código y garantiza un diseño coherente y atractivo.</p>",

                    "<h3>Funcionalidades Principales:</h3>",
                    "<strong>Presentación de Kryptopia:</strong> <p>La landing page sirve como una plataforma informativa para Kryptopia, destacando su software de pasarela de pago descentralizado. Proporciona información detallada sobre cómo Kryptopia busca desempeñar un papel crucial en la descentralización de los pagos en criptomonedas.</p>",
                    "<strong>Fomento de la Adopción en Comercios</strong><p>Se destaca el objetivo principal del software: fomentar la adopción de pagos en criptomonedas entre los comercios. La página resalta los beneficios y la facilidad de integración que Kryptopia ofrece a los comerciantes interesados en adoptar métodos de pago cripto.                    </p>",
                    "<strong>Diseño Responsivo con Styled Components:</strong><p>La implementación de Styled Components asegura un diseño responsivo y atractivo en toda la landing page. Esto garantiza una experiencia visual coherente y agradable para los visitantes, independientemente del dispositivo que utilicen.</p>",
                ]
            }
        ],
        technologies: [
            {
                id: 1,
                name: "NEXT.JS",
                icon: TbBrandNextjs,
                color: "black",
                site: ""
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray",
                site: ""
            },
        ]
    },
    {
        id: 4,
        title: "Colegio la Fontaine",
        imagen: "/assets/projects/colegiof.webp",
        paragraph: "Colegio La Fontaine fue fundado en 2016 por un equipo de cuatro personas, dos de ellos hermanos- Adarley y Lilibeydy Manrique- quienes crecieron en Siloé y vieron en la educación una herramienta de empoderamiento para transformar su realidad y construir un proyecto de vida...",
        description: [
            {
                title: "ScentSync con React Native",
                paragraph: "ScentSync, desarrollado en React Native, utiliza algoritmos de sincronización avanzados para personalizar la experiencia del usuario al mapear la interacción entre la piel y las fragancias. La programación reactiva garantiza una interfaz eficiente, convirtiéndolo en un compañero técnico esencial para la exploración personalizada de la armonía entre la piel y las lociones.",
                technology: [
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<strong>React Native:</strong> <p> La aplicación ScentSync ha sido desarrollada utilizando React Native, un marco de desarrollo que permite crear aplicaciones móviles multiplataforma. React Native proporciona eficiencia al compartir código entre plataformas iOS y Android, permitiendo un desarrollo más rápido y una experiencia del usuario consistente.</p>",
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<strong>Sincronización Avanzada de Fragancias:</strong> <p>ScentSync utiliza algoritmos de sincronización avanzados para personalizar la experiencia del usuario al mapear la interacción entre la piel y las fragancias. Estos algoritmos permiten una adaptación precisa de las fragancias según las preferencias y características individuales.</p>",
                    "<strong>Programación Reactiva:</strong><p>La aplicación está diseñada con programación reactiva para garantizar una interfaz eficiente y fluida. La programación reactiva permite la actualización automática de la interfaz de usuario en respuesta a cambios en los datos o interacciones del usuario, brindando una experiencia más ágil y receptiva.</p>",
                    "<strong>Exploración Personalizada de la Armonía entre la Piel y las Lociones:</strong><p>ScentSync se presenta como un compañero técnico esencial para la exploración personalizada de la armonía entre la piel y las lociones. Los usuarios pueden descubrir y experimentar con diversas combinaciones de fragancias para lograr una experiencia personalizada y única.</p>",
                ]
            }
        ],
        technologies: [
            {
                id: 1,
                name: "NEXT.JS",
                icon: TbBrandNextjs,
                color: "black",
                site: ""
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray",
                site: ""
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


export const profiles = [
    {
        id: 1,
        profile: "CEO - Director Ejecutivo"
    },
    {
        id: 2,
        profile: "Full-Stack"
    },
    {
        id: 3,
        profile: "Front-End"
    },
    {
        id: 4,
        profile: "Back-End"
    },
    {
        id: 5,
        profile: "Ingeniero/a de Software"
    },
    {
        id: 6,
        profile: "Arquitecto/a de Software"
    },
    {
        id: 7,
        profile: "DevOps"
    },
    {
        id: 8,
        profile: "Especialista en SRE"
    },
    {
        id: 9,
        profile: "Ciberseguridad"
    },
    {
        id: 10,
        profile: "Analista de Seguridad"
    },
    {
        id: 11,
        profile: "Ciencia de Datos"
    },
    {
        id: 12,
        profile: "Diseñador/a UX/UI"
    },
    {
        id: 13,
        profile: "Analista de Negocios"
    },
    {
        id: 14,
        profile: "Marketing Digital"
    },
    {
        id: 15,
        profile: "Gerente de Proyecto"
    },
    {
        id: 16,
        profile: "Analista de Negocios"
    },
]

export const avatars = [
    {
        id: 1,
        imagen: "/assets/avatars/j-1.webp"
    },
    {
        id: 2,
        imagen: "/assets/avatars/j-2.webp"
    },
    {
        id: 3,
        imagen: "/assets/avatars/j-3.webp"
    },
    {
        id: 4,
        imagen: "/assets/avatars/j-4.webp"
    },
    {
        id: 5,
        imagen: "/assets/avatars/j-5.webp"
    },
    {
        id: 6,
        imagen: "/assets/avatars/j-6.webp"
    },
    {
        id: 7,
        imagen: "/assets/avatars/j-7.webp"
    },
    {
        id: 8,
        imagen: "/assets/avatars/j-8.webp"
    },
    {
        id: 9,
        imagen: "/assets/avatars/j-9.webp"
    },
    {
        id: 10,
        imagen: "/assets/avatars/j-10.webp"
    },
    {
        id: 11,
        imagen: "/assets/avatars/j-11.webp"
    },
    {
        id: 12,
        imagen: "/assets/avatars/j-12.webp"
    },
    {
        id: 13,
        imagen: "/assets/avatars/v-12.webp"
    },
    {
        id: 14,
        imagen: "/assets/avatars/v-13.webp"
    },
    {
        id: 15,
        imagen: "/assets/avatars/v-14.webp"
    },
    {
        id: 16,
        imagen: "/assets/avatars/v-15.webp"
    },
    {
        id: 17,
        imagen: "/assets/avatars/v-16.webp"
    },
    {
        id: 18,
        imagen: "/assets/avatars/v-17.webp"
    },
]