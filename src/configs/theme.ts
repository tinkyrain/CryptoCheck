import { 
    type ThemeConfig, 
    extendTheme ,
} from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
};

export const theme: Record<string, any> = extendTheme({ config: config });