import styled from "styled-components"

export const PageContainer = styled.main`
    width: 100%;
    height: 100%;

    margin: 100px auto 0;
`

export const Header = styled.header`
    background-color: orange;

    position: fixed;
    top: 0;

    width: 100%;
    height: 100px;
`
// VIDEO PAGE

export const VideoPageContainer = styled.div`
    background-color: blue;

    display: flex;
`

export const VideosSidebar = styled.aside`
    background-color: green;

    max-width: 500px;
    height: 100%;

    padding: 10px;
`
export const SidebarTitle = styled.h3`
    display: flex;
    justify-content: center;

    font-size: 18px;
    text-align: center;
    font-weight: 600;

    padding-bottom: 10px;
    margin: 10px 0 10px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const SidebarVideos = styled.div``

export const SidebarVideo = styled.div`
    background-color: white;

    padding: 10px 5px;
    margin: 5px 0;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const SidebarVideoTitle = styled.p`
    font-weight: 700;
    font-size: 14px;
`

export const SidebarVideoAuthor = styled.p`
    font-weight: 600;
    font-size: 12px;
`

export const SidebarVideoReleaseDate = styled.p`
    font-size: 12px;
`

export const MainContent = styled.section`
    background-color: red;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const VideoInfoContainer = styled.div`
    background-color: purple;

    display: flex;
    height: 100%;
    width: 100%;
`

export const Video = styled.div`
    background-color: yellow;

    align-self: center;

    height: 100%;
    width: 50%;

    padding: 10px;
    margin: 0 20px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const VideoInfo = styled.div`
    background-color: aliceblue;

    /*height: 100%; */
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;

    padding: 10px;
    margin: 0 0 0 20px;

    border-radius: 10px 0 0 10px;
`

export const MainInfo = styled.div`
    height: 100%;
`

export const SecondaryInfo = styled.div`
    /* height: 100%; */
`

export const VideoTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;

    margin-bottom: 10px;
`

export const VideoAuthor = styled.h4`
    font-size: 18px;
    font-weight: 600;

    margin-bottom: 15px;
`

export const VideoDescription = styled.p`
    font-size: 16px;
    margin-bottom: 10px;

    min-height: 100px;
    max-height: 200px;

    overflow: auto;
`

export const Categories = styled.div`
    background-color: bisque;

    display: flex;

    border-radius: 5px;
    padding: 5px;
`

export const Category = styled.div`
    background-color: #fc7753;

    padding: 10px;
    margin: 5px;

    border-radius: 5px;

    color: white;
`

export const ReleaseDate = styled.p`
    padding: 15px 0 5px;
`

export const Comments = styled.div`
    height: 100%;
    padding: 10px 5px;
`

export const Comment = styled.div`
    padding: 15px 5px;

    display: flex;
    flex-direction: column;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:last-of-type {
        border-bottom: none;
    }
`

export const CommentAuthor = styled.p`
    margin: 0 0 5px;
`

export const CommentText = styled.p`
    margin: 0 0 10px;
`
