import Modal from "@/app/components/Modal";
import useUploadModal from "@/hooks/useUploadModal";

const UploadModal = () => {
    const uploadModal = useUploadModal();

    const onChange = (open:boolean) => {
        if (!open) {
            //Reset the form
            uploadModal.onClose();
        }
    }
    return (
        <Modal
            title="Add a song"
            description="Upload an mp3 file"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            Form
        </Modal>
    );
}

export default UploadModal;