import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,

} from '@chakra-ui/react'
import React, { ReactNode, useEffect } from 'react'


interface Props {
    title: string,
    children: ReactNode,
    isOpen: boolean,
    onOpen: () => void,
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
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    useEffect(() => {
        setOverlay(<OverlayOne />)
    }, [])

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={size}
            >
                {overlay}
                <ModalContent
                    background="black"
                    border="1px solid #F0F0F2"
                    padding="10px"
                    margin="20px"
                >
                    <ModalHeader
                        margin="0"
                        padding="10px 0"
                    >{title}</ModalHeader>
                    <ModalCloseButton />
                    {children}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalGlobal