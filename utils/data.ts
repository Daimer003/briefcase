import { FaReact } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { BiLogoVisualStudio } from "react-icons/bi";
import { IoHardwareChip } from "react-icons/io5";
import { SiArduino } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAstro } from "react-icons/si";

// import { BiLogoJavascript } from "react-icons/bi";
import { GiWireframeGlobe } from "react-icons/gi";



export const ongoingProjects = [
   
    {
        id: 2,
        title: "App Kluby",
        imagen: "/assets/projects/app-kluby.webp",
        description: [
            {
                title: "Kluby con React Native",
                paragraph: "La aplicación Kluby ha sido desarrollada utilizando React Native con Expo, un marco que permite crear aplicaciones móviles multiplataforma. React Native proporciona eficiencia al compartir código entre plataformas iOS y Android, lo que facilita un desarrollo ágil y una experiencia de usuario consistente. Kluby permite a las personas ver los eventos de diferentes clubes y crear sus propios eventos para informar a otros sobre estas actividades.",
                technology: [
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<h3>Funcionalidades Principales:</h3>",
                    "<strong>Programación Reactiva:</strong><p>La aplicación está diseñada con programación reactiva para garantizar una interfaz eficiente y fluida. La programación reactiva permite la actualización automática de la interfaz de usuario en respuesta a cambios en los datos o interacciones del usuario, brindando una experiencia más ágil y receptiva.</p>",
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
    },
    {
        id: 2,
        title: "Code Watch",
        imagen: "/assets/projects/extension.webp",
        description: [
            {
                title: "Code Watch ESP32",
                paragraph: "🔧 ESP32 Code Optimizer: A groundbreaking project that transforms the ESP32 into an interactive coding assistant. It monitors your code, evaluates its efficiency, and provides instant feedback with every save. Designed to boost productivity, ensure cleaner code, and foster continuous learning. 🚀",
                technology: [
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<h3>Funcionalidades Principales:</h3>",
                    "<strong>ESP32:</strong><p>Microcontrolador principal para manejar la comunicación y el procesamiento de datos.</p>",
                    "<strong>LED y Pantalla TFT:</strong><p>Elementos visuales para mostrar información y responder a eventos.</p>",
                ]
            }
        ],
        technologies: [
            {
                id: 1,
                name: "HARDWARE",
                icon: IoHardwareChip ,
                color: "cyan",
                site: ""
            },
            {
                id: 2,
                name: "ARDUINO",
                icon: SiArduino,
                color: "green",
                site: ""
            },
            {
                id: 3,
                name: "VS Code API",
                icon:  BiLogoVisualStudio ,
                color: "blue",
                site: ""
            }
        ]
    }

]

export const projectsInProduction = [
    {
        id: 1,
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
                site: "http://nextjs.org/"
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray",
                site: "https://landing-kryptopia.vercel.app/"
            },
        ]
    },
    {
        id: 2,
        title: "Partneo",
        imagen: "/assets/projects/partneo.webp",
        paragraph: "Esta landing page, desarrollada con Next.js y Styled Components, exhibe nuestra experiencia en desarrollo web. Next.js garantiza un rendimiento sólido, mientras que Styled Components facilita estilos modulares. Nuestra dedicación a la seguridad y escalabilidad se refleja en una experiencia informativa excepcional, ideal para empresas y comunidades.",
        description: [
            {
                title: "Landing Page de Partneo - Desarrollo de Software Blockchain con Next.js y Styled Components",
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
                site: "https://nextjs.org/"
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray",
                site: "https://www.partneo.io/"
            },
        ]
    },
    {
        id: 3,
        title: "I Buy Orlando",
        imagen: "/assets/projects/i-buy-orlando.webp",
        paragraph: "Este proyecto, desarrollado con Astro, facilita la venta de propiedades de forma eficiente y personalizada. Ayuda a los propietarios a encontrar soluciones adaptadas a sus necesidades, ya sea una venta rápida o explorando otras opciones. Con un diseño moderno, rendimiento optimizado e interfaz intuitiva, destaca como un ejemplo de aplicaciones web centradas en el usuario y tecnologías modernas.",
        description: [
            {
                title: "I Buy Orlando con Next.js",
                paragraph: "Este proyecto, desarrollado con Astro, facilita la venta de propiedades de forma eficiente y personalizada. Ayuda a los propietarios a encontrar soluciones adaptadas a sus necesidades, ya sea una venta rápida o explorando otras opciones. Con un diseño moderno, rendimiento optimizado e interfaz intuitiva, destaca como un ejemplo de aplicaciones web centradas en el usuario y tecnologías modernas.",
                technology: [
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<strong>Astro.js:</strong> <p> La aplicación ha sido desarrollada utilizando Astro.js.</p>",
                    "<h3>Tecnologías Utilizadas:</h3>",
                    "<strong>Programación Reactiva:</strong><p>La aplicación está diseñada con programación reactiva para garantizar una interfaz eficiente y fluida. La programación reactiva permite la actualización automática de la interfaz de usuario en respuesta a cambios en los datos o interacciones del usuario, brindando una experiencia más ágil y receptiva.</p>",                ]
            }
        ],
        technologies: [
            {
                id: 1,
                name: "ASTRO.JS",
                icon: SiAstro ,
                color: "black",
                site: "https://astro.build/themes/"
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "red",
                site: "https://ibuyinorlando.com/"
            },
        ]
    },
    {
        id: 4,
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
                site: "https://nextjs.org/"
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
        id: 5,
        title: "Remitt",
        imagen: "/assets/projects/remitt.webp",
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
                site: "https://nextjs.org/"
            },
            {
                id: 2,
                name: "SITIO WEB",
                icon: GiWireframeGlobe,
                color: "gray",
                site: "https://frontend.ccorp.lat/"
            },
        ]
    },
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
    {
        id: 17,
        profile: "Coordinadora administrativa"
    }
]

export const avatars = [
    {
        id: 1,
        imagen: "/assets/avatars/j-1.webp",
        color: "orange"
    },
    {
        id: 2,
        imagen: "/assets/avatars/j-2.webp",
        color: "yellow"
    },
    {
        id: 3,
        imagen: "/assets/avatars/j-3.webp",
        color: "green"
    },
    {
        id: 4,
        imagen: "/assets/avatars/j-4.webp",
        color: "teal"
    },
    {
        id: 5,
        imagen: "/assets/avatars/j-5.webp",
        color: "yellow"
    },
    {
        id: 6,
        imagen: "/assets/avatars/j-6.webp",
        color: "cyan"
    },
    {
        id: 7,
        imagen: "/assets/avatars/j-7.webp",
        color: "purple"
    },
    {
        id: 8,
        imagen: "/assets/avatars/j-8.webp",
        color: "pink"
    },
    {
        id: 9,
        imagen: "/assets/avatars/j-9.webp",
        color: "pink"
    },
    {
        id: 10,
        imagen: "/assets/avatars/j-10.webp",
        color: "yellow"
    },
    {
        id: 11,
        imagen: "/assets/avatars/j-11.webp",
        color: "teal"
    },
    {
        id: 12,
        imagen: "/assets/avatars/j-12.webp",
        color: "pink"
    },
    {
        id: 13,
        imagen: "/assets/avatars/v-12.webp",
        color: "Orange"
    },
    {
        id: 14,
        imagen: "/assets/avatars/v-13.webp",
        color: "Orange"
    },
    {
        id: 15,
        imagen: "/assets/avatars/v-14.webp",
        color: "purple"
    },
    {
        id: 16,
        imagen: "/assets/avatars/v-15.webp",
        color: "Orange"
    },
    {
        id: 17,
        imagen: "/assets/avatars/v-16.webp",
        color: "white"
    },
    {
        id: 18,
        imagen: "/assets/avatars/v-17.webp",
        color: "yellow"
    },
]