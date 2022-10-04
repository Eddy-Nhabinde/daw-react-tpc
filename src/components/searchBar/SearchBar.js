import styles from './SearchBar.module.css'
import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import stays from '../../constantes/stays.json'
import LocationOnIcon from '@material-ui/icons/LocationOn';

var city = []

export function SearchComponent({ setSearch, maxWid, setMaxWid, Location, setLocation, removeElement }) {

    return (
        <div className={maxWid ? styles.SearchingContainer : styles.Container}>
           
            <div className={styles.logo} id="logo">
                <h3>Windbnb</h3>
            </div>
            <div className={maxWid ? styles.Searching : styles.Search}
            >
                <input
                    id="ip1"
                    className={styles.input}
                    placeholder='Helsinki, Finlad'
                    onClick={() => {
                        setMaxWid(true); removeElement(); setLocation(true)
                        document.getElementById("ip1").style.border = "solid 1px black"
                        document.getElementById("ip1").style.marginLeft = "-18px"
                        document.getElementById("ip1").style.width = "40%"
                        document.getElementById("ip1").style.borderRadius = "10px"
                        document.getElementById("ip2").style.border = "none"
                        document.getElementById("ip2").style.borderRight = "solid 2px rgba(0, 0, 0, 0.078)"
                        document.getElementById("ip2").style.borderRadius = "0px"
                    }}
                    onChange={(event) => { setSearch(event.target.value); }}
                >
                </input>

                <input
                    id="ip2"
                    className={styles.input}
                    placeholder='Add Guests'
                    onClick={() => {
                        setMaxWid(true); removeElement(); setLocation(false)
                        document.getElementById("ip1").style.border = "none"
                        document.getElementById("ip1").style.borderRight = "solid 2px rgba(0, 0, 0, 0.078)"
                        document.getElementById("ip1").style.borderRadius = "0px"
                        document.getElementById("ip2").style.border = "solid 1px black"
                        document.getElementById("ip2").style.width = "40%"
                        document.getElementById("ip2").style.borderRadius = "10px"
                    }}
                    onChange={(event) => { console.log(event.target.value) }}
                >
                </input>
                <Button onClick={() => { setMaxWid(false); removeElement(2); setLocation(false) }} className={styles.button} variant="contained" color="secondary">
                    <SearchIcon />{maxWid ? "Pesquisar" : ""}</Button>
            </div>
            {maxWid ? <div></div>
                : ""}
            {Location ? <div className={styles.sugestion}>
                <h4>&nbsp;</h4>
                {city = [] && stays.map((val, id) => {
                    if (city.indexOf(val.city) == -1) {
                        city.push(val.city)
                        return (
                            <h4><LocationOnIcon className={styles.location} />{val.city},&nbsp;{val.country}</h4>
                        )
                    }
                })}
            </div>
                : ""}
            {maxWid ? <div></div>
                : ""}
        </div>
    )
}