import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import styles from './modal.module.css'

const Estilos = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        maxHeight: '85vh',
        overflowY: "scroll",
        overflowX: "hidden",
        width:'50vw'
    },
    table: {
        minWidth: 700,
    }
}));


export function Moddal({ value, setOpen, open }) {
    const Stylesclasses = Estilos();
    const handleClose = () => {
        setOpen(false);
    };
    console.log(value)
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={Stylesclasses.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Paper className={Stylesclasses.paper}>
                <div className={styles.stayConatiner}
                >
                    <img className={styles.img} src={value.photo} alt="" />

                    <div className={styles.descriptionConatiner}>
                        <div className={styles.descriptionContent1}>
                            <div className={value.superHost ? styles.superHost : ""}>
                                {value.superHost ? "SuperHost" : ""} &nbsp;
                            </div>
                            <div className={styles.description}>
                                {value.type}{value.beds ? ` ${value.beds}  Beds ` : ""}
                            </div>
                        </div>
                    </div>
                    <p className={styles.titulo} >{value.title}</p>
                </div>
            </Paper>
        </Modal>
    )
}