import React, { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import * as S from "./../styles/styles.js"

const categories = [
    {
        _id: "62882b7358e88f865c18b3e7",
        image: "https://www.cursoemvideo.com/wp-content/uploads/2019/08/html5-300x300.jpg",
        title: "HTML5",
        description:
            "Aprenda HTML5, CSS3 e JavaScript enquanto monta um site completo com essas tecnologias.",
    },
    {
        _id: "62882b7358e88f865c18b3e8",
        image: "https://www.cursoemvideo.com/wp-content/uploads/2019/08/javascript-300x300.jpg",
        title: "Javascript",
        description:
            "Curso de JavaScript, voltado para iniciantes sobre ECMAScript, a versão padronizada do JS.",
    },
    {
        _id: "62882b7358e88f865c18b3e9",
        image: "https://www.cursoemvideo.com/wp-content/uploads/2019/08/php-300x300.jpg",
        title: "PHP Básico",
        description:
            "Curso com os primeiros passos para criar sites que utilizem a tecnologia PHP incorporada.",
    },
]

const category = {
    _id: "62882b7358e88f865c18b3e7",
    image: "https://www.cursoemvideo.com/wp-content/uploads/2019/08/html5-300x300.jpg",
    title: "HTML5",
    description:
        "Aprenda HTML5, CSS3 e JavaScript enquanto monta um site completo com essas tecnologias.",
}

export default function VideoPage() {
    const { videoId } = useParams()

    const API_URL = process.env.REACT_APP_API_URL

    const [videos, setVideos] = useState(() => {
        axios
            .get(`${API_URL}/videos`)
            .then((response) => {
                console.log(response.data)

                setVideos(response.data)
            })
            .catch((error) => {})
    })

    const [video, setVideo] = useState(() => {
        axios
            .get(`${API_URL}/videos/${videoId}`)
            .then((response) => {
                console.log(response.data)

                setVideo(response.data)
            })
            .catch((error) => {})
    })

    return (
        <S.PageContainer>
            <S.VideoPageContainer>
                <S.VideosSidebar>
                    <S.SidebarTitle>Vídeos de {category.title}</S.SidebarTitle>
                    <S.SidebarVideos>
                        {videos?.map((sidebarVideo) => (
                            <S.SidebarVideo>
                                <S.SidebarVideoTitle>
                                    {sidebarVideo.title}
                                </S.SidebarVideoTitle>
                                <S.SidebarVideoAuthor>
                                    {sidebarVideo.author}
                                </S.SidebarVideoAuthor>
                                <S.SidebarVideoReleaseDate>
                                    Data de envio:{" "}
                                    {`${
                                        sidebarVideo.releaseDate.split(
                                            /[-T]/
                                        )[2]
                                    }/${
                                        sidebarVideo.releaseDate.split(
                                            /[-T]/
                                        )[1]
                                    }/${
                                        sidebarVideo.releaseDate.split(
                                            /[-T]/
                                        )[0]
                                    }`}
                                </S.SidebarVideoReleaseDate>
                            </S.SidebarVideo>
                        ))}
                    </S.SidebarVideos>
                </S.VideosSidebar>
                <S.MainContent>
                    {video ? (
                        <>
                            <S.VideoInfoContainer>
                                <S.Video>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={video.URL}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </S.Video>
                                <S.VideoInfo>
                                    <S.MainInfo>
                                        <S.VideoTitle>
                                            {video.title}
                                        </S.VideoTitle>
                                        <S.VideoAuthor>
                                            {video.author}
                                        </S.VideoAuthor>
                                        <S.VideoDescription>
                                            {video.description}
                                        </S.VideoDescription>
                                    </S.MainInfo>
                                    <S.SecondaryInfo>
                                        <S.Categories>
                                            {video.categories.map(
                                                (category) => (
                                                    <S.Category>
                                                        {category}
                                                    </S.Category>
                                                )
                                            )}
                                        </S.Categories>
                                        <S.ReleaseDate>
                                            Data de envio:{" "}
                                            {`${
                                                video.releaseDate.split(
                                                    /[-T]/
                                                )[2]
                                            }/${
                                                video.releaseDate.split(
                                                    /[-T]/
                                                )[1]
                                            }/${
                                                video.releaseDate.split(
                                                    /[-T]/
                                                )[0]
                                            }`}
                                        </S.ReleaseDate>
                                    </S.SecondaryInfo>
                                </S.VideoInfo>
                            </S.VideoInfoContainer>
                            <S.Comments>
                                {video.comments.map(({ name, comment }) => (
                                    <S.Comment>
                                        <S.CommentAuthor>
                                            {name}
                                        </S.CommentAuthor>
                                        <S.CommentText>{comment}</S.CommentText>
                                    </S.Comment>
                                ))}
                            </S.Comments>
                        </>
                    ) : (
                        <></>
                    )}
                </S.MainContent>
            </S.VideoPageContainer>
        </S.PageContainer>
    )
}
