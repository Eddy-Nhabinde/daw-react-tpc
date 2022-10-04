import React from "react";
import stays from '../../../constantes/stays.json'
import styles from './mainPage.module.css'
import StarRateIcon from '@material-ui/icons/StarRate';
import { Moddal } from "../../modal/modal";
import { useState } from "react";

export function MainPage({ search, setMaxWid, setLocation, removeElement }) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <div className={styles.div}
            onClick={() => { setLocation(false); setMaxWid(false); removeElement(2) }}
        >
            {open && <Moddal value={value} setOpen={setOpen} open={open} />}

            {search.length > 0 ?
                stays.map((val, id) => {
                    if (val.city.substring(0, search.length) == search.charAt(0).toUpperCase() + search.slice(1)) {
                        return (
                            <div className={styles.stayConatiner}
                                onClick={() => { setOpen(true); setValue(val) }}
                            >
                                <img className={styles.img} src={val.photo} alt="" />

                                <div className={styles.descriptionConatiner}>
                                    <div className={styles.descriptionContent1}>
                                        <div className={val.superHost ? styles.superHost : ""}>
                                            {val.superHost ? "SuperHost" : ""} &nbsp;
                                        </div>
                                        <div className={styles.description}>
                                            {val.type}{val.beds ? ` ${val.beds}  Beds ` : ""}
                                        </div>
                                    </div>
                                    <div className={styles.ratingg} style={{ display: "flex" }} >
                                        <StarRateIcon />{val.rating}
                                    </div>
                                </div>

                                <p className={styles.titulo} >{val.title}</p>
                            </div>
                        )
                    }
                })
                :
                stays.map((val, id) => {
                    return (
                        <div className={styles.stayConatiner}
                            onClick={() => { setOpen(true); setValue(val) }}

                        >
                            <img className={styles.img} src={val.photo} alt="" />

                            <div className={styles.descriptionConatiner}>
                                <div className={styles.descriptionContent1}>
                                    <div className={val.superHost ? styles.superHost : ""}>
                                        {val.superHost ? "SuperHost" : ""} &nbsp;
                                    </div>
                                    <div className={styles.description}>
                                        {val.type}{val.beds ? ` ${val.beds}  Beds ` : ""}
                                    </div>
                                </div>
                                <div className={styles.ratingg} style={{ display: "flex" }} >
                                    <StarRateIcon />{val.rating}
                                </div>
                            </div>

                            <p className={styles.titulo} >{val.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}