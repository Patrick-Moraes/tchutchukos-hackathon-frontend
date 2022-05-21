import React, { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"

import * as S from "./../styles/styles.js"
import { useEffect } from "react/cjs/react.production.min"

export default function VideoPage() {
    const { videoId } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [newComment, setNewComment] = useState("")

    const API_URL = process.env.REACT_APP_API_URL

    const [videos, setVideos] = useState(() => {
        axios
            .get(`${API_URL}/videos/`)
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

    function handleSubmit() {
        axios
            .post(`${API_URL}/videos/${videoId}`, {
                name,
                comment: newComment,
            })
            .then((response) => {})
            .catch((error) => {})
    }

    function handleClick(e, sidebarVideo) {
        navigate(`/videos/${sidebarVideo._id}`)
    }

    return (
        <S.PageContainer>
            <S.VideoPageContainer>
                <S.VideosSidebar>
                    <S.SidebarTitle>Outros vídeos</S.SidebarTitle>
                    <S.SidebarVideos>
                        {videos?.map((sidebarVideo) => (
                            <Link to={`/videos/${sidebarVideo._id}`}>
                                <S.SidebarVideo
                                    onClick={(sidebarVideo) =>
                                        handleClick(sidebarVideo)
                                    }
                                >
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
                            </Link>
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
                                <S.CommentsLabelTitle>
                                    Insira um novo comentário:{" "}
                                </S.CommentsLabelTitle>
                                <S.CommentForm onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Nome"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    <textarea
                                        type="text"
                                        placeholder="Insira aqui o seu comentário"
                                        value={newComment}
                                        onChange={(e) =>
                                            setNewComment(e.target.value)
                                        }
                                    />
                                    <button>Enviar</button>
                                </S.CommentForm>
                                <S.CommentsLabel>Comentários: </S.CommentsLabel>
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
