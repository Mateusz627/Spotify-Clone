"use client";

import {useEffect, useState} from "react";
import Modal from "@/app/components/Modal";
import AuthModal from "@/app/components/AuthModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted){
        return null;
    }
  return (
    <>
        <AuthModal />
    </>
  );
}

export default ModalProvider;