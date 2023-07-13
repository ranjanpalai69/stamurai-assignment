export type Task={
   id: string,
   title: string,
   description: string,
   status:string,
}

export type  ModalWork= {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
}