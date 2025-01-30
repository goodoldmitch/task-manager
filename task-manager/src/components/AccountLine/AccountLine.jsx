import './AccountLine.css'
import ava from '../../assets/img/ava-1.jpg'

function AccountLine(){

    return(
        <div className="account-line">
            <img src={ava} alt="" />
            <span>Anatoliy Pinkman</span>
        </div>
    )
}

export default AccountLine