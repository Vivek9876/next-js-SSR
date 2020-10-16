import React, { useState } from "react";
import footerStyle from "./footer.style";
import Modal from '@material-ui/core/Modal';
import RadioButton from "../filter/common/commonRadioButton"
const Footer = () => {

    const [openModal, setOpenmodal] = useState(false);

    const handleOpen = () => {
        setOpenmodal(true);
    };

    const handleClose = () => {
        setOpenmodal(false);
    };

    const body = (
        // style will needs to be apply in footer.style.js
        <div className="">
            Genres
            <RadioButton type="typeName" />
            Regions
            <RadioButton type="cityName" />
        </div>
    );

    return (
        <>

            This is Footer
            <div>
                <span className="postDigest" onClick={handleOpen}>Post Digest</span>
            </div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <style jsx>{footerStyle}</style>
        </>
    )
}

export default Footer;