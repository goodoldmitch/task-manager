import './Header.css'
import CurrentTime from '../CurrentTime/CurrentTime'
import SearchField from '../SearchField/SearchField'
import AccountLine from '../AccountLine/AccountLine'

function Header(){

    return(
        <header>
            <div className="container">
                <CurrentTime />
                <SearchField />
                <AccountLine />
            </div>
      </header>
    )
}

export default Header