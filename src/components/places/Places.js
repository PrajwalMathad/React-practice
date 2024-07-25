import { useEffect, useState } from "react";
import classes from "./Places.module.css";
import ErrorBlock from "../Error";
import { getAvailablePlaces, getUserPlaces, updateUserPlaces } from '../../httpService';


function Places(props) {
    const [places, setPlaces] = useState([]);
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function getPlaces() {
            try {
                const data = await getAvailablePlaces();
                const userData = await getUserPlaces();
                setPlaces(data);
                setSelectedPlaces(userData);
            } catch (err) {
                setError({
                    message: err.message || "Error occured!"
                })
            }
        }
        getPlaces();
    }, []);

    const addPlace = async (selectedPlace) => {
        if (!selectedPlaces.find(place => place.id === selectedPlace.id)) {
            setSelectedPlaces((places) => {
                return [...places, selectedPlace]
            })
            try {
                updateUserPlaces([...selectedPlaces, selectedPlace]);
            } catch (err) {
                setError({
                    message: err.message || "Error occured!"
                })
            }

        }
    }

    const removePlace = (selectedPlace) => {
        setSelectedPlaces((places) => {
            const updatedPlaces = places.filter(place => place.id !== selectedPlace.id);
            return [...updatedPlaces]
        })
        try {
            const updatedPlaces = selectedPlaces.filter(place => place.id !== selectedPlace.id);
            updateUserPlaces([...updatedPlaces]);
        } catch (err) {
            setError({
                message: err.message || "Error occured!"
            })
        }
    }

    return (
        <div className="section">
            <h2 className="section-header">Places: HTTP requests</h2>
            {!error ?
                <div className={classes.places}>
                    <div style={{ border: "1px solid blue", margin: "1em" }}>
                        <h2 className="section-header">Selected Places</h2>
                        {
                            selectedPlaces.length ? selectedPlaces.map(place => {
                                return (
                                    <button className={`${classes.placeBtn} ${classes.selectedPlaceBtn}`} key={place.id}
                                        onClick={() => removePlace(place)}
                                    >{place.title}
                                    </button>
                                )
                            }) :
                                <p>Select Places to show!</p>
                        }
                    </div>
                    <div style={{ border: "1px solid blue", margin: "1em" }}>
                        <h2 className="section-header">Available Places</h2>
                        {
                            places.length ? places.map(place => {
                                return (
                                    <button className={classes.placeBtn} key={place.id}
                                        onClick={() => addPlace(place)}
                                    >{place.title}
                                    </button>
                                )
                            }) :
                                <p>No places</p>
                        }
                    </div>
                </div> :
                <ErrorBlock title={"Can't get places"} text={error.message} />
            }
        </div>
    )
}

export default Places;