import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import loader from "./../assets/Spinner-1.5s-200px.svg"
import * as S from "./../styles/styles.js"

export default function ColletionComponent() {
    const [infoColleciton, setInfoColleciton] = useState()
    const { collection } = useParams()

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
                            <S.ColletionContainer key={index}>
                                <img
                                    src="https://img.freepik.com/fotos-gratis/paisagem-natural-em-um-jardim-botanico_35355-5948.jpg"
                                    alt={item.description}
                                />
                                <div className="description">
                                    <h1>{item.title}</h1>
                                    <p>{item.author}</p>
                                    {/* <p>{item.releaseDate}</p> */}
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
