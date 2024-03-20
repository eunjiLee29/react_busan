import React from 'react';

const TourItem = ({ busaninfo }) => { //파일명대로 변수 자동 생성 => 이러한 이유로 대문자로 파일명 생성이 편함
    //api 데이터 값 입력
    const {
        TITLE, /* 제목 */
        MAIN_IMG_NORMAL, /* 이미지url */

        MAIN_TITLE, /* 콘텐츠명 */
        PLACE /* 장소 */
    } = busaninfo;
    return (
        <div className='item'>
            <h4>
                {TITLE}
            </h4>
            <figure>
                <img src={MAIN_IMG_NORMAL} alt={TITLE} />
            </figure>
            <div className='item--text'>
                <p className='location'>{MAIN_TITLE}</p>                
                <button>
                    바로가기
                </button>
            </div>
        </div> /* item end */
    );
};

export default TourItem;