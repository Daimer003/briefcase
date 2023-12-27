import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'


const styles = {
    global: (props: any) => ({
        body: {
            bg: mode('#0D0D0D', '#D0D9D6')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: 'red',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: (props: any) => ({
            color: mode('#D0D9D6', '#0D0D0D')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colors = {
    grassTeal: '#D0D9D6',
    greenDawn: {
        50: "#D0D9D6"
    }
}

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    fonts,
    colors
})

export default theme;