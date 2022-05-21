import * as S from "./../styles/styles.js"
import { useNavigate } from "react-router-dom"
export default function Footer() {
    const navigation = useNavigate()
    return (
        <S.FooterContainer>
            <div className="collaborator">
                <a
                    href="https://www.linkedin.com/school/driven-education/"
                    alt=""
                >
                    <img
                        src={
                            "https://media-exp1.licdn.com/dms/image/C4D0BAQGFnjeVEcmPLQ/company-logo_200_200/0/1627398190025?e=2147483647&v=beta&t=3nTZ9yMkZRjXNVyB5cgLhJ5mxKu7WavVboUHNUKg_JE"
                        }
                        alt="nao sou o hiann"
                    />
                </a>
            </div>
            <div className="collaborator">
                <a href="https://github.com/lemoscaio">
                    <img
                        src={
                            "https://avatars.githubusercontent.com/u/74937642?v=4"
                        }
                        alt="jamais serei o hiann"
                    />
                </a>
            </div>
            <div className="collaborator">
                <a href="https://github.com/Jackie-Moraes" alt="">
                    <img
                        src={
                            "https://avatars.githubusercontent.com/u/98192520?v=4"
                        }
                        alt="sonho em ser o hiann"
                    />
                </a>
            </div>
            <div className="collaborator">
                <a href="https://github.com/Rodolpho-Oliveira">
                    <img
                        src={
                            "https://avatars.githubusercontent.com/u/79462301?v=4"
                        }
                        alt="hiann"
                    />
                </a>
            </div>
            <div className="collaborator">
                <a href="https://github.com/hiannmanso" alt="">
                    <img
                        src={`https://avatars.githubusercontent.com/u/83359633?v=4`}
                        alt="hiann"
                    />
                </a>
            </div>
        </S.FooterContainer>
    )
}
