import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as S from "../styles/styles.js"
import loader from "./../assets/Spinner-1.5s-200px.svg"
export default function VideoCollectionsComponent() {
    const [collections, setCollections] = useState()
    const navegation = useNavigate()
    useEffect(() => {
        axios({
            method: "get",
            url: "https://tchutchukos-hackathon.herokuapp.com/categories",
        })
            .then((response) => {
                setCollections(response.data)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <S.AppContainer>
            <S.VideoCollectionContainer>
                {collections ? (
                    collections.map((item, index) => {
                        return (
                            <S.VideoCollection
                                key={index}
                                onClick={() => {
                                    navegation(`/collection/${item.title}`)
                                }}
                            >
                                <img src={item.image} alt={item.title} />
                                <div className="description">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </S.VideoCollection>
                        )
                    })
                ) : (
                    <img src={loader} alt="" />
                )}
            </S.VideoCollectionContainer>
        </S.AppContainer>
    )
}
