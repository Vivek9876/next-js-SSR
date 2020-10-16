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
            <div className="a155_783">
                <div className="a155_784">
                    <div className="a155_805"><span className="a155_785">Post  Digest </span></div>
                    <span className="a155_786">Contact</span>
                </div>
                <div className="a165_7">
                    <div className="a165_8">
                        <div className="a165_9">
                            <div className="a165_10"></div>
                        </div>
                    </div>
                </div>
            </div>
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