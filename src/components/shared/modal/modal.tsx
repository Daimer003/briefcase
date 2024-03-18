import { ContentModal } from '@/styles/components/shared/Modal/modal.styles'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Box,
} from '@chakra-ui/react'
import React, { ReactNode, useEffect } from 'react'


interface Props {
    title: string,
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void,
    user?: boolean,
    size: string
}

const ModalGlobal = (
    {
        title,
        children,
        isOpen,
        onClose,
        size
    }: Props) => {
    const OverlayOne = () => (
        <ModalOverlay />
    )
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    useEffect(() => {
        setOverlay(<OverlayOne />)
    }, [])

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={size}
        >
            {overlay}
            <ModalContent
                margin='15px'
            >
                <ContentModal>
                    <Box
                        width='100%'
                        borderRadius="8px"
                        padding='10px'
                    >
                        <ModalHeader>
                            {title}
                        </ModalHeader>
                        <ModalCloseButton />
                        {children}
                    </Box>
                </ContentModal>
            </ModalContent>
        </Modal>
    )
}

export default ModalGlobal