import TourItem from "./TourItem";
import { useState, useEffect } from "react";
//axios => api 사용 위해 필요한 함수 존재, 설치 후 연결 필요
import axios from "axios";
const TourList = () => {
    const key = "wZeUZ%2FgZ5NhsFo0K8jkOXzFSj7EGpzIcpkyrin3fjDAj3G1Zx87yjwq8UvfcP2rM%2B9tHF%2FOYfERVHUZXWpz2gw%3D%3D"
    const [tour, setTour] = useState([]);
    //useState 값을 변경해줌
    //[초기값, 변화되는 값]
    useEffect(() => {
        const tourData = async() => {
            //async 비동기 작업시 필요한 키워드
            //비동기 => 특정코드가 끝날 때까지 
            //코드 실행을 멈추지 않고
            //다음 코드를 먼저 실행하도록 하는 것
            //try, catch try 코드 맞음 실행, 틀리면 catch 안 코드 실행
            try {//http와 https의 차이 깃허브에 올릴 시 호출 문제로 http > https로 수정해야함
                const response = await axios.get(`http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${key}&numOfRows=5&pageNo=1&resultType=json`) //요청메세지란 링크 복붙 //링크 안 한글 인증키 제거, 대신 ${key} 입력 //문서 안 JSON방식 호출 코드 & 붙이고 뒤로 입력
                setTour(response.data.getRecommendedKr.item);
            } catch(error) {
                //오류가 발생하면 실행될 코드
                console.log(error)
            };
        };

        tourData();
    }, [])

    return (
        <div className = "tour_list">
            {tour.map((tourMap) => ( //map: 배열함수, 호출하고자 하는 데이터 모두 불러오도록 하는 자바 foreach랑 대충 비슷
                <TourItem busaninfo = {tourMap}/>
            ))}
        </div> /* .tour_list end */
    )
}

export default TourList;