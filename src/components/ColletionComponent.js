import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import loader from "./../assets/Spinner-1.5s-200px.svg"
import * as S from "./../styles/styles.js"

export default function ColletionComponent() {
    const [infoColleciton, setInfoColleciton] = useState()
    const { collection } = useParams()
    const navigation = useNavigate()

    useEffect(() => {
        axios({
            method: "get",
            url: `https://tchutchukos-hackathon.herokuapp.com/videos?category=${collection}`,
        })
            .then((response) => {
                setInfoColleciton(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <S.AppContainer>
            <h1 className="title">{collection}</h1>
            <S.VideoCollectionContainer>
                {infoColleciton ? (
                    infoColleciton.map((item, index) => {
                        return (
                            <S.ColletionContainer
                                key={index}
                                onClick={() => {
                                    navigation(`/videos/${item._id}`)
                                }}
                            >
                                <img
                                    src="data:image/png;base64,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"
                                    alt={item.description}
                                />
                                <div className="description">
                                    <h1>{item.title}</h1>
                                    <p>{item.author}</p>
                                    {/* <p>{item.releaseDate}</p> */}
                                    <p className="time">{item.duration}</p>
                                </div>
                            </S.ColletionContainer>
                        )
                    })
                ) : (
                    <img src={loader} alt="" />
                )}
            </S.VideoCollectionContainer>
        </S.AppContainer>
    )
}
