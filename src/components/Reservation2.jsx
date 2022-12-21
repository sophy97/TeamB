import styles from '../css/Reservation.module.css'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import DataContext from "../data/DataContext";

const Reservation2 = () => {
    const {state,action}= useContext(DataContext);

    const ReservationBtn = (e) => {
        let btnValue = e.target.value;
        if (btnValue == 'onLogin') {
            alert('예약이 완료되었습니다');
            alert('마이페이지에서 확인해주세요');             
        } else {
            alert('로그인이 필요합니다');            
        }
    }

    const getH_data = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div>
                {
                    state.mypageData ? (
                    <div className={styles.titlebox}>
                        <h2>예약정보</h2> 
                    <hr />
                    <h4> 
                    <br />{state.h_name}</h4>
                    <h5> <br />{state.h_address}</h5>
                        </div>
                    ) : 
                        (
                        <div className={styles.titlebox}>
                            <h2>예약정보</h2> 
                    <hr />
                    <h4> 
                    <br />{state.h_name}</h4>
                    <h5> <br />{state.h_address}</h5>
                        </div>
                    )
                }
                        
                <div className={styles.mapbox}>
                    <h4 >예약하실 날짜를 선택해주세요</h4>
                    <DatePicker className={styles.date}
                        selected={state.startDate}
                        onChange={(date) => action.setStartDate(date)}
                        locale={ko}                   // 한글로 변경
                        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                        showPopperArrow={false}       // 화살표 변경
                        minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
                    />  
                </div> 
                        
                { /* 로그인 일 때 페이지이동 및 데이터 전달 */
                    state.isLoginned == true ? 
                    (<div onClick={getH_data} className={styles.linkbox} >
                        <Link className={styles.link}  to='/mypage'> 
                        <button  onClick={ReservationBtn} value='onLogin'>예약</button>
                    </Link>
                    </div>)                
                    :  
                    (<div className={styles.linkbox}>
                    <Link className={styles.link} to='/firebaselogin'> 
                    <button  onClick={ReservationBtn} value='offLogin'>예약</button>
                    </Link>
                    </div>
                    )
                }
            </div>
        </div> 
    );
} 

export default Reservation2;